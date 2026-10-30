const services = [
  {
    icon: "〽",
    overline: "PAIN-FREE ROTARY ENDODONTICS",
    title: "Single-Sitting Root Canal Treatment",
    desc: "Preserve your natural tooth with automated rotary endodontic technology. Quick, comfortable, and precise canal cleaning with bio-inert 3D obturation.",
    points: [
      "Advanced apex-guided canal shaping",
      "Gentle, effective localized anesthesia",
      "Bio-inert seal preventing reinfection",
      "Single-visit efficiency for suitable cases",
    ],
  },
  {
    icon: "✧",
    overline: "SEAMLESS NATURAL AESTHETICS",
    title: "Tooth-Colored Nano-Composite Fillings",
    desc: "Restore chipped, worn, or decayed teeth with micro-hybrid composite resins that blend imperceptibly with your natural tooth shade and texture.",
    points: [
      "Color-matched to natural enamel",
      "Conservative tooth preparation",
      "High mechanical bond strength",
      "Mercury-free, bio-compatible material",
    ],
  },
  {
    icon: "◒",
    overline: "PREVENTIVE PERIODONTAL WELLNESS",
    title: "Ultrasonic Teeth Scaling & Polishing",
    desc: "Gentle ultrasonic vibration lifts stubborn tartar, plaque, and surface stains without scratching enamel, promoting long-term gum health.",
    points: [
      "Removes hard calculus and coffee/tea stains",
      "Halts gingival inflammation and bleeding",
      "Polishing paste for smooth enamel sheen",
      "Recommended every 6 months for oral health",
    ],
  },
  {
    icon: "◉",
    overline: "HIGH-STRENGTH STRUCTURAL RESTORATION",
    title: "Fixed Ceramic & Zirconia Crowns",
    desc: "Protect treated teeth or replace missing units with custom-milled monolithic zirconia and ceramic bridges crafted for life-like translucency and bite durability.",
    points: [
      "Monolithic zirconia high fracture resistance",
      "Accurate margin fit for gum protection",
      "Natural light translucency",
      "Restores full chewing efficiency",
    ],
  },
  {
    icon: "⚿",
    overline: "ATRAUMATIC, SAFE REMOVALS",
    title: "Tooth Extractions & Routine Oral Surgery",
    desc: "Gentle, atraumatic extractions for unrestorable, impacted, or crowded teeth, supported by post-procedure healing guidance and pain management.",
    points: [
      "Atraumatic techniques preserving bone",
      "Pre-procedural digital assessment",
      "Clear recovery and healing protocol",
      "Comfort-focused chairside care",
    ],
  },
  {
    icon: "♧",
    overline: "PROACTIVE FAMILY DENTISTRY",
    title: "Preventive Checkups & Oral Consultations",
    desc: "Comprehensive intraoral assessment, decay detection, bite analysis, and personalized home-care guidance to keep your entire family cavity-free.",
    points: [
      "Detailed intraoral visual inspection",
      "Early cavity & enamel demineralization catch",
      "Personalized oral hygiene coaching",
      "Transparent, pressure-free treatment plans",
    ],
  },
];
document.querySelector("#service-grid").innerHTML = services
  .map(
    (s, i) =>
      `<article class="service-card ${s.featured ? "featured" : ""}">${s.featured ? '<span class="badge">FLAGSHIP TREATMENT</span>' : ""}<div class="card-icon">${s.icon}</div><div class="overline">${s.overline}</div><h3>${s.title}</h3><p>${s.desc}</p><ul class="feature-list">${s.points.map((p) => `<li>${p}</li>`).join("")}</ul><div class="card-footer"><a href="#scheduler">Book Consultation &nbsp;›</a>${s.featured ? '<button type="button" class="step-flow">▣ &nbsp;4-Step Flow</button>' : ""}</div></article>`,
  )
  .join("");

