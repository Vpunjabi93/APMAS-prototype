import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html, OrbitControls } from '@react-three/drei';

const ToolBadge = ({ name, logoUrl, position }: { name: string, logoUrl: string, position: [number, number, number] }) => {
  const groupRef = useRef<any>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Gentle rotation matching the camera position to always face camera
      groupRef.current.quaternion.copy(state.camera.quaternion);
    }
  });

  return (
    <group position={position} ref={groupRef}>
      <Html transform distanceFactor={12}>
        <div 
          className="flex flex-col items-center justify-center p-3 bg-white shadow-xl border border-gray-100 rounded-none w-24 h-24 hover:scale-110 transition-transform cursor-default"
          title={name}
        >
          <img src={logoUrl} alt={name} className="w-12 h-12 object-contain mb-2" />
          <span className="text-[10px] font-bold text-gray-700 text-center uppercase tracking-wider">{name}</span>
        </div>
      </Html>
    </group>
  );
};

export function AITools3D() {
  return (
    <div className="w-full h-[400px] lg:h-[500px] cursor-grab active:cursor-grabbing bg-gray-50 border border-gray-200">
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <group>
            <ToolBadge name="ChatGPT" logoUrl="https://svgl.app/library/chatgpt.svg" position={[-3, 2, 0]} />
            <ToolBadge name="Midjourney" logoUrl="https://svgl.app/library/midjourney.svg" position={[3, 3, -1]} />
            <ToolBadge name="OpenAI" logoUrl="https://svgl.app/library/openai.svg" position={[0, -1, 2]} />
            <ToolBadge name="Firebase" logoUrl="https://svgl.app/library/firebase.svg" position={[-4, -2, -2]} />
            <ToolBadge name="Supabase" logoUrl="https://svgl.app/library/supabase.svg" position={[4, -1, 1]} />
            <ToolBadge name="Salesforce" logoUrl="https://svgl.app/library/salesforce.svg" position={[0, 4, -3]} />
            <ToolBadge name="Analytics" logoUrl="https://svgl.app/library/google_analytics.svg" position={[-2, -5, 1]} />
          </group>
        </Float>
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.8}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
