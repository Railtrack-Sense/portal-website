import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_headerFooterLayout/eula')({
    head: () => ({
        meta: [
            {
                title: 'Streamline EULA',
            }
        ]
    }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <div className="min-h-screen w-screen bg-[#0B0F1A] text-white py-12 px-4">
          <div className="max-w-3xl mx-auto mt-5 bg-[#0B0F1A] rounded-2xl shadow-xl p-8 border border-blue-900/30">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-100 to-blue-300 bg-clip-text text-transparent text-center">
                  End User License Agreement (EULA)
              </h1>
              <p className="mb-6 text-blue-100/80 text-center font-semibold">
                  IMPORTANT: PLEASE READ THIS LICENSE CAREFULLY BEFORE USING THIS
                  SOFTWARE.
              </p>
              <p className="mb-6 text-blue-100/80">
                  This End User License Agreement ("Agreement") is a legal agreement
                  between you ("User") and Streamline Addons ("Licensor"), for the use
                  of the software product titled "Streamline" ("Software").
              </p>
              <p className="mb-6 text-blue-100/80">
                  By installing, copying, or otherwise using the Software, you agree to
                  be bound by the terms of this Agreement.
              </p>
              <div className="space-y-6">
                  <section>
                      <h2 className="text-xl font-bold mb-2">1. LICENSE GRANT</h2>
                      <p>
                          Licensor hereby grants you a non-exclusive, non-transferable,
                          revocable license to use the Software for personal or commercial
                          use, subject to the terms of this Agreement.
                      </p>
                  </section>
                  <section>
                      <h2 className="text-xl font-bold mb-2">2. OWNERSHIP</h2>
                      <p>
                          The Software is licensed, not sold. Licensor retains all right,
                          title, and interest in and to the Software, including all
                          intellectual property rights.
                      </p>
                  </section>
                  <section>
                      <h2 className="text-xl font-bold mb-2">3. RESTRICTIONS</h2>
                      <ul className="list-disc list-inside ml-4">
                          <li>Reverse engineer, decompile, or disassemble the Software.</li>
                          <li>Modify, adapt, or create derivative works.</li>
                          <li>
                              Distribute, sublicense, rent, lease, or lend the Software.
                          </li>
                          <li>Use the Software for any unlawful purpose.</li>
                      </ul>
                  </section>
                  <section>
                      <h2 className="text-xl font-bold mb-2">4. TERMINATION</h2>
                      <p>
                          This Agreement is effective until terminated. It will terminate
                          automatically without notice if you fail to comply with any term.
                          Upon termination, you must cease all use and destroy all copies of
                          the Software.
                      </p>
                  </section>
                  <section>
                      <h2 className="text-xl font-bold mb-2">5. NO WARRANTIES</h2>
                      <p>
                          The Software is provided "as is" without warranty of any kind.
                          Licensor disclaims all warranties, express or implied, including
                          but not limited to merchantability or fitness for a particular
                          purpose.
                      </p>
                  </section>
                  <section>
                      <h2 className="text-xl font-bold mb-2">
                          6. LIMITATION OF LIABILITY
                      </h2>
                      <p>
                          Licensor shall not be liable for any damages arising out of or in
                          connection with the use or performance of the Software.
                      </p>
                  </section>
                  <section>
                      <h2 className="text-xl font-bold mb-2">7. GOVERNING LAW</h2>
                      <p>
                          This Agreement shall be governed by and construed in accordance
                          with the laws of the United Kingdom.
                      </p>
                  </section>
              </div>
              <div className="mt-8 text-blue-100/80">
                  <h2 className="text-xl font-bold mb-2">Contact</h2>
                  <p>
                      If you have any questions about this Agreement, contact:{" "}
                      <a
                          href="mailto:contact@streamlineaddons.com"
                          className="underline text-blue-300"
                      >
                          contact@streamlineaddons.com
                      </a>
                      .
                  </p>
              </div>
              <p className="mt-8 text-sm text-blue-100/60 text-center">
                  All rights reserved.
              </p>
          </div>
      </div>
  );
}
