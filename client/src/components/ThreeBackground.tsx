import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Stars } from '@react-three/drei';
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';

function ParticleField(props: any) {
  const ref = useRef<any>(null);
  
  // Generate particles in a sphere
  // Using a stable random seed or just memoizing could be better but this is fine for mockup
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#bf00ff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingShapes() {
  return (
    <group>
       {/* Primary floating shape */}
       <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[1, 0.5, 0]}>
          <torusKnotGeometry args={[0.4, 0.1, 128, 32]} />
          <meshStandardMaterial 
            color="#ccff00" 
            emissive="#ccff00"
            emissiveIntensity={2}
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>
      </Float>

      {/* Secondary shape */}
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={0.5}>
        <mesh position={[-1, -0.5, 0]}>
          <icosahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial 
            color="#ff0099" 
            emissive="#ff0099"
            emissiveIntensity={2}
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>
      </Float>
    </group>
  )
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-background">
      <Suspense fallback={null}>
        <Canvas 
          camera={{ position: [0, 0, 1] }}
          gl={{ 
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
            failIfMajorPerformanceCaveat: false
          }}
          dpr={[1, 2]}
          frameloop="always"
        >
          <fog attach="fog" args={['#050510', 0, 3]} />
          <ParticleField />
          <FloatingShapes />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <ambientLight intensity={0.5} />
        </Canvas>
      </Suspense>
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />
      
      {/* Scanline effect */}
      <div className="scanlines absolute inset-0 opacity-20" />
    </div>
  );
}