const comparisons = [
  [
    "Clinical Approach",
    "✓ &nbsp;Tooth-preserving, conservative philosophy with clear treatment explanations.",
    "✕ &nbsp;Frequent rushing to invasive procedures without discussing alternatives.",
  ],
  [
    "Sterilization Standard",
    "✓ &nbsp;Multi-tier autoclave protocol, sealed pouch instruments, & sanitized operatories.",
    "✕ &nbsp;Basic surface cleaning with shared non-isolated tool trays.",
  ],
  [
    "Doctor Attention",
    "✓ &nbsp;Dedicated 1-on-1 consultation directly with Dr. Kriti Suman (BDS Dental Surgeon).",
    "✕ &nbsp;Frequent handover to rotating, unfamiliar junior staff.",
  ],
  [
    "Endodontic Technology",
    "✓ &nbsp;Precision rotary instrumentation and bio-inert 3D obturation for gentle root canals.",
    "✕ &nbsp;Slow manual hand-filing causing prolonged chair discomfort.",
  ],
  [
    "Pricing & Transparency",
    "✓ &nbsp;Clear itemized consultation with zero surprise fees or hidden procedure costs.",
    "✕ &nbsp;Vague initial quotes with unexpected surcharges during treatment.",
  ],
];
document.querySelector("#compare-body").innerHTML = comparisons
  .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`)
  .join("");

const faqs = [
  [
    "Is a root canal treatment painful at Elite Pearl Dental Clinic?",
    "No. Modern rotary endodontics combined with gentle, targeted localized anesthesia ensures the procedure is virtually painless. Dr. Kriti Suman takes meticulous care to keep you fully comfortable throughout the treatment.",
  ],
  [
    "Who will examine and treat me during my appointment?",
    "Dr. Kriti Suman, BDS and the clinic’s resident lead surgeon, provides direct chairside consultation and treatment guidance at every visit.",
  ],
  [
    "How do I schedule an appointment?",
    "Choose an appointment slot above and use the WhatsApp booking button for direct, instant confirmation from the clinic desk.",
  ],
  [
    "Where is the clinic located in Vikaspuri?",
    "The clinic is at Shop No. 11, Block A, near Maggo Optics in Vikaspuri / East Uttam Nagar, New Delhi.",
  ],
  [
    "How often should I get ultrasonic teeth scaling done?",
    "For most patients, a professional cleaning every six months supports healthy gums and makes early dental concerns easier to address.",
  ],
  [
    "Are Saturday appointments available?",
    "Yes. Saturday morning appointments are available from 10:30 AM to 2:00 PM. Evening appointments are also available from 4:00 PM to 8:00 PM.",
  ],
];
document.querySelector("#faq-list").innerHTML = faqs
  .map(
    (faq, i) =>
      `<article class="faq-item ${i === 0 ? "open" : ""}"><button class="faq-question" type="button" aria-expanded="${i === 0}">${faq[0]}<span>${i === 0 ? "−" : "+"}</span></button><div class="faq-answer">${faq[1]}</div></article>`,
  )
  .join("");

document.querySelector("#faq-list").addEventListener("click", (e) => {
  const button = e.target.closest(".faq-question");
  if (!button) return;
  const item = button.parentElement;
  const isOpen = item.classList.toggle("open");
  button.setAttribute("aria-expanded", isOpen);
  button.querySelector("span").textContent = isOpen ? "−" : "+";
});
document.querySelector(".menu-toggle").addEventListener("click", (e) => {
  const menu = document.querySelector("#mobile-menu");
  const opened = menu.hasAttribute("hidden");
  menu.toggleAttribute("hidden");
  e.currentTarget.setAttribute("aria-expanded", opened);
  e.currentTarget.textContent = opened ? "×" : "☰";
});
document.querySelectorAll("#mobile-menu a").forEach((a) =>
  a.addEventListener("click", () => {
    document.querySelector("#mobile-menu").setAttribute("hidden", "");
    const b = document.querySelector(".menu-toggle");
    b.setAttribute("aria-expanded", "false");
    b.textContent = "☰";
  }),
);

let chosenConcern = "Tooth Pain / RCT";
document.querySelectorAll("[data-concern]").forEach((button) =>
  button.addEventListener("click", () => {
    document
      .querySelectorAll("[data-concern]")
      .forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    chosenConcern = button.dataset.concern;
    const cta = document.querySelector("#concern-cta");
    cta.textContent = `Confirm ${chosenConcern} Slot  ›`;
    cta.href = `https://wa.me/919508541246?text=${encodeURIComponent(`Hello Elite Pearl Dental Clinic, I would like to schedule a consultation with Dr. Kriti Suman for: ${chosenConcern}.`)}`;
  }),
);

