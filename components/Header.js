/** @jsxImportSource  theme-ui */

import Link from "next/link";
import Image from 'next/image'
export default function Header() {
  return (
    <nav sx={{ variant: 'layout.nav' }}>
      <div style={{position: "absolute", right: 0}}>
				<Link href="https://github.com/saefty/iscovidover">
					<Image src="/GitHub-Mark-120px-plus.png" width={64} height={64}/>
        </Link>
      </div>
    </nav>
  );
}
