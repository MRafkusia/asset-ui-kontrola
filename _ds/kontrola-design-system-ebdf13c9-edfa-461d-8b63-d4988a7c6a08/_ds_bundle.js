/* @ds-bundle: {"format":4,"namespace":"KontrolaDesignSystem_ebdf13","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"SegmentedControl","sourcePath":"components/core/SegmentedControl.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"HeroChip","sourcePath":"components/data/HeroChip.jsx"},{"name":"MetricCard","sourcePath":"components/data/MetricCard.jsx"},{"name":"Pagination","sourcePath":"components/data/Pagination.jsx"},{"name":"PortsBar","sourcePath":"components/data/PortsBar.jsx"},{"name":"ScopeBar","sourcePath":"components/data/ScopeBar.jsx"},{"name":"Sparkline","sourcePath":"components/data/Sparkline.jsx"},{"name":"Chip","sourcePath":"components/feedback/Chip.jsx"},{"name":"StatusBadge","sourcePath":"components/feedback/StatusBadge.jsx"},{"name":"SyncPill","sourcePath":"components/feedback/SyncPill.jsx"},{"name":"ToolBadge","sourcePath":"components/feedback/ToolBadge.jsx"},{"name":"FlagToggle","sourcePath":"components/forms/FlagToggle.jsx"},{"name":"SearchInput","sourcePath":"components/forms/SearchInput.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"TopNav","sourcePath":"components/navigation/TopNav.jsx"},{"name":"Dropdown","sourcePath":"components/overlays/Dropdown.jsx"},{"name":"DropdownItem","sourcePath":"components/overlays/Dropdown.jsx"},{"name":"InfoTooltip","sourcePath":"components/overlays/InfoTooltip.jsx"}],"sourceHashes":{"components/core/Button.jsx":"fc50ec482f3f","components/core/IconButton.jsx":"cfd9bb34a36c","components/core/SegmentedControl.jsx":"3b34027c006d","components/data/DataTable.jsx":"c8a397112237","components/data/HeroChip.jsx":"9ac61d875017","components/data/MetricCard.jsx":"57b1554fcaaa","components/data/Pagination.jsx":"a84381c9e46c","components/data/PortsBar.jsx":"9ca9417e10a7","components/data/ScopeBar.jsx":"708d5d8e1442","components/data/Sparkline.jsx":"a5482e7d3a94","components/feedback/Chip.jsx":"69cf90cdc76c","components/feedback/StatusBadge.jsx":"19ad2fff423e","components/feedback/SyncPill.jsx":"dcb0de22e0e2","components/feedback/ToolBadge.jsx":"8bd13dbceaec","components/forms/FlagToggle.jsx":"11514d25d8aa","components/forms/SearchInput.jsx":"0bfd9bbc1f88","components/forms/Select.jsx":"faa94cfadb12","components/navigation/Breadcrumb.jsx":"0a89386a3fd4","components/navigation/TopNav.jsx":"dc1360c165a7","components/overlays/Dropdown.jsx":"e085f2e81772","components/overlays/InfoTooltip.jsx":"affe588ff58e","ui_kits/network/DevicePage.jsx":"27d97b276ffe","ui_kits/network/InfrastructurePage.jsx":"e5f4c2ee90da","ui_kits/network/data.js":"a7163a9a7df4","ui_kits/network/icons.jsx":"01b457cb60a8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KontrolaDesignSystem_ebdf13 = window.KontrolaDesignSystem_ebdf13 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
const base = {
  fontFamily: 'inherit',
  fontWeight: 700,
  fontSize: 14,
  border: 'none',
  cursor: 'pointer',
  borderRadius: 'var(--radius-lg)',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  padding: '10px 18px',
  transition: 'background .18s ease, border-color .18s ease, color .18s ease'
};
const variants = {
  primary: {
    background: 'var(--orange)',
    color: '#fff',
    boxShadow: 'var(--shadow-btn)'
  },
  secondary: {
    background: 'var(--field-bg)',
    color: 'var(--text)',
    border: '1.5px solid var(--field-border)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-muted)',
    border: '1.5px solid transparent'
  }
};
const sizes = {
  md: {
    padding: '10px 18px',
    fontSize: 14
  },
  sm: {
    padding: '8px 14px',
    fontSize: 13
  }
};

// Button — primary (orange CTA), secondary (outline), ghost. Modeled on
// .date-pill / .btn-csv (primary) and .btn-pdf (secondary) in styles.css.
function Button({
  variant = 'primary',
  size = 'md',
  pill = false,
  disabled = false,
  icon,
  children,
  onClick
}) {
  const style = {
    ...base,
    ...variants[variant],
    ...sizes[size],
    borderRadius: pill ? 'var(--radius-full)' : 'var(--radius-lg)',
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer'
  };
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: style,
    disabled: disabled,
    onClick: onClick
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
// Round icon-only button — used in the top nav for notifications/theme toggle.
function IconButton({
  size = 46,
  active = false,
  title,
  children,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    title: title,
    "aria-label": title,
    onClick: onClick,
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-full)',
      border: 'none',
      background: active ? 'var(--orange)' : 'var(--nav-bg)',
      color: active ? '#fff' : 'var(--gray)',
      boxShadow: 'var(--shadow-card)',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer',
      transition: 'background .18s ease, color .18s ease, transform .12s ease'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: size * 0.43,
      height: size * 0.43,
      display: 'grid'
    }
  }, children));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/SegmentedControl.jsx
try { (() => {
// Segmented control — used for time range (Hourly/Weekly/Monthly), status
// filter (All/Up/Down) and the aggregation lens (Uplink/Downlink) toggles.
function SegmentedControl({
  options,
  value,
  onChange,
  compact = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'inline-flex',
      background: 'var(--field-bg)',
      border: '1.5px solid var(--field-border)',
      borderRadius: 'var(--radius-lg)',
      padding: 4,
      gap: 3
    }
  }, options.map(opt => {
    const active = opt.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: opt.value,
      type: "button",
      onClick: () => onChange && onChange(opt.value),
      style: {
        fontFamily: 'inherit',
        fontSize: compact ? 13 : 13.5,
        fontWeight: 600,
        color: active ? '#fff' : 'var(--text-muted)',
        background: active ? 'var(--orange)' : 'none',
        border: 'none',
        cursor: 'pointer',
        padding: compact ? '8px 14px' : '8px 18px',
        borderRadius: 9,
        boxShadow: active ? '0 4px 12px rgba(226,87,22,.28)' : 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        transition: 'all .15s ease'
      }
    }, opt.icon, opt.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
// Sortable device/interface table shell — mirrors #thead/#tbody + the orange
// solid header bar (#thead th) in styles.css.
function DataTable({
  columns,
  rows,
  sortKey,
  sortDir = 1,
  onSort,
  renderCell
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => {
    const sorted = sortKey === c.key;
    return /*#__PURE__*/React.createElement("th", {
      key: c.key,
      onClick: () => c.sort && onSort && onSort(c.key),
      style: {
        textAlign: c.num ? 'right' : 'left',
        fontWeight: 700,
        fontSize: 11.5,
        letterSpacing: '.04em',
        textTransform: 'uppercase',
        color: '#fff',
        background: 'var(--orange)',
        padding: '13px 13px',
        whiteSpace: 'nowrap',
        cursor: c.sort ? 'pointer' : 'default',
        userSelect: 'none'
      }
    }, c.label, sorted && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 5,
        opacity: 0.9
      }
    }, sortDir === 1 ? '\u2193' : '\u2191'));
  }))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri,
    style: {
      cursor: 'pointer',
      borderBottom: '1px solid var(--row-border)'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--row-hover)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      padding: '13px 13px',
      textAlign: c.num ? 'right' : 'left',
      verticalAlign: 'middle'
    }
  }, renderCell ? renderCell(row, c.key) : row[c.key])))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/HeroChip.jsx