const slots = {
  morning: [
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
  ],
  evening: [
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "06:30 PM",
    "07:00 PM",
    "07:30 PM",
  ],
};
let selectedShift = "morning",
  selectedTime = "10:30 AM";
const slotArea = document.querySelector("#time-slots");
const renderSlots = () => {
  slotArea.innerHTML = slots[selectedShift]
    .map(
      (time) =>
        `<button class="${time === selectedTime ? "active" : ""}" type="button" data-time="${time}">${time}</button>`,
    )
    .join("");
};
renderSlots();
document.querySelectorAll(".shift").forEach((button) =>
  button.addEventListener("click", () => {
    selectedShift = button.dataset.shift;
    selectedTime = slots[selectedShift][1];
    document
      .querySelectorAll(".shift")
      .forEach((b) => b.classList.toggle("active", b === button));
    renderSlots();
    updateSummary();
  }),
);
slotArea.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-time]");
  if (!btn) return;
  selectedTime = btn.dataset.time;
  renderSlots();
  updateSummary();
});
const serviceSelect = document.querySelector("#service-select"),
  daySelect = document.querySelector("#day-select");
serviceSelect.addEventListener("change", updateSummary);
daySelect.addEventListener("change", updateSummary);
function updateSummary() {
  document.querySelector("#summary-service").textContent = serviceSelect.value;
  document.querySelector("#summary-day").textContent = daySelect.value;
  document.querySelector("#summary-time").textContent = selectedTime;
  const name = document.querySelector("#patient-name").value.trim();
  const greeting = name
    ? `Hello Elite Pearl Dental Clinic! I am ${name}.`
    : "Hello Elite Pearl Dental Clinic!";
  document.querySelector("#whatsapp-book").href =
    `https://wa.me/919508541246?text=${encodeURIComponent(`${greeting} I would like to book a consultation with Dr. Kriti Suman for "${serviceSelect.value}" on ${daySelect.value} at ${selectedTime}. Please confirm availability.`)}`;
}
document
  .querySelector("#patient-name")
  .addEventListener("input", updateSummary);
updateSummary();

// Scroll-driven motion: gentle, readable, and disabled for visitors who prefer less animation.
const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
const progressBar = document.querySelector(".scroll-progress");
const updateProgress = () => {
  const available = document.documentElement.scrollHeight - window.innerHeight;
  const progress = available > 0 ? (window.scrollY / available) * 100 : 0;
  progressBar.style.setProperty(
    "--scroll-progress",
    `${Math.min(100, Math.max(0, progress))}%`,
  );
};
updateProgress();
window.addEventListener("scroll", updateProgress, { passive: true });

if (!reducedMotion && "IntersectionObserver" in window) {
  document.body.classList.add("motion-ready");
  const revealSets = [
    [".hero-copy", "reveal-left"],
    [".slot-card", "reveal-right"],
    [".trust-grid article"],
    [".service-card"],
    [".profile-card", "reveal-left"],
    [".doctor-copy", "reveal-right"],
    [".compare-wrap"],
    [".consultation-box"],
    [".scheduler-copy", "reveal-left"],
    [".booking-card", "reveal-right"],
    [".map-frame"],
    [".landmark"],
    [".location-grid article"],
    [".faq-item"],
    ["footer .footer-grid > div"],
  ];
  const revealTargets = [];
  revealSets.forEach(([selector, direction]) =>
    document.querySelectorAll(selector).forEach((element, index) => {
      element.classList.add("reveal");
      if (direction) element.classList.add(direction);
      element.style.setProperty(
        "--reveal-delay",
        `${Math.min(index * 75, 320)}ms`,
      );
      revealTargets.push(element);
    }),
  );
  const observer = new IntersectionObserver(
    (entries, instance) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("revealed");
        instance.unobserve(entry.target);
      }),
    { threshold: 0.14, rootMargin: "0px 0px -40px" },
  );
  revealTargets.forEach((target) => observer.observe(target));
}
