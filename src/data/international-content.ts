import type { ProgramContent, NavEntry, PaneData } from "./international";

const internshipNav: NavEntry[] = [
  { type: "parent", label: "Application to Internship", paneId: "pane-ati-how-to-apply", expanded: true, children: [
    { label: "How to Apply", paneId: "pane-ati-how-to-apply" },
    { label: "Contact", paneId: "pane-ati-contact" },
  ] },
  { type: "parent", label: "Available Cluster", paneId: "pane-cluster-stem-cell", expanded: false, children: [
    { label: "Stem Cell", paneId: "pane-cluster-stem-cell" },
    { label: "Secretome", paneId: "pane-cluster-secretome" },
    { label: "CTL", paneId: "pane-cluster-ctl" },
  ] },
  { type: "leaf", label: "Pre Departure Meeting", paneId: "pane-pre-departure-meeting" },
  { type: "parent", label: "List of Document", paneId: "pane-doc-visa", expanded: false, children: [
    { label: "Visa", paneId: "pane-doc-visa" },
    { label: "Insurance", paneId: "pane-doc-insurance" },
  ] },
];

const internshipPanes: PaneData[] = [
  {
    id: "pane-ati-how-to-apply",
    title: "Application to Internship - How to Apply",
    html: `<h3 id="app-how-to-apply-title" style="margin:0 0 8px 0;">How to Apply</h3>

            <p class="progpage-p">
              Thank you for your interest in joining the International Internship Program at SCCR Indonesia.
              To ensure a smooth application process, please follow the steps below:
            </p>

            <ol class="progpage-p" type="a" style="margin-left:18px;">
              <li>
                <strong>Prepare Your Documents</strong>
                <ul style="margin:6px 0 10px 20px;">
                  <li>Updated CV/Resume (in English)</li>
                  <li>Motivation Letter</li>
                  <li>Academic Transcript (latest)</li>
                  <li>Copy of Passport (for international applicants)</li>
                </ul>
              </li>

              <li>
                <strong>Complete the Online Application Form</strong>
                <p class="progpage-p" style="margin:6px 0 0 0;">
                  Fill out the application form carefully and upload all required documents.
                </p>
              </li>

              <li>
                <strong>Selection Process</strong>
                <p class="progpage-p" style="margin:6px 0 0 0;">
                  Shortlisted candidates will be contacted for an online interview.
                  Final acceptance will be announced via email.
                </p>
              </li>

              <li>
                <strong>Confirmation &amp; Onboarding</strong>
                <p class="progpage-p" style="margin:6px 0 0 0;">
                  Accepted applicants will receive an official acceptance letter and further
                  information regarding internship preparation and schedule.
                </p>
              </li>
            </ol>

            <p class="progpage-p">
              We encourage all applicants to submit accurate and complete information to avoid delays
              in the review process.
            </p>

            <div class="progpage-media">
            </div>

            <p class="progpage-p">
              Apply now through the following link:
              <a href="/international-program/" aria-label="Apply now (link placeholder)">Sign Up Here</a>
            </p>`,
  },
  {
    id: "pane-ati-contact",
    title: "Application to Internship - Contact",
    html: `<h2 class="progpage-p" style="margin-top:0;">Application to Internship</h2>
            <h3 id="app-contact-title" style="margin:0 0 8px 0;">Contact</h3>

            <p class="progpage-p">
              If you find any inconvenience during your application please do not hesitate to contact:
            </p>

            <p class="progpage-p">
              <strong>Hotline APU</strong><br>
              Phone / WhatsApp: <em>(+62 8113755552)</em><br>
              Email: <em>(internationaloffice@kmb.ac.id)</em>
            </p>`,
  },
  {
    id: "pane-cluster-stem-cell",
    title: "Available Cluster - Stem Cell",
    html: `<h2 class="progpage-p" style="margin-top:0;">Available Cluster</h2>
            <h3 style="margin:0 0 8px 0;">Stem Cell</h3>
            <p class="progpage-p">
            The Stem Cell Therapy internship program at SCCR provides students with the opportunity to explore the principles and applications of stem cell–based regenerative medicine. This program introduces participants to the scientific foundations of stem cells and their potential in supporting tissue repair and medical innovation.</p>
<p class="progpage-p">
1. Introduction to Stem Cell Biology</p>
<p class="progpage-p">
Interns will learn the fundamental concepts of stem cells, including their ability to self-renew and differentiate into specialized cells that contribute to tissue regeneration and healing.</p>
<p class="progpage-p">
2. Understanding Mesenchymal Stem Cells (MSCs)</p>
<p class="progpage-p">
Participants will be introduced to mesenchymal stem cells (MSCs), including their biological characteristics, differentiation capabilities, and their role in regenerative medicine.</p>
<p class="progpage-p">
3. Laboratory Observation and Cell Processing</p>
<p class="progpage-p">
Students will observe laboratory procedures related to stem cell handling, preparation, and quality control under standardized laboratory practices.</p>
<p class="progpage-p">
4. Clinical and Therapeutic Applications</p>
<p class="progpage-p">
Interns will explore the potential applications of stem cell therapy in supporting treatment for various conditions, including degenerative diseases, autoimmune disorders, and inflammatory conditions.</p>
<p class="progpage-p">
5. Scientific Learning and Discussion</p>
<p class="progpage-p">
Participants will engage in guided discussions with researchers and medical professionals to better understand the current developments and future directions of stem cell therapy.</p>
<p class="progpage-p">
6. Research Reflection and Presentation</p>
<p class="progpage-p">
At the end of the program, interns will compile their observations and insights into a short report or presentation, reflecting their learning experience throughout the internship.</p>
<p class="progpage-p">
Through this internship, students gain valuable exposure to the rapidly evolving field of regenerative medicine while bridging academic knowledge with real-world biomedical research
            </p>`,
  },
  {
    id: "pane-cluster-secretome",
    title: "Available Cluster - Secretome",
    html: `<h2 class="progpage-p" style="margin-top:0;">Available Cluster</h2>
            <h3 style="margin:0 0 8px 0;">Secretome</h3>
            <p class="progpage-p">
            The internship program at SCCR offers students the opportunity to explore the emerging field of stem cell–derived secretome and exosome research, which plays a significant role in regenerative medicine and tissue repair.</p>
<p class="progpage-p">
Through this program, interns will gain exposure to the scientific concepts, laboratory processes, and clinical potential of secretome-based therapies.</p>
<p class="progpage-p">
1. Introduction to Stem Cell Secretome</p>
<p class="progpage-p">
Interns will learn the basic concepts of stem cell secretome, including how stem cells release bioactive molecules that support cell communication, tissue regeneration, and healing processes.</p>
<p class="progpage-p">
2. Understanding Exosomes and Cellular Communication</p>
<p class="progpage-p">
Participants will explore the role of exosomes as nano-sized vesicles that carry proteins, RNA, and signaling molecules which help regulate gene expression and accelerate tissue recovery.</p>
<p class="progpage-p">
3. Laboratory Observation and Processing</p>
<p class="progpage-p">
Students will observe laboratory procedures related to secretome production, handling, and quality control within a regulated research environment.</p>
<p class="progpage-p">
4. Biological Components and Mechanisms</p>
<p class="progpage-p">
Interns will study the major biological components found in secretome, such as growth factors, cytokines, and regenerative molecules that contribute to anti-inflammatory responses and tissue repair.</p>
<p class="progpage-p">
5. Applications in Regenerative Medicine</p>
<p class="progpage-p">
Participants will explore the potential applications of secretome-based therapies in supporting treatments for various conditions, including tissue injury, inflammatory diseases, and skin regeneration.</p>
<p class="progpage-p">
6. Research Discussion and Scientific Reporting</p>
<p class="progpage-p">
Throughout the internship, students will engage in scientific discussions with researchers and prepare a short report or presentation summarizing their learning outcomes and observations.</p>
<p class="progpage-p">
This internship provides valuable insight into the rapidly advancing field of regenerative medicine and biotechnology, helping students connect academic knowledge with real-world biomedical innovation.
            </p>`,
  },
  {
    id: "pane-cluster-herbal",
    title: "Available Cluster - Herbal",
    html: `<h2 class="progpage-p" style="margin-top:0;">Available Cluster</h2>
            <h3 style="margin:0 0 8px 0;">Herbal</h3>
            <p class="progpage-p">Herbal content&hellip;</p>`,
  },
  {
    id: "pane-cluster-ctl",
    title: "Available Cluster - CTL",
    html: `<h2 class="progpage-p" style="margin-top:0;">Available Cluster</h2>
            <h3 style="margin:0 0 8px 0;">CTL</h3>
            <p class="progpage-p">The internship program at SCCR provides students with the opportunity to gain hands-on exposure to research and development in regenerative medicine and cellular therapy, particularly in the field of Cytotoxic T-Lymphocyte (CTL) therapy for cancer treatment.</p>
<p class="progpage-p">
During the program, interns will be involved in several key learning areas:</p>
<p class="progpage-p">
1. Introduction to Cellular Therapy</p>
<p class="progpage-p">
Interns will learn the fundamental concepts of cellular immunotherapy, including the role of Cytotoxic T-Lymphocytes (CTL) in recognizing and eliminating cancer cells.</p>
<p class="progpage-p">
2. Laboratory Observation and Exposure</p>
<p class="progpage-p">
Participants will observe laboratory workflows related to cell processing, including sample preparation, cell culture techniques, and quality control processes carried out in a regulated laboratory environment.</p>
<p class="progpage-p">
3. CTL Processing Overview</p>
<p class="progpage-p">
Interns will gain insight into how T-cells are collected from patients, activated, and developed into Cytotoxic T-Lymphocytes capable of targeting cancer cells.</p>
<p class="progpage-p">
4. Research and Scientific Discussion</p>
<p class="progpage-p">
Students will participate in research discussions, seminars, and mentoring sessions with researchers to understand the scientific and clinical potential of cellular therapies in modern medicine.</p>
<p class="progpage-p">
5. Scientific Reporting and Presentation</p>
<p class="progpage-p">
At the end of the program, interns will prepare a short report or presentation summarizing their learning experience, research observations, and insights gained during the internship.</p>
<p class="progpage-p">
This internship aims to bridge academic knowledge with real-world biomedical research, preparing students for careers in biotechnology, medicine, and life sciences.</p>`,
  },
  {
    id: "pane-cluster-aesthetic",
    title: "Available Cluster - Aesthetic",
    html: `<h2 class="progpage-p" style="margin-top:0;">Available Cluster</h2>
            <h3 style="margin:0 0 8px 0;">Aesthetic</h3>
            <p class="progpage-p">Aesthetic content&hellip;</p>`,
  },
  {
    id: "pane-cluster-bioinformatics",
    title: "Available Cluster - Bioinformatics",
    html: `<h2 class="progpage-p" style="margin-top:0;">Available Cluster</h2>
            <h3 style="margin:0 0 8px 0;">Bioinformatics</h3>
            <p class="progpage-p">Bioinformatics content&hellip;</p>`,
  },
  {
    id: "pane-pre-departure-meeting",
    title: "Pre Departure Meeting",
    html: `<p class="progpage-p">
              Before embarking on your international journey, all accepted interns will participate
              in a Pre-Departure Meeting hosted by SCCR Indonesia. This session is designed to equip
              you with important insights about your internship placement, cultural adaptation,
              professional expectations, and practical arrangements.
            </p>

            <p class="progpage-p">
              It is also an opportunity to connect with fellow interns and ask any final questions
              before departure. We strongly encourage active participation to ensure a smooth and
              confident transition into your international experience.
            </p>

            <p class="progpage-p">
              Meeting details will be communicated after confirmation of acceptance.
            </p>`,
  },
  {
    id: "pane-doc-visa",
    title: "List of Document - Visa",
    html: `<p class="progpage-p">
                This page contains information for exchange students (including under Erasmus) coming to our institution via partnership arrangement.
                Queries can be sent to the <a href="#">International Student Office</a>.
              </p>

              <p class="progpage-p">
                <a href="#">For information on work placements (including Erasmus traineeships), please contact the Faculties and Department.</a>
              </p>

              <div class="progpage-acc" data-acc-group>
                <!-- &#9989; default open: tambahkan atribut open -->
                <details class="progpage-acc-item" open>
                  <summary class="progpage-acc-btn">
                    Application to study
                    <span class="progpage-acc-icon" aria-hidden="true">
                      <svg viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 18l6-6-6-6"></path></svg>
                    </span>
                  </summary>
                  <div class="progpage-acc-panel">
                    <p class="progpage-p">Isi bebas HTML. Bisa tambah gambar:</p>
                    <div class="progpage-media">
                      <img src="/static/img/application.jpg" alt="Application info">
                    </div>
                    <ul>
                      <li>Requirement A</li>
                      <li>Requirement B</li>
                    </ul>
                  </div>
                </details>

                <details class="progpage-acc-item">
                  <summary class="progpage-acc-btn">
                    English language assessment
                    <span class="progpage-acc-icon" aria-hidden="true">
                      <svg viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 18l6-6-6-6"></path></svg>
                    </span>
                  </summary>
                  <div class="progpage-acc-panel">
                    Konten bahasa&hellip;
                  </div>
                </details>

                <details class="progpage-acc-item">
                  <summary class="progpage-acc-btn">
                    Structure of the year
                    <span class="progpage-acc-icon" aria-hidden="true">
                      <svg viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 18l6-6-6-6"></path></svg>
                    </span>
                  </summary>
                  <div class="progpage-acc-panel">
                    Konten struktur tahun&hellip;
                  </div>
                </details>

                <details class="progpage-acc-item">
                  <summary class="progpage-acc-btn">
                    Deadlines
                    <span class="progpage-acc-icon" aria-hidden="true">
                      <svg viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 18l6-6-6-6"></path></svg>
                    </span>
                  </summary>
                  <div class="progpage-acc-panel">
                    Konten deadline&hellip;
                  </div>
                </details>

                <details class="progpage-acc-item">
                  <summary class="progpage-acc-btn">
                    Available courses
                    <span class="progpage-acc-icon" aria-hidden="true">
                      <svg viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 18l6-6-6-6"></path></svg>
                    </span>
                  </summary>
                  <div class="progpage-acc-panel">
                    Konten course&hellip;
                  </div>
                </details>

                <details class="progpage-acc-item">
                  <summary class="progpage-acc-btn">
                    Visas
                    <span class="progpage-acc-icon" aria-hidden="true">
                      <svg viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 18l6-6-6-6"></path></svg>
                    </span>
                  </summary>
                  <div class="progpage-acc-panel">
                    Konten visa&hellip;
                  </div>
                </details>

                <details class="progpage-acc-item">
                  <summary class="progpage-acc-btn">
                    Insurance and Healthcare
                    <span class="progpage-acc-icon" aria-hidden="true">
                      <svg viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 18l6-6-6-6"></path></svg>
                    </span>
                  </summary>
                  <div class="progpage-acc-panel">
                    Konten insurance&hellip;
                  </div>
                </details>
              </div>`,
  },
  {
    id: "pane-doc-insurance",
    title: "List of Document - Insurance",
    html: `<h2 class="progpage-p" style="margin-top:0;">List of Document</h2>
            <h3 style="margin:0 0 8px 0;">Insurance</h3>

            <p class="progpage-p">
              All participants are required to have valid international health and travel insurance
              covering the entire period of their stay in Indonesia. The insurance should include
              coverage for medical treatment, hospitalization, accidents, and emergency situations.
              Participants may arrange their own insurance independently or request guidance from our
              team if needed.
            </p>

            <p class="progpage-p">
              This requirement ensures that participants receive adequate protection and support
              during their participation in the program.
            </p>`,
  },
];

