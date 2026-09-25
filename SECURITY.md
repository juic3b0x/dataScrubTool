# Security Policy

## Supported Versions

Security updates are provided for the current stable release of `dataScrubTool`.

| Version | Supported          |
| ------- | ------------------ |
| 0.3.x   | :white_check_mark: |
| 0.2.x   | :x:                |
| 0.1.x   | :x:                |
| < 0.1   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability in `dataScrubTool`, please report it
responsibly rather than opening a public GitHub issue.

### How to Report

Please use GitHub's **Private Vulnerability Reporting** feature for this
repository when available.

If private vulnerability reporting is unavailable, contact the repository
maintainer privately through the contact information associated with the
GitHub account `juic3b0x`.

Please include as much of the following information as possible:

- A description of the vulnerability.
- The affected version or versions.
- Steps required to reproduce the issue.
- A proof of concept, if applicable.
- The potential security impact.
- Any suggested mitigation or fix.

Please do **not** include sensitive information, private keys, credentials,
personal information, or other secrets in the report.

### Response Timeline

Reports will be reviewed as soon as reasonably possible.

The maintainer will attempt to:

- Acknowledge receipt of a vulnerability report within **7 days**.
- Provide an initial assessment when sufficient information is available.
- Keep the reporter informed of significant changes in the status of the
  investigation.
- Coordinate disclosure and remediation when a vulnerability is confirmed.

These timelines are targets rather than guarantees.

### Vulnerability Handling

If a vulnerability is confirmed, the maintainer may:

1. Investigate and reproduce the issue.
2. Determine the affected versions and security impact.
3. Develop and test an appropriate fix.
4. Release the fix when practical.
5. Publish relevant security information after remediation.

If a report is determined not to be a security vulnerability, the reporter
will be informed when practical.

Reports may also be closed when they cannot be reproduced, do not affect the
security of the project, or require unsupported configurations or third-party
software outside the project's control.

### Responsible Disclosure

Please allow reasonable time for a vulnerability to be investigated and
addressed before publicly disclosing details.

Security researchers who follow this policy and make a good-faith effort to
avoid privacy violations, data destruction, service disruption, and other
harmful activity are appreciated for helping improve the security of
`dataScrubTool`.

## Scope

This policy applies to security vulnerabilities in the `dataScrubTool`
application and its maintained source code.

Issues originating entirely from third-party dependencies should be reported
to the affected dependency's maintainers as well, while reports identifying
how the dependency affects `dataScrubTool` are still welcome.

## Out of Scope

The following are generally outside the scope of this security policy:

- Vulnerabilities in third-party services that are unrelated to
  `dataScrubTool`.
- Issues requiring physical access to a user's device.
- Social engineering or phishing attacks against project contributors.
- Denial-of-service testing against third-party infrastructure.
- Automated scanning that generates excessive traffic or disrupts services.
- Vulnerabilities in outdated or unsupported versions listed above.

Thank you for helping keep `dataScrubTool` secure.
