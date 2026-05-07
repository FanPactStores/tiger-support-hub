import { KAYLEN_TX_EXPORT } from "./LedgerTab";

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD" });

const THRESHOLD = 600;

export default function NILGoTab({ playerName }: { playerName: string }) {
  const transactions = KAYLEN_TX_EXPORT;

  // Athlete earnings: 70% of settled token transactions for this athlete.
  // Pool transactions: assume a proportional share (mock at 1/40 of the pool 70%).
  const POOL_SHARE = 1 / 40;
  const ytdEarnings = transactions
    .filter((t) => t.status === "settled")
    .reduce((s, t) => {
      if (t.type === "token") return s + t.amount * 0.7;
      if (t.type === "pool") return s + t.amount * 0.7 * POOL_SHARE;
      return s; // enterprise group token, not individual income
    }, 0);

  const overThreshold = ytdEarnings > THRESHOLD;
  const pct = Math.min(100, (ytdEarnings / THRESHOLD) * 100);

  return (
    <div className="space-y-4">
      {/* Alert banner */}
      {overThreshold ? (
        <div className="rounded-lg border border-red-200 bg-red-50 p-3">
          <div className="text-[11px] uppercase tracking-wide font-bold text-red-700">
            1099-NEC Required
          </div>
          <p className="mt-1 text-xs text-red-700 leading-relaxed">
            {playerName} has received <strong>{fmt(ytdEarnings)}</strong> in NIL
            income this tax year, exceeding the IRS $600 reporting threshold.
            1099-NEC is generated automatically.
          </p>
        </div>
      ) : (
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
          <div className="text-[11px] uppercase tracking-wide font-bold text-emerald-700">
            Below 1099 Threshold
          </div>
          <p className="mt-1 text-xs text-emerald-700">
            YTD income <strong>{fmt(ytdEarnings)}</strong> · No 1099 required yet
          </p>
        </div>
      )}

      {/* Threshold progress bar */}
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <div className="flex items-center justify-between text-xs mb-2">
          <div className="text-slate-700 font-semibold">IRS $600 Threshold</div>
          <div className="font-bold text-slate-900 tabular-nums">
            {fmt(ytdEarnings)} <span className="text-slate-400">/ {fmt(THRESHOLD)}</span>
          </div>
        </div>
        <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden">
          <div
            className={`h-full rounded-full ${
              overThreshold ? "bg-red-500" : "bg-emerald-500"
            }`}
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="mt-2 text-[10px] text-slate-500">
          Tracks athlete's actual earnings (70% of settled token + proportional
          pool share). Platform fees are not athlete income.
        </p>
      </div>

      {/* Payment clearance table */}
      <div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
        <div className="px-4 py-3 border-b border-slate-100">
          <div className="text-[10px] uppercase tracking-wide text-slate-500 font-semibold">
            Payment Clearance
          </div>
          <p className="mt-0.5 text-[11px] text-slate-500">
            30-day return window must clear before funds are distributable.
          </p>
        </div>
        <div className="divide-y divide-slate-100">
          {transactions.map((t) => {
            const cleared = t.daysHeld >= 30;
            const typeLabel =
              t.type === "token" ? "Token" : t.type === "pool" ? "Pool" : "Enterprise";
            const typeClasses =
              t.type === "token"
                ? "bg-blue-50 text-blue-700 border-blue-200"
                : t.type === "pool"
                ? "bg-slate-100 text-slate-600 border-slate-200"
                : "bg-emerald-50 text-emerald-700 border-emerald-200";
            const cut =
              t.type === "pool"
                ? t.amount * 0.7 * POOL_SHARE
                : t.type === "token"
                ? t.amount * 0.7
                : 0;

            return (
              <div
                key={t.id}
                className="grid grid-cols-12 gap-2 items-center px-4 py-2.5 text-xs"
              >
                <div className="col-span-4 truncate font-medium text-slate-800">
                  {t.product.replace(/^NIL Platform — |^Enterprise — /, "")}
                </div>
                <div className="col-span-2">
                  <span
                    className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold ${typeClasses}`}
                  >
                    {typeLabel}
                  </span>
                </div>
                <div className="col-span-2 text-slate-500 truncate">
                  {t.date.split(",")[0]}
                </div>
                <div className="col-span-2">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                      cleared
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {cleared ? "Cleared" : `Hold · ${t.daysHeld}d / 30d`}
                  </span>
                </div>
                <div className="col-span-2 text-right font-semibold text-slate-900 tabular-nums">
                  {cut > 0 ? fmt(cut) : "—"}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Compliance note */}
      <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
        <div className="text-[11px] uppercase tracking-wide font-bold text-blue-800">
          Deputy AD Compliance Note
        </div>
        <p className="mt-1.5 text-xs text-blue-900 leading-relaxed">
          All transactions are tokenized at entry. Pool transactions are tracked
          individually for IRS purposes. Platform auto-generates 1099-NEC when
          athlete earnings cross $600 on settled income. Full audit trail
          available on demand.
        </p>
      </div>
    </div>
  );
}
