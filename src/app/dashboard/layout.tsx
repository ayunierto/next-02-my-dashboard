import {
  Sidebar,
  SidebarLink,
  SidebarMenu,
  SidebarUser,
  SidebarUserEmail,
  SidebarUserName,
} from "@/components/Dashboard";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { Calculator, LayoutDashboard, UserRound } from "lucide-react";
import Image from "next/image";

import Link from "next/link";

const links: {
  path: string;
  title: string;
  icon: React.ReactNode;
}[] = [
  {
    path: "/dashboard/main",
    title: "Dashboard",
    icon: <LayoutDashboard className="h-6 w-6" />,
  },
  {
    path: "/dashboard/counter",
    title: "Counter",
    icon: <Calculator className="h-6 w-6" />,
  },
];

const user: {
  name: string;
  email: string;
  img?: string;
} = {
  name: "Jhon Doe",
  email: "jhon-doe@example.com",
  img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[320px_1fr] lg:grid-cols-[380px_1fr]">
      <Sidebar>
        <SidebarUser>
          <Link href="#" className="flex items-center gap-2 font-semibold">
            {user.img ? (
              <Image
                width={56}
                height={56}
                alt="User Avatar"
                src={user.img}
                className="h-14 w-14 rounded-full"
              />
            ) : (
              <UserRound
                strokeWidth={1}
                className="h-14 w-14 bg-muted rounded-full p-2"
              />
            )}
          </Link>
          <div className="flex flex-col">
            <SidebarUserName>{user.name}</SidebarUserName>
            <SidebarUserEmail>{user.email}</SidebarUserEmail>
          </div>
        </SidebarUser>

        <SidebarMenu>
          {links.map(({ path, icon, title }) => (
            <Link href={path} key={title} prefetch={true}>
              <SidebarLink path={path}>
                {icon}
                {title}
              </SidebarLink>
            </Link>
          ))}
        </SidebarMenu>
      </Sidebar>

      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <div className="w-full flex-1"></div>
          <ThemeToggle />
        </header>

        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