try { (() => {
// Device-hero stat chip — mirrors .hchip in styles.css (device.html hero).
function HeroChip({
  label,
  value,
  unit,
  tone
}) {
  const color = tone ? {
    ok: 'var(--good)',
    warn: 'var(--warn)',
    bad: 'var(--bad)'
  }[tone] : 'var(--text)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      background: 'var(--field-bg)',
      border: '1.5px solid var(--field-border)',
      borderRadius: 'var(--radius-2xl)',
      padding: '16px 24px',
      minWidth: 150
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      fontWeight: 600,
      color: 'var(--text-faint)',
      letterSpacing: '.03em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: '-.01em',
      marginTop: 8,
      fontVariantNumeric: 'tabular-nums',
      whiteSpace: 'nowrap',
      color
    }
  }, value, unit && /*#__PURE__*/React.createElement("small", {
    style: {
      fontSize: 15,
      color: 'var(--text-faint)',
      fontWeight: 600,
      marginLeft: 4
    }
  }, unit)));
}
Object.assign(__ds_scope, { HeroChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/HeroChip.jsx", error: String((e && e.message) || e) }); }

// components/data/MetricCard.jsx
try { (() => {
// Fleet summary metric card — the 4-up cards at the top of the Infrastructure
// page (Availability / Link Errors / Coverage / Throughput). Mirrors
// .card.metric + .m-top/.m-value/.m-sub/.m-bottom in styles.css.
function MetricCard({
  label,
  badge,
  value,
  unit,
  sub,
  tone = 'good',
  children
}) {
  const accent = {
    good: 'var(--good)',
    warn: 'var(--warn)',
    alert: 'var(--bad)'
  }[tone] || 'var(--good)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: `var(--card-bg)`,
      backgroundImage: `radial-gradient(150px 150px at 100% 0, color-mix(in srgb, ${accent} 11%, transparent), transparent 68%)`,
      border: '1.5px solid var(--card-border)',
      borderRadius: 'var(--radius-4xl)',
      boxShadow: 'var(--shadow-card)',
      padding: '18px 20px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.07em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, label), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      color: 'var(--text-muted)',
      background: 'var(--pill-bg)',
      border: '1px solid var(--card-border-soft)',
      borderRadius: 'var(--radius-full)',
      padding: '3px 9px'
    }
  }, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 33,
      fontWeight: 700,
      letterSpacing: '-.022em',
      color: 'var(--text)'
    }
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--text-faint)',
      marginLeft: 4
    }
  }, unit)), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-faint)',
      marginTop: 10
    }
  }, sub), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, children));
}
Object.assign(__ds_scope, { MetricCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MetricCard.jsx", error: String((e && e.message) || e) }); }

// components/data/Pagination.jsx
try { (() => {
// Pagination bar — mirrors .pager/.pgbtn in styles.css.
function Pagination({
  page,
  totalPages,
  onChange,
  info
}) {
  const nums = [];
  for (let p = 1; p <= totalPages; p++) {
    if (p === 1 || p === totalPages || Math.abs(p - page) <= 1) nums.push(p);else if (nums[nums.length - 1] !== '…') nums.push('…');
  }
  const btn = (active, disabled) => ({
    minWidth: 36,
    height: 36,
    padding: '0 10px',
    borderRadius: 'var(--radius-lg)',
    border: '1.5px solid ' + (active ? 'var(--orange)' : 'var(--field-border)'),
    background: active ? 'var(--orange)' : 'var(--field-bg)',
    color: active ? '#fff' : 'var(--text)',
    fontWeight: 600,
    fontSize: 13.5,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 14,
      padding: '16px 24px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, info), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: btn(false, page === 1),
    disabled: page === 1,
    onClick: () => onChange(page - 1)
  }, "\u2039"), nums.map((p, i) => p === '…' ? /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      ...btn(false, true),
      border: 'none',
      background: 'none'
    }
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: i,
    style: btn(p === page, false),
    onClick: () => onChange(p)
  }, p)), /*#__PURE__*/React.createElement("button", {
    style: btn(false, page === totalPages),
    disabled: page === totalPages,
    onClick: () => onChange(page + 1)
  }, "\u203A")));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/data/PortsBar.jsx
try { (() => {
// Up/total port ratio cell used in the device table's Interfaces column.
// Mirrors .ports/.ports-num/.ports-bar in styles.css.
function PortsBar({
  up,
  total
}) {
  const pct = total ? Math.round(up / total * 100) : 0;
  const color = up === total ? 'var(--good)' : up === 0 ? 'var(--bad)' : 'var(--warn)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: 'tabular-nums',
      fontWeight: 600,
      fontSize: 13.5,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      color
    }
  }, up), /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '0 2px',
      color: 'var(--text-faint)'
    }
  }, "/"), total), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 5,
      borderRadius: 'var(--radius-full)',
      background: 'var(--row-border)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      height: '100%',
      borderRadius: 'var(--radius-full)',
      width: pct + '%',
      background: color
    }
  })));
}
Object.assign(__ds_scope, { PortsBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/PortsBar.jsx", error: String((e && e.message) || e) }); }

// components/data/ScopeBar.jsx
try { (() => {
// Aggregation-lens banner — the "Every metric below is aggregated across each
// device's uplink ports · N devices in scope" bar above the device table.
function ScopeBar({
  label = 'Aggregation lens',
  children,
  note
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 18,
      flexWrap: 'wrap',
      background: 'var(--card-bg)',
      border: '1px solid var(--card-border)',
      borderRadius: 'var(--radius-3xl)',
      padding: '12px 18px',
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), children), note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, note));
}
Object.assign(__ds_scope, { ScopeBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ScopeBar.jsx", error: String((e && e.message) || e) }); }

// components/data/Sparkline.jsx
try { (() => {
// Tiny capsule sparkline — mirrors sparkPill() in app.js (.m-pill).
function Sparkline({
  data,
  color = 'var(--orange)',
  fill = true,
  width = 240,
  height = 36
}) {
  const pad = 5;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const pts = data.map((v, i) => [pad + i / (data.length - 1) * (width - 2 * pad), height - pad - (v - min) / range * (height - 2 * pad)]);
  const d = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
  const area = fill ? `${d} L ${pts[pts.length - 1][0].toFixed(1)} ${height} L ${pts[0][0].toFixed(1)} ${height} Z` : null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      borderRadius: 'var(--radius-3xl)',
      border: '1.5px solid var(--card-border-soft)',
      overflow: 'hidden',
      background: 'var(--field-bg)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${width} ${height}`,
    width: "100%",
    height: "100%",
    preserveAspectRatio: "none"
  }, area && /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: color,
    opacity: ".11"
  }), /*#__PURE__*/React.createElement("path", {
    d: d,
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}
Object.assign(__ds_scope, { Sparkline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Sparkline.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Chip.jsx
try { (() => {
// Generic pill chip — covers .m-chip (metric-card footer chip), .fl-pill
// (flag summary), and .active-filter (table filter chip) patterns, which are
// all the same visual shape at different densities/colors in the source CSS.
function Chip({
  tone = 'default',
  dot,
  onClick,
  children
}) {
  const tones = {
    default: {
      bg: 'var(--field-bg)',
      border: 'var(--field-border)',
      fg: 'var(--text-muted)'
    },
    accent: {
      bg: 'var(--orange-050)',
      border: 'rgba(226,87,22,.28)',
      fg: 'var(--orange)'
    },
    static: {
      bg: 'var(--field-bg)',
      border: 'var(--field-border)',
      fg: 'var(--text-muted)'
    }
  };
  const t = tones[tone] || tones.default;
  const clickable = typeof onClick === 'function';
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      fontSize: 11.5,
      color: t.fg,
      background: t.bg,
      border: '1px solid ' + t.border,
      borderRadius: 'var(--radius-full)',
      padding: '5px 11px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      cursor: clickable ? 'pointer' : 'default',
      fontWeight: 600
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: dot
    }
  }), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Chip.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatusBadge.jsx
try { (() => {
const STATE_STYLE = {
  up: {
    bg: 'var(--good-bg)',
    fg: 'var(--good)',
    label: 'up'
  },
  down: {
    bg: 'var(--bad-bg)',
    fg: 'var(--bad)',
    label: 'down'
  },
  testing: {
    bg: 'var(--warn-bg)',
    fg: 'var(--warn)',
    label: 'testing'
  },
  na: {
    bg: 'var(--field-bg)',
    fg: 'var(--text-faint)',
    label: 'N/A'
  }
};

// Status badge — device/interface operational state. Mirrors .badge.st-up /
// .st-down / .st-test / .st-na in styles.css (dot + label pill).
function StatusBadge({
  status = 'na',
  label
}) {
  const s = STATE_STYLE[status] || STATE_STYLE.na;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 11.5,
      fontWeight: 700,
      padding: '4px 9px',
      borderRadius: 'var(--radius-full)',
      whiteSpace: 'nowrap',
      background: s.bg,
      color: s.fg
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: s.fg
    }
  }), label || s.label);
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/SyncPill.jsx
try { (() => {
// SNMP poll freshness indicator — mirrors .sync-pill / .sync-pill.fresh / .stale.
function SyncPill({
  fresh = true,
  children
}) {
  const color = fresh ? 'var(--good)' : 'var(--bad)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontSize: 12,
      fontWeight: 600,
      padding: '6px 12px',
      borderRadius: 'var(--radius-full)',
      border: '1.5px solid ' + (fresh ? 'var(--field-border)' : 'rgba(210,59,59,.32)'),
      background: fresh ? 'var(--field-bg)' : 'rgba(210,59,59,.07)',
      color: fresh ? 'var(--text-muted)' : 'var(--bad)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: color,
      flex: 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { SyncPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/SyncPill.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ToolBadge.jsx
try { (() => {
const TOOL_COLORS = {
  zabbix: 'var(--tool-zabbix)',
  datadog: 'var(--tool-datadog)',
  librenms: 'var(--tool-librenms)',
  smokeping: 'var(--tool-smokeping)'
};
const LABELS = {
  zabbix: 'Zabbix',
  datadog: 'Datadog',
  librenms: 'LibreNMS',
  smokeping: 'Smokeping'
};

// Monitoring-source badge (which integration reports this device) —
// mirrors .tool.zabbix/.datadog/.librenms/.smokeping in styles.css.
function ToolBadge({
  tool
}) {
  const color = TOOL_COLORS[tool] || 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      padding: '3px 9px',
      borderRadius: 7,
      letterSpacing: '.01em',
      border: '1px solid ' + color,
      background: color + '1f',
      color
    }
  }, LABELS[tool] || tool);
}
Object.assign(__ds_scope, { ToolBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ToolBadge.jsx", error: String((e && e.message) || e) }); }

// components/forms/FlagToggle.jsx
try { (() => {
// Uplink/downlink/unset per-port role toggle — mirrors .flag-seg/.fl-btn.
const COLORS = {
  uplink: 'var(--good)',
  downlink: 'var(--link-blue)',
  unset: 'var(--gray)'
};
function FlagToggle({
  value,
  onChange
}) {
  const opts = ['uplink', 'downlink', 'unset'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      background: 'var(--field-bg)',
      border: '1.5px solid var(--field-border)',
      borderRadius: 9,
      padding: 2,
      gap: 2
    }
  }, opts.map(o => {
    const active = value === o;
    return /*#__PURE__*/React.createElement("button", {
      key: o,
      type: "button",
      onClick: () => onChange && onChange(o),
      style: {
        fontFamily: 'inherit',
        fontSize: 11.5,
        fontWeight: 700,
        letterSpacing: '.01em',
        color: active ? '#fff' : 'var(--text-muted)',
        background: active ? COLORS[o] : 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '4px 10px',
        borderRadius: 7,
        whiteSpace: 'nowrap'
      }
    }, o);
  }));
}
Object.assign(__ds_scope, { FlagToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FlagToggle.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchInput.jsx
try { (() => {
// Search input with leading icon — mirrors .search/.search input.
function SearchInput({
  value,
  onChange,
  placeholder = 'Search…',
  width = 240
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: 'absolute',
      left: 11,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
      color: 'var(--text-faint)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  })), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: value,
    onChange: e => onChange && onChange(e.target.value),
    placeholder: placeholder,
    style: {
      fontFamily: 'inherit',
      fontSize: 14,
      color: 'var(--text)',
      background: 'var(--field-bg)',
      border: '1.5px solid var(--field-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '9px 12px 9px 34px',
      outline: 'none',
      width: '100%'
    }
  }));
}
Object.assign(__ds_scope, { SearchInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
// Native select styled to match .sel — used for "Show 10/25/50" page-size control.
function Select({
  value,
  onChange,
  options
}) {
  return /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      fontFamily: 'inherit',
      fontSize: 14,
      color: 'var(--text)',
      background: 'var(--field-bg)',
      border: '1.5px solid var(--field-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '9px 28px 9px 12px',
      outline: 'none',
      cursor: 'pointer',
      appearance: 'none',
      backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>\")",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 9px center'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
// Breadcrumb — mirrors .crumb (back-pill link + current page label).
function Breadcrumb({
  backLabel,
  backHref = '#',
  current
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13,
      color: 'var(--text-muted)',
      margin: '4px 2px 14px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: backHref,
    style: {
      color: 'var(--text-muted)',
      fontWeight: 600,
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '5px 11px 5px 8px',
      borderRadius: 9,
      border: '1.5px solid var(--field-border)',
      background: 'var(--field-bg)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      width: 15,
      height: 15
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15 18l-6-6 6-6"
  })), backLabel), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)'
    }
  }, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text)',
      fontWeight: 700
    }
  }, current));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopNav.jsx
try { (() => {
// Top navigation bar — logo, pill nav, notification/theme icon buttons, user pill.
function TopNav({
  logo,
  items,
  activeHref,
  actions
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, logo, /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      background: 'var(--nav-bg)',
      borderRadius: 'var(--radius-full)',
      padding: 7,
      boxShadow: 'var(--shadow-card)'
    }
  }, items.map(it => {
    const active = it.href === activeHref;
    return /*#__PURE__*/React.createElement("a", {
      key: it.href,
      href: it.href,
      style: {
        textDecoration: 'none',
        color: active ? '#fff' : 'var(--pill-inactive)',
        background: active ? 'var(--orange)' : 'transparent',
        fontWeight: 600,
        fontSize: 15,
        padding: '11px 22px',
        borderRadius: 'var(--radius-full)',
        whiteSpace: 'nowrap'
      }
    }, it.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, actions));
}
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopNav.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Dropdown.jsx
try { (() => {
const {
  useState,
  useRef,
  useEffect
} = React; // Popover dropdown menu — mirrors .export-pop/.vf-pop pattern (button + absolute panel).
function Dropdown({
  trigger,
  children,
  align = 'right'
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const close = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setOpen(o => !o)
  }, trigger), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 8px)',
      [align]: 0,
      zIndex: 40,
      minWidth: 210,
      background: 'var(--card-bg)',
      border: '1px solid var(--card-border)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-pop)',
      padding: 6
    },
    onClick: e => e.stopPropagation()
  }, children));
}
function DropdownItem({
  icon,
  title,
  subtitle,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      width: '100%',
      textAlign: 'left',
      fontFamily: 'inherit',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '9px 10px',
      borderRadius: 9,
      color: 'var(--text)'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--field-bg)',
    onMouseLeave: e => e.currentTarget.style.background = 'none'
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      color: 'var(--orange)',
      flex: 'none'
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 13.5,
      fontWeight: 700
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-faint)',
      fontWeight: 600
    }
  }, subtitle)));
}
Object.assign(__ds_scope, { Dropdown, DropdownItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Dropdown.jsx", error: String((e && e.message) || e) }); }

// components/overlays/InfoTooltip.jsx
try { (() => {
// "i" info icon that reveals a WHAT/HOW explainer popover on hover — mirrors
// .metric-info/.metric-info-pop next to chart titles.
function InfoTooltip({
  title,
  what,
  how
}) {
  return /*#__PURE__*/React.createElement("span", {
    tabIndex: 0,
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 17,
      height: 17,
      marginLeft: 7,
      color: 'var(--text-faint)',
      cursor: 'help'
    },
    className: "kds-info-tip"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      width: 15,
      height: 15
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 11v5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "7.7",
    r: "1.05",
    fill: "currentColor",
    stroke: "none"
  })), /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      textTransform: 'none',
      position: 'absolute',
      top: 'calc(100% + 9px)',
      left: '50%',
      transform: 'translateX(-14px)',
      width: 250,
      background: 'var(--card-bg)',
      color: 'var(--text)',
      border: '1.5px solid var(--card-border)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-pop)',
      padding: '12px 13px',
      zIndex: 60,
      opacity: 0,
      pointerEvents: 'none',
      textAlign: 'left',
      transition: 'opacity .15s ease'
    },
    className: "kds-info-pop"
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      fontSize: 12.5,
      fontWeight: 700,
      marginBottom: 4
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12,
      lineHeight: 1.5,
      color: 'var(--text-muted)'
    }
  }, what), how && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 11.5,
      lineHeight: 1.5,
      color: 'var(--text-faint)',
      marginTop: 9,
      paddingTop: 9,
      borderTop: '1px solid var(--row-border)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      fontSize: 9.5,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      color: 'var(--orange)',
      marginBottom: 3
    }
  }, "How it's measured"), how)), /*#__PURE__*/React.createElement("style", null, `.kds-info-tip:hover .kds-info-pop, .kds-info-tip:focus .kds-info-pop { opacity: 1; pointer-events: auto; }`));
}
Object.assign(__ds_scope, { InfoTooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/InfoTooltip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/network/DevicePage.jsx
try { (() => {
// Device detail screen — recreates network-ui-kontrola's device.html.
function DevicePage({
  deviceName,
  onBack
}) {
  const DS = window.KontrolaDesignSystem_ebdf13;
  const {
    TopNav,
    IconButton,
    Breadcrumb,
    HeroChip,
    StatusBadge,
    SyncPill,
    SegmentedControl,
    DataTable,
    FlagToggle,
    Dropdown,
    DropdownItem,
    Button,
    SearchInput,
    InfoTooltip
  } = DS;
  const Ic = window.KIcons;
  const {
    DEVICES,
    interfacesFor
  } = window.KONTROLA_SAMPLE;
  const device = DEVICES.find(d => d.name === deviceName) || DEVICES[0];
  const [range, setRange] = React.useState('hourly');
  const [ifStatus, setIfStatus] = React.useState('all');
  const [flags, setFlags] = React.useState({});
  const interfaces = interfacesFor(device.name);
  const visibleIfs = interfaces.filter(i => ifStatus === 'all' || i.state === ifStatus);
  const fmtBytes = n => n === 0 ? '0 B' : (n / 1e6).toFixed(1) + ' MB';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      padding: '22px 28px 80px'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(TopNav, {
    logo: /*#__PURE__*/React.createElement("a", {
      onClick: onBack,
      style: {
        display: 'flex',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/kontrola-logo.png",
      alt: "kontrola",
      style: {
        height: 38
      }
    })),
    items: [{
      href: '#overview',
      label: 'Overview'
    }, {
      href: '#infrastructure',
      label: 'Infrastructure'
    }, {
      href: '#storage',
      label: 'Storage'
    }, {
      href: '#network',
      label: 'Network'
    }, {
      href: '#applications',
      label: 'Applications'
    }, {
      href: '#licenses',
      label: 'Licenses'
    }],
    activeHref: "#network",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconButton, {
      title: "Notifications"
    }, /*#__PURE__*/React.createElement(Ic.Bell, null)), /*#__PURE__*/React.createElement(IconButton, {
      title: "Toggle theme"
    }, /*#__PURE__*/React.createElement(Ic.Theme, null)))
  })), /*#__PURE__*/React.createElement("div", {
    onClick: onBack,
    style: {
      cursor: 'pointer',
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    backLabel: "Network",
    current: device.name
  })), /*#__PURE__*/React.createElement("section", {
    className: "card",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 18,
      padding: '22px 24px',
      marginBottom: 22,
      flexWrap: 'wrap',
      background: 'var(--card-bg)',
      border: '1.5px solid var(--card-border)',
      borderRadius: 20,
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 14,
      background: 'var(--orange-050)',
      color: 'var(--orange)',
      display: 'grid',
      placeItems: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      width: 27,
      height: 27
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "4",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "10",
    width: "12",
    height: "4",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "16",
    width: "6",
    height: "4",
    rx: "1"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 320px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 26,
      fontWeight: 700,
      letterSpacing: '-.02em',
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, device.name, " ", /*#__PURE__*/React.createElement(StatusBadge, {
    status: device.oper
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, device.type)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flex: '1 1 460px',
      alignSelf: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(HeroChip, {
    label: "IP Address",
    value: device.ip
  }), /*#__PURE__*/React.createElement(HeroChip, {
    label: "Uptime",
    value: device.uptime
  }), /*#__PURE__*/React.createElement(HeroChip, {
    label: "Ports",
    value: device.portsTotal ? `${device.portsUp}/${device.portsTotal}` : '—',
    tone: device.portsTotal && device.portsUp < device.portsTotal ? 'warn' : 'ok'
  }), /*#__PURE__*/React.createElement(HeroChip, {
    label: "Sources",
    value: /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 4
      }
    }, device.sources.map(s => /*#__PURE__*/React.createElement(DS.ToolBadge, {
      key: s,
      tool: s
    })))
  }))), /*#__PURE__*/React.createElement("section", {
    className: "card",
    style: {
      background: 'var(--card-bg)',
      border: '1.5px solid var(--card-border)',
      borderRadius: 20,
      boxShadow: 'var(--shadow-card)',
      padding: 0,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 18,
      padding: '22px 24px 18px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 21,
      fontWeight: 700
    }
  }, "Interfaces"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: 'var(--text-muted)',
      marginTop: 3
    }
  }, interfaces.length, " interfaces on this device")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(SyncPill, {
    fresh: true
  }, "Synced 12s ago"), /*#__PURE__*/React.createElement(SegmentedControl, {
    value: ifStatus,
    onChange: setIfStatus,
    compact: true,
    options: [{
      value: 'all',
      label: 'All'
    }, {
      value: 'up',
      label: 'Up'
    }, {
      value: 'down',
      label: 'Down'
    }]
  }), /*#__PURE__*/React.createElement(SearchInput, {
    value: "",
    onChange: () => {},
    placeholder: "Search interfaces\u2026",
    width: 200
  }), /*#__PURE__*/React.createElement(Dropdown, {
    trigger: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      icon: /*#__PURE__*/React.createElement("span", {
        style: {
          width: 16,
          height: 16
        }
      }, /*#__PURE__*/React.createElement(Ic.Export, null))
    }, "Export \u25BE")
  }, /*#__PURE__*/React.createElement(DropdownItem, {
    icon: /*#__PURE__*/React.createElement(Ic.Csv, null),
    title: "CSV",
    subtitle: "Interface data"
  }), /*#__PURE__*/React.createElement(DropdownItem, {
    icon: /*#__PURE__*/React.createElement(Ic.Pdf, null),
    title: "PDF",
    subtitle: "Device report"
  })))), /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: 'index',
      label: '#',
      num: true
    }, {
      key: 'name',
      label: 'Interface'
    }, {
      key: 'desc',
      label: 'Description'
    }, {
      key: 'state',
      label: 'Status'
    }, {
      key: 'octIn',
      label: 'In',
      num: true
    }, {
      key: 'octOut',
      label: 'Out',
      num: true
    }, {
      key: 'errIn',
      label: 'Errors',
      num: true
    }, {
      key: 'flag',
      label: 'Role'
    }],
    rows: visibleIfs,
    renderCell: (row, key) => {
      if (key === 'state') return /*#__PURE__*/React.createElement(StatusBadge, {
        status: row.state === 'up' ? 'up' : 'down'
      });
      if (key === 'octIn') return fmtBytes(row.octIn);
      if (key === 'octOut') return fmtBytes(row.octOut);
      if (key === 'errIn') return row.errIn || /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--text-faint)'
        }
      }, "0");
      if (key === 'flag') {
        const val = flags[row.name] || row.flag;
        return /*#__PURE__*/React.createElement(FlagToggle, {
          value: val,
          onChange: v => setFlags({
            ...flags,
            [row.name]: v
          })
        });
      }
      return row[key];
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 16,
      marginBottom: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 19,
      fontWeight: 700
    }
  }, "Graph details"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)',
      marginTop: 3
    }
  }, "Device-wide, all-port aggregates")), /*#__PURE__*/React.createElement(SegmentedControl, {
    value: range,
    onChange: setRange,
    options: [{
      value: 'hourly',
      label: 'Hourly'
    }, {
      value: 'weekly',
      label: 'Weekly'
    }, {
      value: 'monthly',
      label: 'Monthly'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      background: 'var(--card-bg)',
      border: '1.5px solid var(--card-border)',
      borderRadius: 20,
      boxShadow: 'var(--shadow-card)',
      padding: '20px 22px 14px',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center'
    }
  }, "Throughput", /*#__PURE__*/React.createElement(InfoTooltip, {
    title: "Throughput",
    what: "Combined inbound and outbound traffic summed across every interface on this device.",
    how: "Per-port ifHCInOctets / ifHCOutOctets counters, rated to bps and summed."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 18,
      color: 'var(--orange)'
    }
  }, "612 Mbps"), /*#__PURE__*/React.createElement("em", {
    style: {
      display: 'block',
      fontSize: 10.5,
      color: 'var(--text-faint)'
    }
  }, "RX")), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 18,
      color: 'var(--link-blue)'
    }
  }, "398 Mbps"), /*#__PURE__*/React.createElement("em", {
    style: {
      display: 'block',
      fontSize: 10.5,
      color: 'var(--text-faint)'
    }
  }, "TX")))))));
}
window.DevicePage = DevicePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/network/DevicePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/network/InfrastructurePage.jsx
try { (() => {
// Infrastructure / device list screen — recreates network-ui-kontrola's index.html.
function InfrastructurePage({
  onOpenDevice,
  theme,
  onToggleTheme
}) {
  const DS = window.KontrolaDesignSystem_ebdf13;
  const {
    TopNav,
    IconButton,
    SegmentedControl,
    ScopeBar,
    MetricCard,
    Sparkline,
    DataTable,
    PortsBar,
    StatusBadge,
    ToolBadge,
    Pagination,
    SearchInput,
    Select,
    Dropdown,
    DropdownItem,
    Button,
    InfoTooltip
  } = DS;
  const Ic = window.KIcons;
  const {
    DEVICES
  } = window.KONTROLA_SAMPLE;
  const [lens, setLens] = React.useState('uplink');
  const [range, setRange] = React.useState('hourly');
  const [status, setStatus] = React.useState('all');
  const [search, setSearch] = React.useState('');
  const [perPage, setPerPage] = React.useState('10');
  const [sortKey, setSortKey] = React.useState('name');
  const [sortDir, setSortDir] = React.useState(1);
  let rows = DEVICES.filter(d => {
    if (status === 'up' && d.oper !== 'up') return false;
    if (status === 'down' && d.oper !== 'down') return false;
    if (search && !(d.name + d.type + d.ip).toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });
  rows = [...rows].sort((a, b) => {
    const va = String(a[sortKey] ?? ''),
      vb = String(b[sortKey] ?? '');
    return va < vb ? -sortDir : va > vb ? sortDir : 0;
  });
  const upCount = DEVICES.filter(d => d.oper === 'up').length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      padding: '22px 28px 80px'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement(TopNav, {
    logo: /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/kontrola-logo.png",
      alt: "kontrola",
      style: {
        height: 38
      }
    })),
    items: [{
      href: '#overview',
      label: 'Overview'
    }, {
      href: '#infrastructure',
      label: 'Infrastructure'
    }, {
      href: '#storage',
      label: 'Storage'
    }, {
      href: '#network',
      label: 'Network'
    }, {
      href: '#applications',
      label: 'Applications'
    }, {
      href: '#licenses',
      label: 'Licenses'
    }],
    activeHref: "#network",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconButton, {
      title: "Notifications"
    }, /*#__PURE__*/React.createElement(Ic.Bell, null)), /*#__PURE__*/React.createElement(IconButton, {
      title: "Toggle theme",
      onClick: onToggleTheme
    }, /*#__PURE__*/React.createElement(Ic.Theme, null)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        background: 'var(--nav-bg)',
        borderRadius: 999,
        padding: '6px 18px 6px 6px',
        boxShadow: 'var(--shadow-card)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 36,
        height: 36,
        borderRadius: 999,
        background: 'var(--light)',
        display: 'grid',
        placeItems: 'center',
        color: 'var(--gray)'
      }
    }, /*#__PURE__*/React.createElement(Ic.User, null)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        fontSize: 14.5
      }
    }, "noc@tristek.id")))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      background: 'var(--nav-bg)',
      borderRadius: 999,
      padding: '9px 18px',
      boxShadow: 'var(--shadow-card)',
      fontWeight: 600,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      color: 'var(--gray)'
    }
  }, /*#__PURE__*/React.createElement(Ic.Org, null)), " tristek"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    pill: true,
    icon: /*#__PURE__*/React.createElement("span", {
      style: {
        width: 17,
        height: 17
      }
    }, /*#__PURE__*/React.createElement(Ic.Date, null))
  }, "Jun 11, 11:25 \u2013 23:25"))), /*#__PURE__*/React.createElement(ScopeBar, {
    note: /*#__PURE__*/React.createElement("span", null, "Every metric, chart and device below is aggregated across each device's ", /*#__PURE__*/React.createElement("b", null, lens), " ports \xB7 ", /*#__PURE__*/React.createElement("b", null, rows.length), " devices in scope")
  }, /*#__PURE__*/React.createElement(SegmentedControl, {
    value: lens,
    onChange: setLens,
    compact: true,
    options: [{
      value: 'uplink',
      label: 'Uplink',
      icon: /*#__PURE__*/React.createElement("span", {
        style: {
          width: 14,
          height: 14
        }
      }, /*#__PURE__*/React.createElement(Ic.Uplink, null))
    }, {
      value: 'downlink',
      label: 'Downlink',
      icon: /*#__PURE__*/React.createElement("span", {
        style: {
          width: 14,
          height: 14
        }
      }, /*#__PURE__*/React.createElement(Ic.Downlink, null))
    }]
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16,
      margin: '22px 0'
    }
  }, /*#__PURE__*/React.createElement(MetricCard, {
    label: "Availability",
    badge: "SLA \xB7 24h",
    value: "99.94",
    unit: "%",
    sub: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "46/48"), " uplink ports up \xB7 target 99.90%")
  }, /*#__PURE__*/React.createElement(Sparkline, {
    data: [99.8, 99.9, 99.85, 99.95, 99.9, 99.92, 99.88],
    color: "var(--good)"
  })), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Link Errors",
    badge: "In + Out \xB7 24h",
    value: "128",
    unit: "err",
    tone: "warn",
    sub: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "84"), " in \xB7 ", /*#__PURE__*/React.createElement("b", null, "44"), " out")
  }, /*#__PURE__*/React.createElement(Sparkline, {
    data: [18, 22, 20, 26, 24, 30, 28],
    color: "var(--orange)"
  })), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Coverage",
    badge: "Group vs Fleet",
    value: /*#__PURE__*/React.createElement("span", null, upCount, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        color: 'var(--text-faint)',
        marginLeft: 6
      }
    }, "/ ", DEVICES.length, " devices")),
    sub: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, DEVICES.length), " ports flagged as ", lens)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 7,
      fontSize: 11,
      color: 'var(--text-faint)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", null, "In ", lens, " group"), /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text)',
      fontSize: 13
    }
  }, "83%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 999,
      background: 'var(--card-border-soft)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '83%',
      height: '100%',
      background: 'var(--good)'
    }
  }))), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Throughput",
    badge: "Aggregate",
    value: "4.2",
    unit: "Gbps",
    sub: /*#__PURE__*/React.createElement("span", null, "Peak 24h: ", /*#__PURE__*/React.createElement("b", null, "5.6 Gbps"), " \xB7 Top site: DC Jakarta")
  }, /*#__PURE__*/React.createElement(Sparkline, {
    data: [38, 42, 40, 46, 44, 50, 48],
    color: "var(--orange)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: '4px 2px 16px',
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: '-.01em'
    }
  }, "Network Health Overview"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "Live metrics across all monitored devices")), /*#__PURE__*/React.createElement(SegmentedControl, {
    value: range,
    onChange: setRange,
    options: [{
      value: 'hourly',
      label: 'Hourly'
    }, {
      value: 'weekly',
      label: 'Weekly'
    }, {
      value: 'monthly',
      label: 'Monthly'
    }]
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 22,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      background: 'var(--card-bg)',
      border: '1.5px solid var(--card-border)',
      borderRadius: 20,
      boxShadow: 'var(--shadow-card)',
      padding: '20px 22px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center'
    }
  }, "Throughput", /*#__PURE__*/React.createElement(InfoTooltip, {
    title: "Throughput",
    what: "Combined inbound (RX) and outbound (TX) traffic across every monitored interface in the fleet.",
    how: "Polled from SNMP ifHCInOctets / ifHCOutOctets counters every 60s."
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, "Aggregate inbound / outbound traffic")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 22,
      color: 'var(--orange)'
    }
  }, "4.2 Gbps"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 11,
      color: 'var(--text-faint)',
      fontWeight: 600
    }
  }, "now"))), /*#__PURE__*/React.createElement(ThroughputChart, null)), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      background: 'var(--card-bg)',
      border: '1.5px solid var(--card-border)',
      borderRadius: 20,
      boxShadow: 'var(--shadow-card)',
      padding: '20px 22px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16,
      fontWeight: 700
    }
  }, "Top Utilize Link"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, "Top 5 links by peak utilization"))), /*#__PURE__*/React.createElement(TopLinksList, null))), /*#__PURE__*/React.createElement("section", {
    className: "card",
    style: {
      background: 'var(--card-bg)',
      border: '1.5px solid var(--card-border)',
      borderRadius: 20,
      boxShadow: 'var(--shadow-card)',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 18,
      padding: '22px 24px 18px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 21,
      fontWeight: 700
    }
  }, "Device"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: 'var(--text-muted)',
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement("b", null, rows.length), " devices in scope")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Dropdown, {
    trigger: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: /*#__PURE__*/React.createElement("span", {
        style: {
          width: 15,
          height: 15
        }
      }, /*#__PURE__*/React.createElement(Ic.Vendor, null))
    }, "Vendor \u25BE")
  }, /*#__PURE__*/React.createElement(DropdownItem, {
    title: "Cisco",
    subtitle: "4 devices"
  }), /*#__PURE__*/React.createElement(DropdownItem, {
    title: "MikroTik",
    subtitle: "3 devices"
  }), /*#__PURE__*/React.createElement(DropdownItem, {
    title: "Fortinet",
    subtitle: "2 devices"
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      fontSize: 14,
      color: 'var(--text-muted)',
      fontWeight: 600
    }
  }, "Show ", /*#__PURE__*/React.createElement(Select, {
    value: perPage,
    onChange: setPerPage,
    options: [{
      value: '10',
      label: '10'
    }, {
      value: '25',
      label: '25'
    }, {
      value: '50',
      label: '50'
    }]
  })), /*#__PURE__*/React.createElement(SearchInput, {
    value: search,
    onChange: setSearch,
    placeholder: "Search device\u2026"
  }), /*#__PURE__*/React.createElement(SegmentedControl, {
    value: status,
    onChange: setStatus,
    compact: true,
    options: [{
      value: 'all',
      label: 'All'
    }, {
      value: 'up',
      label: 'Up'
    }, {
      value: 'down',
      label: 'Down'
    }]
  }), /*#__PURE__*/React.createElement(Dropdown, {
    trigger: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      icon: /*#__PURE__*/React.createElement("span", {
        style: {
          width: 16,
          height: 16
        }
      }, /*#__PURE__*/React.createElement(Ic.Export, null))
    }, "Export \u25BE")
  }, /*#__PURE__*/React.createElement(DropdownItem, {
    icon: /*#__PURE__*/React.createElement(Ic.Csv, null),
    title: "CSV",
    subtitle: "Spreadsheet data"
  }), /*#__PURE__*/React.createElement(DropdownItem, {
    icon: /*#__PURE__*/React.createElement(Ic.Pdf, null),
    title: "PDF",
    subtitle: "Printable report"
  })))), /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: 'name',
      label: 'Device',
      sort: true
    }, {
      key: 'type',
      label: 'Type',
      sort: true
    }, {
      key: 'ip',
      label: 'IP',
      sort: true
    }, {
      key: 'uptime',
      label: 'Uptime'
    }, {
      key: 'ports',
      label: 'Interfaces',
      num: true
    }, {
      key: 'rx',
      label: 'Traffic In',
      num: true
    }, {
      key: 'tx',
      label: 'Traffic Out',
      num: true
    }, {
      key: 'oper',
      label: 'Status'
    }],
    rows: rows,
    sortKey: sortKey,
    sortDir: sortDir,
    onSort: k => {
      if (sortKey === k) setSortDir(-sortDir);else {
        setSortKey(k);
        setSortDir(1);
      }
    },
    renderCell: (row, key) => {
      if (key === 'name') return /*#__PURE__*/React.createElement("span", {
        onClick: () => onOpenDevice(row.name),
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 11,
          cursor: 'pointer',
          fontWeight: 700
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 9,
          height: 9,
          borderRadius: 999,
          background: row.oper === 'up' ? 'var(--good)' : 'var(--bad)'
        }
      }), row.name);
      if (key === 'ports') return row.portsTotal ? /*#__PURE__*/React.createElement(PortsBar, {
        up: row.portsUp,
        total: row.portsTotal
      }) : /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--text-faint)'
        }
      }, "\u2014");
      if (key === 'oper') return /*#__PURE__*/React.createElement(StatusBadge, {
        status: row.oper
      });
      if (key === 'type') return /*#__PURE__*/React.createElement("span", {
        title: row.type,
        style: {
          maxWidth: 168,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: 'inline-block',
          whiteSpace: 'nowrap'
        }
      }, row.type);
      return row[key];
    }
  }), /*#__PURE__*/React.createElement(Pagination, {
    page: 1,
    totalPages: 1,
    onChange: () => {},
    info: `Showing 1–${rows.length} of ${rows.length} devices`
  })));
}
function ThroughputChart() {
  const w = 600,
    h = 172,
    n = 24;
  const rx = Array.from({
    length: n
  }, (_, i) => 60 + Math.sin(i / 3) * 20 + Math.random() * 10);
  const tx = Array.from({
    length: n
  }, (_, i) => 40 + Math.sin(i / 3 + 1) * 15 + Math.random() * 8);
  const line = arr => arr.map((v, i) => (i ? 'L' : 'M') + (i / (n - 1) * w).toFixed(1) + ' ' + (h - 30 - v).toFixed(1)).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      margin: '8px 0 10px',
      fontSize: 12,
      color: 'var(--text-muted)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    style: {
      display: 'inline-block',
      width: 9,
      height: 9,
      borderRadius: 3,
      background: 'var(--orange)',
      marginRight: 6
    }
  }), "RX (in)"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    style: {
      display: 'inline-block',
      width: 9,
      height: 9,
      borderRadius: 3,
      background: 'var(--link-blue)',
      marginRight: 6
    }
  }), "TX (out)")), /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${h}`,
    style: {
      width: '100%',
      height: 172,
      display: 'block'
    }
  }, [0, 1, 2, 3, 4].map(g => /*#__PURE__*/React.createElement("line", {
    key: g,
    x1: 0,
    y1: 14 + g * 32,
    x2: w,
    y2: 14 + g * 32,
    stroke: "var(--grid-line)",
    strokeWidth: "1"
  })), /*#__PURE__*/React.createElement("path", {
    d: line(rx),
    fill: "none",
    stroke: "var(--orange)",
    strokeWidth: "2.2",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: line(tx),
    fill: "none",
    stroke: "var(--link-blue)",
    strokeWidth: "1.7",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  })));
}
function TopLinksList() {
  const rows = [{
    dev: 'Edge-RT-02',
    port: 'xe-0/0/2',
    pct: 92
  }, {
    dev: 'Core-SW-01',
    port: 'Gi1/0/1',
    pct: 78
  }, {
    dev: 'Edge-FW-01',
    port: 'wan1',
    pct: 66
  }, {
    dev: 'MikroTik',
    port: 'ether1',
    pct: 54
  }, {
    dev: 'Dist-SW-04',
    port: '1/1/1',
    pct: 41
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 15,
      marginTop: 16
    }
  }, rows.map((r, i) => {
    const cls = r.pct >= 85 ? 'var(--bad)' : r.pct >= 60 ? 'var(--orange)' : 'var(--good)';
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '16px minmax(108px,1.15fr) 2fr 42px',
        alignItems: 'center',
        gap: 11
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: 'var(--text-faint)',
        textAlign: 'center'
      }
    }, i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        display: 'block',
        fontSize: 12.5,
        fontWeight: 700,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, r.dev), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 10.5,
        color: 'var(--text-faint)'
      }
    }, r.port)), /*#__PURE__*/React.createElement("span", {
      style: {
        height: 9,
        borderRadius: 999,
        background: 'var(--card-border-soft)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        height: '100%',
        borderRadius: 999,
        width: r.pct + '%',
        background: cls
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: 700,
        textAlign: 'right'
      }
    }, r.pct, "%"));
  }));
}
window.InfrastructurePage = InfrastructurePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/network/InfrastructurePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/network/data.js
try { (() => {
// Trimmed sample dataset for the Kontrola UI kit (subset of the real product's dummy data.js).
window.KONTROLA_SAMPLE = {
  TOOLS: {
    zabbix: 'Zabbix',
    datadog: 'Datadog',
    librenms: 'LibreNMS',
    smokeping: 'Smokeping'
  },
  DEVICES: [{
    name: 'MikroTik',
    type: 'RouterOS C52iG-5HaxD2HaxD',
    ip: '10.10.3.42',
    uptime: '20d 8h 13m',
    portsUp: 4,
    portsTotal: 4,
    rx: '441.9 MB',
    tx: '53.7 MB',
    oper: 'up',
    sources: ['zabbix', 'librenms', 'smokeping'],
    spark: [22, 25, 21, 28, 32, 30, 27, 29]
  }, {
    name: 'Core-SW-01',
    type: 'Cisco Catalyst 9300-48P',
    ip: '10.10.7.118',
    uptime: '105d 14h 5m',
    portsUp: 46,
    portsTotal: 48,
    rx: '8.8 GB',
    tx: '7.7 GB',
    oper: 'up',
    sources: ['zabbix', 'datadog'],
    spark: [55, 58, 60, 57, 62, 65, 63, 66]
  }, {
    name: 'Edge-FW-01',
    type: 'Fortinet FortiGate 200F',
    ip: '10.10.2.9',
    uptime: '52d 2h 30m',
    portsUp: 8,
    portsTotal: 8,
    rx: '23.4 GB',
    tx: '19.9 GB',
    oper: 'up',
    sources: ['zabbix', 'datadog', 'smokeping'],
    spark: [40, 44, 47, 45, 50, 48, 52, 49]
  }, {
    name: 'Web-LB-01',
    type: 'F5 BIG-IP i2800',
    ip: '10.10.4.71',
    uptime: '25d 13h 45m',
    portsUp: 0,
    portsTotal: 6,
    rx: '—',
    tx: '—',
    oper: 'down',
    sources: ['datadog', 'smokeping'],
    spark: [30, 28, 22, 15, 8, 4, 2, 0]
  }, {
    name: 'Cam-NVR-01',
    type: 'Hikvision DS-9664NI',
    ip: '10.30.5.201',
    uptime: '—',
    portsUp: null,
    portsTotal: null,
    rx: '—',
    tx: '—',
    oper: 'down',
    sources: ['librenms', 'smokeping'],
    spark: [10, 8, 6, 4, 3, 2, 1, 0]
  }, {
    name: 'Edge-RT-02',
    type: 'Juniper MX204',
    ip: '10.10.1.17',
    uptime: '178d 6h 0m',
    portsUp: 1,
    portsTotal: 2,
    rx: '884.4 GB',
    tx: '773.3 GB',
    oper: 'up',
    sources: ['zabbix', 'librenms', 'smokeping'],
    spark: [70, 68, 72, 66, 64, 69, 71, 67]
  }],
  interfacesFor(name) {
    const rnd = seed => {
      let h = 0;
      for (const c of seed) h = h * 31 + c.charCodeAt(0) >>> 0;
      return h;
    };
    const seed = rnd(name);
    const count = 4 + seed % 6;
    const ifs = [];
    for (let i = 0; i < count; i++) {
      const up = (seed >> i) % 5 !== 0;
      ifs.push({
        index: i + 1,
        name: 'Gi1/0/' + (i + 1),
        desc: i === 0 ? 'Uplink / Core' : i === count - 1 ? 'Management' : 'Access · VLAN ' + (10 + i),
        state: up ? 'up' : 'down',
        octIn: up ? seed % 900000000 + i * 1000 : 0,
        octOut: up ? seed % 600000000 + i * 800 : 0,
        errIn: up && i % 3 === 0 ? seed % 40 : 0,
        errOut: 0,
        flag: i === 0 ? 'uplink' : i === count - 1 ? 'downlink' : 'unset'
      });
    }
    return ifs;
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/network/data.js", error: String((e && e.message) || e) }); }

// ui_kits/network/icons.jsx
try { (() => {
// Shared stroke icons — copied verbatim from the product's inline SVGs
// (index.html / device.html in network-ui-kontrola). Do not hand-invent new
// glyphs; add more here only by copying further icons from the source.
window.KIcons = {
  Bell: () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.7 21a2 2 0 0 1-3.4 0"
  })),
  Theme: () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"
  })),
  User: () => /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21a8 8 0 0 1 16 0"
  })),
  Org: () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 21h18M5 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16M19 21V9a1 1 0 0 0-1-1h-3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 7h2M8 11h2M8 15h2"
  })),
  Date: () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 10h18M8 2v4M16 2v4"
  })),
  Export: () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3v12m0 0 4-4m-4 4-4-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
  })),
  Csv: () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 2v6h6"
  })),
  Pdf: () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 2v6h6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 13h6M9 17h4"
  })),
  Uplink: () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 19V5M5 12l7-7 7 7"
  })),
  Downlink: () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12l7 7 7-7"
  })),
  Vendor: () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "4",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "10",
    width: "12",
    height: "4",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "16",
    width: "6",
    height: "4",
    rx: "1"
  }))
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/network/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.HeroChip = __ds_scope.HeroChip;

__ds_ns.MetricCard = __ds_scope.MetricCard;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.PortsBar = __ds_scope.PortsBar;

__ds_ns.ScopeBar = __ds_scope.ScopeBar;

__ds_ns.Sparkline = __ds_scope.Sparkline;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.SyncPill = __ds_scope.SyncPill;

__ds_ns.ToolBadge = __ds_scope.ToolBadge;

__ds_ns.FlagToggle = __ds_scope.FlagToggle;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.TopNav = __ds_scope.TopNav;

__ds_ns.Dropdown = __ds_scope.Dropdown;

__ds_ns.DropdownItem = __ds_scope.DropdownItem;

__ds_ns.InfoTooltip = __ds_scope.InfoTooltip;

})();
