import HeaderBar from "@/components/HeaderBar";
import SectionLibrary from "@/components/SectionLibrary";
import PreviewSpace from "@/components/PreviewSpace";
import EditPanel from "@/components/EditPanel";

export default function Home() {
  return (
    <div className="max-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-300">
      <HeaderBar />
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1">
          <PreviewSpace />
        </div>
        <SectionLibrary />
        <EditPanel />
      </div>
    </div>
  );
}