export const internship: ProgramContent = {
  name: "Internship",
  nav: internshipNav,
  panes: internshipPanes,
};

const exchangeNav: NavEntry[] = [
  { type: "leaf", label: "Application to Student Exchange", paneId: "pane-application" },
  { type: "leaf", label: "Term of Exchange", paneId: "pane-term" },
  { type: "leaf", label: "List of Activities", paneId: "pane-activities" },
  { type: "leaf", label: "Pre Departure Meeting", paneId: "pane-departure" },
  { type: "leaf", label: "Visa", paneId: "pane-visa" },
  { type: "leaf", label: "Insurance", paneId: "pane-insurance" },
  { type: "leaf", label: "Contact", paneId: "pane-contact" },
];

const exchangePanes: PaneData[] = [
  {
    id: "pane-application",
    title: "Application to Student Exchange",
    html: `<div class="progpage-copy">
How to Apply 
Thank you for your interest in joining the International Internship Program at SCCR Indonesia. To ensure a smooth application process, please follow the steps below:
Prepare Your Documents
- Updated CV/Resume (in English)
- Motivation Letter
- Academic Transcript (latest)
- Copy of Passport (for international applicants)

Complete the Online Application Form
Fill out the application form carefully and upload all required documents.
Selection Process
Shortlisted candidates will be contacted for an online interview. Final acceptance will be announced via email.
Confirmation &amp; Onboarding
Accepted applicants will receive an official acceptance letter and further information regarding internship preparation and schedule.
We encourage all applicants to submit accurate and complete information to avoid delays in the review process.

                          <p class="progpage-p">
              Apply now through the following link:
              <a href="/international-program/" aria-label="Apply now (link placeholder)">Sign Up Here</a>
            </p>
              
              </div>`,
  },
  {
    id: "pane-term",
    title: "Term of Exchange",
    html: `<div class="progpage-copy">2. Our Student Exchange Program offers flexible mobility opportunities designed to accommodate different academic needs and schedules. Participants may choose between Short-Term Exchange and Long-Term Exchange programs, depending on their study plans and personal goals.

Short-Term Exchange
Short-term exchange programs typically last from 2 weeks to 3 months. These programs are designed to provide students with international exposure through activities such as short academic courses, cultural immersion programs, research visits, workshops, or summer/winter schools. This option is ideal for students who wish to gain international experience within a limited period without disrupting their regular academic schedule.

Long-Term Exchange
Long-term exchange programs usually last from one semester up to one academic year. During this period, students will study at a partner university abroad and may transfer academic credits to their home institution, subject to approval. This program allows students to fully experience the academic environment, cultural life, and global learning opportunities in another country.</div>`,
  },
  {
    id: "pane-activities",
    title: "List of Activities",
    html: `<div class="progpage-copy">Participants in the Short-Term Exchange Program may engage in a variety of academic and cultural activities, including:

    - Short Academic Courses &ndash; Attending intensive classes or specialized courses offered by partner institutions.\\
    - Workshops and Seminars &ndash; Participating in academic discussions, training sessions, and expert-led seminars.
    - Cultural Immersion Programs &ndash; Experiencing local culture through cultural visits, traditional activities, and community engagement.
    - University Visits &ndash; Visiting partner universities to explore academic environments and facilities.
    - Research Exposure &ndash; Joining short research discussions or collaborative academic activities.
    - Field Trips / Study Visits &ndash; Educational visits to institutions, industries, or cultural sites relevant to the program.
    - Networking Sessions &ndash; Building international connections with students, academics, and professionals.
    - Language and Cultural Classes &ndash; Learning basic local language and cultural practices.</div>`,
  },
  {
    id: "pane-departure",
    title: "Pre Departure Meeting",
    html: `<div class="progpage-copy">Before embarking on your international journey, all accepted interns will participate in a Pre-Departure Meeting hosted by SCCR Indonesia. This session is designed to equip you with important insights about your internship placement, cultural adaptation, professional expectations, and practical arrangements.
It is also an opportunity to connect with fellow interns and ask any final questions before departure. We strongly encourage active participation to ensure a smooth and confident transition into your international experience.
Meeting details will be communicated after confirmation of acceptance.</div>`,
  },
  {
    id: "pane-visa",
    title: "Visa",
    html: `<div class="progpage-copy">International participants are required to obtain the appropriate visa before entering Indonesia. The type of visa depends on the duration and purpose of the program. Participants joining short-term activities may use a Visit Visa, while those participating in longer academic programs may require a Limited Stay Visa (KITAS) or other relevant permits.
There are two options for visa application: participants may apply independently through the Indonesian immigration system, or request assistance from our team. For participants who require support, we can assist with the visa application process for certain types of visas and specific program durations, subject to applicable regulations.</div>`,
  },
  {
    id: "pane-insurance",
    title: "Insurance",
    html: `<div class="progpage-copy">All participants are required to have valid international health and travel insurance covering the entire period of their stay in Indonesia. The insurance should include coverage for medical treatment, hospitalization, accidents, and emergency situations. Participants may arrange their own insurance independently or request guidance from our team if needed. This requirement ensures that participants receive adequate protection and support during their participation in the program.</div>`,
  },
  {
    id: "pane-contact",
    title: "Contact",
    html: `<div class="progpage-copy">If you find any inconvenience during your application please do not hesitate to contact. </div>`,
  },
];

