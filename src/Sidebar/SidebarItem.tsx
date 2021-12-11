export type TSidebarItemProps = {
  onClick: () => void;
  isActive: boolean;
  icon: any;
  title: string;
};

export default function SidebarItem(props: TSidebarItemProps) {
  return (
    <div
      id="sidebar-item"
      onClick={props.onClick}
      className={`main-sidebar__item ${props.isActive ? "active" : "inactive"}`}
    >
      <div>{props.icon}</div>
      <div>{props.title}</div>
    </div>
  );
}
