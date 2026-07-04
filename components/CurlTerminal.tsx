"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Play, Terminal } from "lucide-react";
import { curlSummary, site } from "@/lib/data";
import { Section } from "./Section";

export function CurlTerminal() {
  const [copied, setCopied] = useState(false);
  const [running, setRunning] = useState(false);
  const [output, setOutput] = useState("");
  const [showCursor, setShowCursor] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const copyCommand = useCallback(async () => {
    await navigator.clipboard.writeText(site.curlCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  const runCommand = useCallback(() => {
    if (running) return;
    if (intervalRef.current) clearInterval(intervalRef.current);

    setRunning(true);
    setOutput("");
    setShowCursor(true);

    const lines = [
      `$ ${site.curlCommand}`,
      "",
      ...curlSummary.split("\n"),
      "",
    ];

    let lineIndex = 0;
    let charIndex = 0;
    let current = "";

    intervalRef.current = setInterval(() => {
      if (lineIndex >= lines.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setRunning(false);
        setShowCursor(false);
        return;
      }

      const line = lines[lineIndex];
      if (charIndex < line.length) {
        current += line[charIndex];
        charIndex += 1;
        setOutput(current);
      } else {
        current += "\n";
        setOutput(current);
        lineIndex += 1;
        charIndex = 0;
      }
    }, 12);
  }, [running]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <Section
      id="terminal"
      title="For the terminal enjoyers"
      subtitle="Copy the command. Pretend you're in prod. Get the gist."
    >
      <div className="space-y-4">
        <div className="rounded-xl border border-ink/10 bg-ink/[0.03] p-4 sm:p-5">
          <code className="block font-mono text-sm sm:text-base text-ink break-all">
            {site.curlCommand}
          </code>
          <button
            type="button"
            onClick={copyCommand}
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-sage px-4 py-2 text-sm font-medium text-white transition hover:bg-sage-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" aria-hidden />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" aria-hidden />
                Copy command
              </>
            )}
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-xl border border-ink/15 bg-[#1a1a1a] shadow-lg"
        >
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-2 flex items-center gap-1.5 text-xs text-white/50 font-mono">
              <Terminal className="h-3.5 w-3.5" aria-hidden />
              zsh — razeenali.com
            </span>
          </div>

          <div
            className="min-h-[280px] p-4 sm:p-5 font-mono text-sm sm:text-[15px] text-[#e8e8e8] leading-relaxed whitespace-pre-wrap"
            aria-live="polite"
            aria-label="Terminal output"
          >
            {output || (
              <span className="text-white/40">
                hit run. i&apos;ll type the summary for you.
              </span>
            )}
            {showCursor ? (
              <span className="inline-block w-2 h-4 ml-0.5 bg-sage animate-pulse align-middle" />
            ) : null}
          </div>

          <div className="border-t border-white/10 px-4 py-3">
            <button
              type="button"
              onClick={runCommand}
              disabled={running}
              className="inline-flex items-center gap-2 rounded-lg bg-sage px-4 py-2 text-sm font-medium text-white transition hover:bg-sage-dark disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
            >
              <Play className="h-4 w-4" aria-hidden />
              {running ? "Running…" : "Run command"}
            </button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}