export const exchange: ProgramContent = {
  name: "International Students",
  nav: exchangeNav,
  panes: exchangePanes,
};

const researchNav: NavEntry[] = [
  { type: "leaf", label: "Application to Research", paneId: "pane-application" },
  { type: "leaf", label: "Scope of Research", paneId: "pane-scope" },
  { type: "leaf", label: "Pre Departure Meeting", paneId: "pane-departure" },
  { type: "leaf", label: "Visa", paneId: "pane-visa" },
  { type: "leaf", label: "Insurance", paneId: "pane-insurance" },
  { type: "leaf", label: "Contact", paneId: "pane-contact" },
];

const researchPanes: PaneData[] = [
  {
    id: "pane-application",
    title: "Application to Research",
    html: `<div class="progpage-copy">
                Thank you for your interest in joining the International Internship Program at SCCR Indonesia. To ensure a smooth application process, please follow the steps below:
Prepare Your Documents


Updated CV/Resume (in English)


Motivation Letter


Academic Transcript (latest)


Copy of Passport (for international applicants)


Complete the Online Application Form
 Fill out the application form carefully and upload all required documents.


Selection Process
 Shortlisted candidates will be contacted for an online interview. Final acceptance will be announced via email.


Confirmation &amp; Onboarding
 Accepted applicants will receive an official acceptance letter and further information regarding internship preparation and schedule.
We encourage all applicants to submit accurate and complete information to avoid delays in the review process.

                          <p class="progpage-p">
              Apply now through the following link:
              <a href="/international-program/" aria-label="Apply now (link placeholder)">Sign Up Here</a>
            </p>
                
              </div>`,
  },
  {
    id: "pane-scope",
    title: "Main Scope of Research",
    html: `<div class="progpage-copy">Stem Cell 
    Stem cell therapy is applied for neurological disorders such as stroke, Parkinson&rsquo;s disease, and ALS, as well as cardiac, renal, hepatic, and diabetic conditions. In addition, stem cells are used for bone, joint, and skin regeneration, and demonstrate potential in the management of autoimmune and degenerative diseases.

CTL (Cytotoxic T Lymphocyte)
    Cytotoxic T lymphocytes (CTLs) destroy virus-infected cells, cells infected by intracellular bacteria, and cancer cells. CTLs play a crucial role in host defense against infections and in immune surveillance of abnormal cells, including tumor cells.</div>`,
  },
  {
    id: "pane-departure",
    title: "Pre Departure Meeting",
    html: `<div class="progpage-copy">Before embarking on your international journey, all accepted interns will participate in a Pre-Departure Meeting hosted by SCCR Indonesia. This session is designed to equip you with important insights about your internship placement, cultural adaptation, professional expectations, and practical arrangements.
It is also an opportunity to connect with fellow interns and ask any final questions before departure. We strongly encourage active participation to ensure a smooth and confident transition into your international experience.
Meeting details will be communicated after confirmation of acceptance.</div>`,
  },
  {
    id: "pane-visa",
    title: "Visa",
    html: `<div class="progpage-copy">International participants are required to obtain the appropriate visa before entering Indonesia. The type of visa depends on the duration and purpose of the program. Participants joining short-term activities may use a Visit Visa, while those participating in longer academic programs may require a Limited Stay Visa (KITAS) or other relevant permits.

There are two options for visa application: participants may apply independently through the Indonesian immigration system, or request assistance from our team. For participants who require support, we can assist with the visa application process for certain types of visas and specific program durations, subject to applicable regulations.</div>`,
  },
  {
    id: "pane-insurance",
    title: "Insurance",
    html: `<div class="progpage-copy">All participants are required to have valid international health and travel insurance covering the entire period of their stay in Indonesia. The insurance should include coverage for medical treatment, hospitalization, accidents, and emergency situations. Participants may arrange their own insurance independently or request guidance from our team if needed. This requirement ensures that participants receive adequate protection and support during their participation in the program.</div>`,
  },
  {
    id: "pane-contact",
    title: "Contact",
    html: `<div class="progpage-copy">If you find any inconvenience during your application please do not hesitate to contact</div>`,
  },
];

export const research: ProgramContent = {
  name: "Research",
  nav: researchNav,
  panes: researchPanes,
};

