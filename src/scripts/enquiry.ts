export function buildEnquiry({ device, model, issue, request }: { device: string; model: string; issue: string; request: string }) {
  const upgrade = request === 'Upgrade';
  return `Hi JTLB! I'd like to enquire about ${upgrade ? 'an upgrade' : 'a repair'}.\nDevice: ${device}${model.trim() ? ` (${model.trim()})` : ''}\n${upgrade ? 'Upgrade request' : 'Issue'}: ${issue.trim()}`;
}
