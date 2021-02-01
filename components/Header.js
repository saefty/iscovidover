/** @jsxImportSource  theme-ui */

import Link from "next/link";
import Image from 'next/image'
export default function Header() {
  return (
    <nav sx={{ variant: 'layout.nav' }}>
      <div style={{position: "absolute", right: 0, cursor: 'pointer', height: '64px', width: '64px', margin: '10px'}}>
				<Link href="https://github.com/saefty/iscovidover">
					<Image src="/GitHub-Mark-Light-120px-plus.png" layout='fill'/>
        </Link>
      </div>
    </nav>
  );
}
