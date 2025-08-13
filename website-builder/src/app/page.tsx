import HeaderBar from "@/components/HeaderBar";
import SectionLibrary from "@/components/SectionLibrary";
import PreviewSpace from "@/components/PreviewSpace";
import EditPanel from "@/components/EditPanel";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <HeaderBar />
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 py-6">
          <PreviewSpace />
        </div>
        <SectionLibrary />
        <EditPanel />
      </div>
    </div>
  );
}
