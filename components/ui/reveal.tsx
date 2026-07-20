"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type Variant = "up" | "fade" | "left" | "right" | "scale";

const VARIANT_CLASS: Record<Variant, string> = {
  up: "",
  fade: "reveal-fade",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
};

interface RevealProps {
  children: ReactNode;
  /** Etiqueta a renderizar (div por defecto). */
  as?: ElementType;
  /** Dirección/estilo de entrada. */
  variant?: Variant;
  /** Retraso en ms para escalonar (stagger) varios elementos. */
  delay?: number;
  /** Si es false, la animación se repite cada vez que entra/sale del viewport. */
  once?: boolean;
  className?: string;
  style?: CSSProperties;
  /** Cualquier otra prop (onSubmit, onClick, id…) se reenvía al elemento. */
  [key: string]: unknown;
}

/**
 * Envuelve contenido y lo revela con una animación suave cuando entra en el
 * viewport (usando IntersectionObserver). Para elementos ya visibles al cargar
 * (p. ej. el hero) la animación se dispara de inmediato.
 */
export function Reveal({
  children,
  as,
  variant = "up",
  delay = 0,
  once = true,
  className,
  style,
  ...rest
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Ya hidratamos: cancela el temporizador de seguridad del layout para que
    // no quite la clase `html.js` (las animaciones sí van a funcionar).
    const w = window as typeof window & { __advalReveal?: ReturnType<typeof setTimeout> };
    if (w.__advalReveal) {
      clearTimeout(w.__advalReveal);
      w.__advalReveal = undefined;
    }

    const el = ref.current;
    if (!el) return;

    // Navegadores sin IntersectionObserver: mostramos sin animación.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) io.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const cls = ["reveal", VARIANT_CLASS[variant], visible ? "is-visible" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      ref={ref}
      className={cls}
      style={{ ...style, "--reveal-delay": `${delay}ms` } as CSSProperties}
      {...rest}
    >
      {children}
    </Tag>
  );
}
