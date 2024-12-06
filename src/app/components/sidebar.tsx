import { sideBarItems } from "@/lib/constants";
import { SideBarComponent } from "./sidebar-component";

export function SideBar() {
  return (
    <div className="w-1/5 overflow-auto hidden md:block mt-[5vh] mb-[10vh] h-[80vh] scrollbar font-[family-name:var(--font-montserrat)]">
      <div className="ml-4">
        {sideBarItems.map((header, index) => (
          <div key={index}>
            <SideBarComponent header={header.header} item={header.item} />
          </div>
        ))}
      </div>
    </div>
  );
}
