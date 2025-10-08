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
  IconInnerShadowTop,
  IconListDetails,
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

import darkLogo from "@/assets/logo/oren-blue-logo-dark.png";
import lightLogo from "@/assets/logo/oren-blue-logo-light.png";
import Image from "next/image"
import Link from "next/link"

// Simple function to determine if a nav item is active based on current pathname
function isNavItemActive(url: string, pathname: string): boolean {
  if (url === "#") return false

  // Define route patterns that should be active for each nav item
  const routePatterns: Record<string, string[]> = {
    dashboard: ["/dashboard"],
    projects: ["/dashboard/projects"],
  }

  const patterns = routePatterns[url] || []
  return patterns.some(pattern =>
    pathname === pattern || pathname.startsWith(pattern + "/")
  )
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  const data = {
    navMain: [
      {
        title: "Dashboard",
        url: "dashboard",
        icon: IconDashboard,
        isActive: isNavItemActive("dashboard", pathname),
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
        isActive: isNavItemActive("projects", pathname),
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
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
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
                <Image src={darkLogo} alt="Oren logo" width={32} height={32} className="rounded-md hidden dark:block w-8 h-8" />
                <Image src={lightLogo} alt="Oren logo"  width={32} height={32} className="rounded-md dark:hidden w-8 h-8"/>

                <span className="text-lg font-semibold">Oren Inc.</span>
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
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
