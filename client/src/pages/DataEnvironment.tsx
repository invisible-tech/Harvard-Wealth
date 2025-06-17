export default function DataEnvironment() {
  return (
    <div className="h-screen w-full">
      <iframe 
        src="https://harvard-wealth-management-bav37zs66-invisible-prototypes.vercel.app/visualize"
        className="w-full h-full border-0"
        title="Harvard Wealth Management Data Visualization"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
