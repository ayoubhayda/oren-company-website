"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconListDetails,
  IconMail,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/dashboard/nav-documents"
import { NavMain } from "@/components/dashboard/nav-main"
import { NavSecondary } from "@/components/dashboard/nav-secondary"
import { NavUser } from "@/components/dashboard/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import Logo from "@/assets/logo/orenec-logo-ltr.png";
import Image from "next/image"
import Link from "next/link"

// Determines if a nav item is active based on current pathname
function isNavItemActive(url: string, pathname: string): boolean {
  // Ignore placeholder links
  if (url === "#" || !url) return false

  // Exact match for root dashboard
  if (url === "/dashboard") {
    return pathname === "/dashboard"
  }

  // For all other routes, check if pathname starts with the URL
  // This handles nested routes like /dashboard/projects/123/edit
  return pathname === url || pathname.startsWith(url + "/")
}

interface UserInfoProps {
  email: string;
  name: string;
  image: string;
}

export function AppSidebar({ user, ...props }: React.ComponentProps<typeof Sidebar> & { user: UserInfoProps }) {
  const pathname = usePathname();

  const data = {
    navMain: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: IconDashboard,
        isActive: isNavItemActive("/dashboard", pathname),
      },
      {
        title: "Lifecycle",
        url: "#",
        icon: IconListDetails,
        isActive: false,
      },
      {
        title: "Analytics",
        url: "#",
        icon: IconChartBar,
        isActive: false,
      },
      {
        title: "Projects",
        url: "/dashboard/projects",
        icon: IconFolder,
        isActive: isNavItemActive("/dashboard/projects", pathname),
      },
      {
        title: "Newsletter",
        url: "/dashboard/newsletter",
        icon: IconMail,
        isActive: isNavItemActive("/dashboard/newsletter", pathname),
      },
      {
        title: "Team",
        url: "#",
        icon: IconUsers,
        isActive: false,
      },
    ],
    navSecondary: [
      {
        title: "Settings",
        url: "#",
        icon: IconSettings,
        isActive: false,
      },
      {
        title: "Get Help",
        url: "#",
        icon: IconHelp,
        isActive: false,
      },
      {
        title: "Search",
        url: "#",
        icon: IconSearch,
        isActive: false,
      },
    ],
    documents: [
      {
        name: "Data Library",
        url: "#",
        icon: IconDatabase,
        isActive: false,
      },
      {
        name: "Reports",
        url: "#",
        icon: IconReport,
        isActive: false,
      },
      {
        name: "Word Assistant",
        url: "#",
        icon: IconFileWord,
        isActive: false,
      },
    ],
    navClouds: [
      {
        title: "Capture",
        icon: IconCamera,
        isActive: false,
        url: "#",
        items: [
          {
            title: "Active Proposals",
            url: "#",
            isActive: false,
          },
          {
            title: "Archived",
            url: "#",
            isActive: false,
          },
        ],
      },
      {
        title: "Proposal",
        icon: IconFileDescription,
        url: "#",
        isActive: false,
        items: [
          {
            title: "Active Proposals",
            url: "#",
            isActive: false,
          },
          {
            title: "Archived",
            url: "#",
            isActive: false,
          },
        ],
      },
      {
        title: "Prompts",
        icon: IconFileAi,
        url: "#",
        isActive: false,
        items: [
          {
            title: "Active Proposals",
            url: "#",
            isActive: false,
          },
          {
            title: "Archived",
            url: "#",
            isActive: false,
          },
        ],
      },
    ],
  }

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="mb-4">
        <SidebarMenu >
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="!px-0 hover:bg-transparent"
            >
              <Link href="/dashboard">
                <Image src={Logo} alt="Orenec logo"  width={36} height={36} className="h-[28px] w-auto"/>

                <span className="text-lg font-semibold">Oren<span className="text-primary">ec</span></span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}