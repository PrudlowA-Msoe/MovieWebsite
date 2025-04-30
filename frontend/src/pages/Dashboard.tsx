// src/pages/Dashboard.tsx
import { useState } from "react";
import { runQuery } from "../api";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import QuerySelector from "../components/QuerySelector";
import ResultTable from "../components/ResultTable";
import CodeViewer from "../components/CodeViewer";

export default function Dashboard() {
  const [slug, setSlug] = useState<string | null>(null);
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleRun(s: string) {
    setSlug(s);
    setLoading(true);
    setRows(await runQuery(s));
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 grid gap-4">
      <Card>
        <CardContent className="p-4">
          <QuerySelector onRun={handleRun} />
        </CardContent>
      </Card>

      {slug && (
        <div className="grid md:grid-cols-2 gap-4">
          <ResultTable data={rows} loading={loading} />
          <CodeViewer slug={slug} />
        </div>
      )}
    </div>
  );
}
