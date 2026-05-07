type AttributionType = "token" | "pool" | "enterprise";
type Status = "settled" | "pending";

export type LedgerTransaction = {
  id: string;
  date: string;
  product: string;
  entry: string;
  type: AttributionType;
  amount: number;
  status: Status;
  daysHeld: number;
  groupName?: string;
};

export const KAYLEN_TX_EXPORT: LedgerTransaction[] = [
  { id: "1", date: "Mar 19, 2:41 PM", product: "NIL Platform — Protein supplement (12-pack)", entry: "QR code · player bio page", type: "token", amount: 89.99, status: "settled", daysHeld: 32 },
  { id: "2", date: "Mar 18, 11:08 AM", product: "NIL Platform — Game-day T-shirt", entry: "Player bio page", type: "token", amount: 34.99, status: "settled", daysHeld: 33 },
  { id: "3", date: "Mar 15, 6:22 PM", product: "NIL Platform — Nutrition bundle", entry: "Coupon code KR7", type: "token", amount: 124.99, status: "settled", daysHeld: 36 },
  { id: "4", date: "Mar 10, 9:15 AM", product: "NIL Platform — Fan membership (monthly)", entry: "Dropdown — selected Kaylen Rush", type: "token", amount: 19.99, status: "settled", daysHeld: 41 },
  { id: "5", date: "Mar 5, 2:03 PM", product: "NIL Platform — Energy drink case", entry: "No token — consumer chose NIL Pool", type: "pool", amount: 54.99, status: "settled", daysHeld: 46 },
  { id: "6", date: "Feb 28, 7:48 PM", product: "NIL Platform — Signed poster", entry: "QR code · game program", type: "token", amount: 44.99, status: "pending", daysHeld: 19 },
  { id: "7", date: "Feb 20, 12:30 PM", product: "NIL Platform — NIL Pool merchandise", entry: "No token — consumer chose NIL Pool", type: "pool", amount: 29.99, status: "pending", daysHeld: 27 },
  { id: "8", date: "Feb 15, 10:00 AM", product: "Enterprise — USAREC warm lead", entry: "Group token · D-line campaign", type: "enterprise", amount: 9800.0, status: "settled", daysHeld: 32, groupName: "USAREC D-line campaign" },
];

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD" });

function AttributionBadge({ tx }: { tx: LedgerTransaction }) {
  if (tx.type === "token") {
    return (
      <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 text-[10px] font-semibold">
        Token · {tx.entry.split(" · ")[0]}
      </span>
    );
  }
  if (tx.type === "pool") {
    return (
      <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-600 border border-slate-200 px-2 py-0.5 text-[10px] font-semibold">
        NIL Pool · consumer chose full roster
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 text-[10px] font-semibold">
      Enterprise · {tx.groupName ?? "campaign"}
    </span>
  );
}

function StatusBadge({ tx }: { tx: LedgerTransaction }) {
  if (tx.status === "settled") {
    return (
      <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 px-2 py-0.5 text-[10px] font-semibold">
        Settled
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-700 px-2 py-0.5 text-[10px] font-semibold">
      Pending · {30 - tx.daysHeld > 0 ? `${30 - tx.daysHeld}d` : `${tx.daysHeld}d`}
    </span>
  );
}

export default function LedgerTab({ playerName }: { playerName: string }) {
  const transactions = KAYLEN_TX_EXPORT;

  const gross = transactions.reduce((s, t) => s + t.amount, 0);
  const settledTokenAthlete = transactions
    .filter((t) => t.status === "settled" && t.type === "token")
    .reduce((s, t) => s + t.amount * 0.7, 0);
  const pending = transactions
    .filter((t) => t.status === "pending")
    .reduce((s, t) => s + t.amount, 0);

  const hasPool = transactions.some((t) => t.type === "pool");

  return (
    <div className="space-y-4">
      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <MetricCard label="Gross Platform Volume" value={fmt(gross)} />
        <MetricCard label="Athlete's 70% (Settled)" value={fmt(settledTokenAthlete)} accent="text-blue-600" />
        <MetricCard label="Pending (In Hold)" value={fmt(pending)} accent="text-amber-600" />
      </div>

      {hasPool && (
        <div className="rounded-md border border-slate-200 bg-slate-100 px-3 py-2 text-xs text-slate-600">
          These consumers chose the full NIL Pool — {playerName}'s share is
          proportional, not the full 70%.
        </div>
      )}

      {/* Transactions */}
      <div className="rounded-lg border border-slate-200 bg-white divide-y divide-slate-100">
        {transactions.map((t) => {
          const dotColor =
            t.type === "token"
              ? "bg-blue-500"
              : t.type === "pool"
              ? "bg-slate-400"
              : "bg-emerald-500";
          const recipientLabel =
            t.type === "pool" ? "NIL Pool 70%" : "Athlete 70%";

          return (
            <div key={t.id} className="flex gap-3 p-3">
              <div className={`mt-1.5 h-2.5 w-2.5 rounded-full shrink-0 ${dotColor}`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-slate-900 truncate">
                      {t.product}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      {t.entry} · {t.date}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-sm font-bold text-slate-900">
                      {fmt(t.amount)}
                    </div>
                    <div className="mt-1">
                      <StatusBadge tx={t} />
                    </div>
                  </div>
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-1.5">
                  <AttributionBadge tx={t} />
                </div>

                <div className="mt-2 flex flex-wrap gap-1.5">
                  <Chip>
                    {recipientLabel} {fmt(t.amount * 0.7)}
                  </Chip>
                  <Chip>Platform 30% {fmt(t.amount * 0.3)}</Chip>
                  <Chip>Gross {fmt(t.amount)}</Chip>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-[11px] leading-relaxed text-slate-500 italic px-1">
        FMV is established at the individual transaction level — the consumer's
        purchase price through the token is the market-determined value. No
        algorithm. No formula.
      </p>
    </div>
  );
}

function MetricCard({
  label,
  value,
  accent = "text-slate-900",
}: {
  label: string;
  value: string;
  accent?: string;
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3">
      <div className="text-[10px] uppercase tracking-wide text-slate-500 font-semibold">
        {label}
      </div>
      <div className={`mt-1 text-xl font-bold ${accent}`}>{value}</div>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-slate-50 border border-slate-200 px-1.5 py-0.5 text-[10px] font-medium text-slate-600">
      {children}
    </span>
  );
}
