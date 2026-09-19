"use client";

import {
  ArrowUpRight,
  Bot,
  Search,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState, type CSSProperties } from "react";

import AgentMark from "@/components/AgentMark";
import ConnectorIcon from "@/components/ConnectorIcon";

export interface DirectoryEntry {
  id: string;
  name: string;
  tagline: string;
  summary: string;
  category: string;
  author: { name: string; url?: string };
  featured: boolean;
  setupMinutes: number;
  apps: Array<{ slug: string; label: string }>;
  agents: Array<{ name: string; color: string; expression: string }>;
  rooms: number;
  playbooks: number;
  routines: number;
  proof: { amount: string; credibility: "claimed" | "receipts" } | null;
}

type SortOption = "featured" | "agents" | "setup" | "name";

function TeamCard({ entry, index }: { entry: DirectoryEntry; index: number }) {
  const lead = entry.agents[0] ?? { name: entry.name, color: "blue" };

  return (
    <article
      className="team-card"
      style={{ "--card-index": index } as CSSProperties}
    >
      <Link href={`/bots/${entry.id}`} className="team-card-link" aria-label={`Open ${entry.name}`}>
        <div className="team-card-topline">
          <div>
            <h2>{entry.name}</h2>
            <p className="team-card-author">by {entry.author.name}</p>
          </div>
          <AgentMark name={lead.name} color={lead.color} size={44} />
        </div>

        <p className="team-card-description">{entry.tagline}</p>

        <div className="team-card-connectors" aria-label="Works with">
          {entry.apps.slice(0, 4).map((app) => (
            <span className="connector-chip" key={app.slug}>
              <ConnectorIcon slug={app.slug} label={app.label} size="small" />
              <span>{app.label}</span>
            </span>
          ))}
          {entry.apps.length > 4 && <span className="connector-more">+{entry.apps.length - 4}</span>}
          {entry.apps.length === 0 && <span className="connector-none">No connector required</span>}
        </div>

        <div className="team-card-footer">
          <span><Users size={13} aria-hidden="true" /> {entry.agents.length} bots</span>
          <span>{entry.playbooks} playbooks</span>
          {entry.proof && <span className="proof-pill">Public claim: {entry.proof.amount}</span>}
          <ArrowUpRight className="team-card-arrow" size={15} aria-hidden="true" />
        </div>
      </Link>
    </article>
  );
}

export default function Directory({ entries }: { entries: DirectoryEntry[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState<SortOption>("featured");
  const [integration, setIntegration] = useState("all");

  const integrations = useMemo(() => {
    const bySlug = new Map<string, string>();
    for (const entry of entries) {
      for (const app of entry.apps) bySlug.set(app.slug, app.label);
    }
    return [...bySlug.entries()].sort((a, b) => a[1].localeCompare(b[1]));
  }, [entries]);

  const filtered = useMemo(() => {
    const query = searchTerm.trim().toLocaleLowerCase();
    const result = entries.filter((entry) => {
      if (integration !== "all" && !entry.apps.some((app) => app.slug === integration)) return false;
      if (!query) return true;
      return [
        entry.name,
        entry.tagline,
        entry.summary,
        entry.category,
        entry.author.name,
        ...entry.apps.map((app) => app.label),
        ...entry.agents.map((agent) => agent.name),
      ].join(" ").toLocaleLowerCase().includes(query);
    });

    return result.sort((a, b) => {
      if (sort === "agents") return b.agents.length - a.agents.length || a.name.localeCompare(b.name);
      if (sort === "setup") return a.setupMinutes - b.setupMinutes || a.name.localeCompare(b.name);
      if (sort === "name") return a.name.localeCompare(b.name);
      return Number(b.featured) - Number(a.featured) || Number(Boolean(b.proof)) - Number(Boolean(a.proof)) || a.name.localeCompare(b.name);
    });
  }, [entries, integration, searchTerm, sort]);

  return (
    <main className="directory-page">
      <div className="directory-center">
        <section className="directory-hero" aria-labelledby="directory-title">
          <p className="overline">BROOS ACTION</p>
          <h1 id="directory-title">Ready-to-run AI teams</h1>
          <p>Portable playbooks for sales, marketing, research, operations, coding, and everyday work.</p>
          <div className="hero-actions">
            <label className="hero-search">
              <Search size={19} strokeWidth={1.7} aria-hidden="true" />
              <span className="sr-only">Search teams</span>
              <input
                type="search"
                placeholder="Search teams…"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                autoComplete="off"
              />
            </label>
            <Link className="button button-primary" href="/publish">Submit a team</Link>
          </div>
        </section>

        <section className="directory-list" aria-label="Aria Workplace teams">
          <div className="directory-controls">
            <label className="directory-select">
              <span className="sr-only">Sort teams</span>
              <select value={sort} onChange={(event) => setSort(event.target.value as SortOption)}>
                <option value="featured">Featured teams</option>
                <option value="agents">Most bots</option>
                <option value="setup">Quickest setup</option>
                <option value="name">Name A-Z</option>
              </select>
            </label>
            <label className="directory-select">
              <span className="sr-only">Filter by integration</span>
              <select value={integration} onChange={(event) => setIntegration(event.target.value)}>
                <option value="all">All integrations</option>
                {integrations.map(([slug, label]) => <option value={slug} key={slug}>{label}</option>)}
              </select>
            </label>
            <p className="directory-result-count" aria-live="polite">{filtered.length} {filtered.length === 1 ? "team" : "teams"}</p>
          </div>

          {filtered.length > 0 ? (
            <div className="team-grid">
              {filtered.map((entry, index) => <TeamCard entry={entry} index={index} key={entry.id} />)}
            </div>
          ) : (
            <div className="directory-empty">
              <Bot size={27} strokeWidth={1.6} aria-hidden="true" />
              <strong>No teams found</strong>
              <p>Try a broader search or another integration.</p>
              <button type="button" onClick={() => { setSearchTerm(""); setIntegration("all"); }}>Clear filters</button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
