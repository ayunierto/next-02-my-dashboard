import Link from "next/link";
import Image from "next/image";

import {
  AlignLeft,
  Bell,
  LayoutDashboard,
  ListOrdered,
  LogOut,
  Package,
  Settings,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { Sidebar } from "./Sidebar/Sidebar";
import {
  SidebarLink,
  SidebarUser,
  SidebarUserEmail,
  SidebarUserName,
} from "./Sidebar";
import { SidebarMenu } from "./Sidebar/SidebarMenu";
import { SidebarFooter } from "./Sidebar/SidebarFooter";

const links: {
  path: string;
  title: string;
  icon: React.ReactNode;
}[] = [
  {
    path: "/",
    title: "Dashboard",
    icon: <LayoutDashboard className="h-6 w-6" />,
  },
  {
    path: "/orders",
    title: "Orders",
    icon: <ListOrdered className="h-6 w-6" />,
  },
  {
    path: "/products",
    title: "Products",
    icon: <Package className="h-6 w-6" />,
  },
];

const user: {
  name: string;
  email: string;
  img?: string;
} = {
  name: "Jhon Doe",
  email: "jhon-doe@gmail.com",
};

export function Dashboard() {
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
            <Link href={path} key={title}>
              <SidebarLink path={path}>
                {icon}
                {title}
              </SidebarLink>
            </Link>
          ))}
        </SidebarMenu>

        <SidebarFooter>
          <Link
            href="#"
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-all hover:bg-muted`}
          >
            <Settings />
            Settings
          </Link>
          <Link
            href={"#"}
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-all hover:bg-muted`}
          >
            <LogOut />
            Logout
          </Link>
        </SidebarFooter>
      </Sidebar>

      <div className="flex flex-col">
        {/* Navbar */}
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <AlignLeft className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              {/* Para evitar alertas */}
              <SheetTitle />
              <SheetDescription />
              <nav className="grid gap-2 text-sm font-medium">
                <SidebarUser className="mx-[-1rem] px-0">
                  <SidebarUserName>{user.name}</SidebarUserName>
                  <SidebarUserEmail>{user.email}</SidebarUserEmail>
                </SidebarUser>
                {links.map(({ icon, path, title }) => (
                  <Link
                    key={path}
                    href={path}
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <SidebarLink path={path} className="w-full">
                      {icon}
                      {title}
                    </SidebarLink>
                  </Link>
                ))}
              </nav>
              <div className="mt-auto"></div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1"></div>
          <ThemeToggle />
          <Button variant="ghost" size="icon">
            <Bell strokeWidth={1.25} className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </header>
        {/* End Navbar */}

        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6"></main>
      </div>
    </div>
  );
}
