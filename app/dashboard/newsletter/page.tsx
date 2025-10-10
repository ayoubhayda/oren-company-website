"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Download,
  Mail,
  Users,
  Calendar,
  Search,
  RefreshCw,
  FileSpreadsheet,
  Trash2
} from "lucide-react";
import { getNewsletterSubscribers } from "@/lib/Services";
import { format } from "date-fns";

interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribedAt: string;
}

export default function NewsletterDashboard() {
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
  const [filteredSubscribers, setFilteredSubscribers] = useState<NewsletterSubscriber[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    loadSubscribers();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredSubscribers(subscribers);
    } else {
      const filtered = subscribers.filter(subscriber =>
        subscriber.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredSubscribers(filtered);
    }
  }, [subscribers, searchQuery]);

  const loadSubscribers = async () => {
    try {
      setIsLoading(true);
      const data = await getNewsletterSubscribers();
      setSubscribers(data);
    } catch (error) {
      console.error("Failed to load subscribers:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const exportToCSV = () => {
    setIsExporting(true);

    try {
      const csvData = filteredSubscribers.map(subscriber => ({
        Email: subscriber.email,
        "Subscribed Date": format(new Date(subscriber.subscribedAt), "yyyy-MM-dd HH:mm:ss"),
        "Subscriber ID": subscriber.id
      }));

      const headers = Object.keys(csvData[0] || {});
      const csvContent = [
        headers.join(","),
        ...csvData.map(row =>
          headers.map(header => `"${row[header as keyof typeof row] || ""}"`).join(",")
        )
      ].join("\n");

      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", `newsletter-subscribers-${format(new Date(), "yyyy-MM-dd")}.csv`);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Failed to export CSV:", error);
    } finally {
      setIsExporting(false);
    }
  };

  const exportToExcel = () => {
    setIsExporting(true);

    try {
      // For simplicity, we'll export as CSV and let the user open it in Excel
      // In a real application, you might want to use a library like xlsx
      exportToCSV();
    } catch (error) {
      console.error("Failed to export Excel:", error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="space-y-6 p-4 lg:p-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-xl font-semibold md:text-2xl">Newsletter Subscribers</h1>
          <p className="text-sm text-muted-foreground">
            Manage your newsletter subscription list and export data
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={loadSubscribers}
            disabled={isLoading}
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="">
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-base font-medium">Total Subscribers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{subscribers.length}</div>
            <p className="text-xs text-muted-foreground">
              Active newsletter subscribers
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-base font-medium">Filtered Results</CardTitle>
            <Search className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{filteredSubscribers.length}</div>
            <p className="text-xs text-muted-foreground">
              {searchQuery ? "Matching search query" : "Showing all subscribers"}
            </p>
          </CardContent>
        </Card>

        <Card className="flex flex-col justify-between">
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-base font-medium">Export Options</CardTitle>
            <FileSpreadsheet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
          <Button
                variant="outline"
                size="sm"
                onClick={exportToCSV}
                disabled={isExporting || filteredSubscribers.length === 0}
              >
                <Download className="h-4 w-4" />
                CSV
              </Button>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Subscribers List
          </CardTitle>
          <CardDescription>
            Search and filter your newsletter subscribers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Subscribers Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="!px-4">Email</TableHead>
                  <TableHead className="!px-4">Subscribed Date</TableHead>
                  <TableHead className="!px-4">Subscriber ID</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center py-8 px-4">
                      <div className="flex items-center justify-center">
                        <RefreshCw className="h-4 w-4 animate-spin mr-2" />
                        Loading subscribers...
                      </div>
                    </TableCell>
                  </TableRow>
                ) : filteredSubscribers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center py-8 px-4 text-muted-foreground">
                      {searchQuery ? "No subscribers found matching your search." : "No subscribers found."}
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredSubscribers.map((subscriber) => (
                    <TableRow key={subscriber.id}>
                      <TableCell className="font-medium px-4">
                        {subscriber.email}
                      </TableCell>
                      <TableCell className="px-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          {format(new Date(subscriber.subscribedAt), "MMM dd, yyyy")}
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground font-mono px-4">
                        {subscriber.id.slice(0, 8)}...
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
