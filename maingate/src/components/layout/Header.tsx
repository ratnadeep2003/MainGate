// export function Header() {
//   return (
//     <header className="flex items-center justify-center py-6 border-b border-slate-100 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
//         {/* horizontal and vertical alligned, py-6 = padding y axis with 6, border-b =  border b makes border only at bottom with colour slate and 100 shade,  
//         bg-white/80 sets bg colour to white with 80% opacity
//         backdrop-blur-sm: small blur effect (4px) to whatever content passes underneath the background
//         */}
//       <div className="flex items-center gap-2 font-semibold text-lg tracking-tight">
//         {/* tracking-tight controls letter-spacing */}
//         <span className="text-xl">👹</span>
//         <span>Backdoor</span>
//       </div>
//     </header>
//   );
// }

export function Header() {
  return (
    <header className="flex items-center justify-center py-6 border-b border-slate-100 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="flex items-center gap-2 font-semibold text-lg tracking-tight">
        <span className="text-xl">👹</span>
        <span>Backdoor</span>
      </div>
    </header>
  );
}