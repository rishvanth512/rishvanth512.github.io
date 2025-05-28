import { useThree, useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";

const HeroCamera = ({ children }) => {
  const groupRef = useRef();
  const { gl } = useThree();

  const isDragging = useRef(false);
  const lastX = useRef(0);
  const rotationY = useRef(0);
  const targetRotationY = useRef(0);

  useEffect(() => {
    const canvas = gl.domElement;

    const getClientX = (e) => e.touches?.[0]?.clientX ?? e.clientX ?? 0;

    const handleDown = (e) => {
      isDragging.current = true;
      lastX.current = getClientX(e);
    };

    const handleUp = () => {
      isDragging.current = false;
    };

    const handleMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const currentX = getClientX(e);
      const deltaX = currentX - lastX.current;
      lastX.current = currentX;

      targetRotationY.current += deltaX * 0.005; // Slower sensitivity
    };

    canvas.addEventListener("pointerdown", handleDown);
    canvas.addEventListener("pointerup", handleUp);
    canvas.addEventListener("pointerleave", handleUp);
    canvas.addEventListener("pointermove", handleMove);

    canvas.addEventListener("touchstart", handleDown, { passive: false });
    canvas.addEventListener("touchend", handleUp, { passive: false });
    canvas.addEventListener("touchmove", handleMove, { passive: false });

    return () => {
      canvas.removeEventListener("pointerdown", handleDown);
      canvas.removeEventListener("pointerup", handleUp);
      canvas.removeEventListener("pointerleave", handleUp);
      canvas.removeEventListener("pointermove", handleMove);

      canvas.removeEventListener("touchstart", handleDown);
      canvas.removeEventListener("touchend", handleUp);
      canvas.removeEventListener("touchmove", handleMove);
    };
  }, [gl]);

  useFrame(() => {
    // Smooth damping
    rotationY.current += (targetRotationY.current - rotationY.current) * 0.1;

    if (groupRef.current) {
      groupRef.current.rotation.set(0, rotationY.current, 0);
    }
  });

  return <group ref={groupRef} position={[0, 0, 0]}>{children}</group>;
};

export default HeroCamera;
