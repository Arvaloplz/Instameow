import * as React from "react";

const Logo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={244.174}
    height={126.8}
    preserveAspectRatio="xMidYMid"
    viewBox="127.913 11.6 244.174 126.8"
    {...props}
  >
    <defs>
      <linearGradient
        id="b"
        x1={0}
        x2={1}
        y1={0.5}
        y2={0.5}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#911bf8" />
        <stop offset={1} stopColor="#ffb645" />
      </linearGradient>
      <filter id="a" width="300%" height="300%" x="-100%" y="-100%">
        <feFlood
          floodColor="rgba(69.33157783554795%,16.598156716954826%,85.26144519675648%,0)"
          result="flood"
        />
        <feComposite
          in="flood"
          in2="SourceAlpha"
          operator="in"
          result="shadow"
        />
        <feOffset dx={-3.5} dy={-3.5} in="SourceGraphic" result="offset-1" />
        <feOffset dx={3.5} dy={3.5} in="shadow" result="offset-2" />
        <feMerge>
          <feMergeNode in="offset-2" />
          <feMergeNode in="offset-1" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#a)">
      <path
        fill="url(#b)"
        d="M19.88-43.31q0 .18-.04.9l-.07 1.69q-.05.97-.11 2.03-.07 1.06-.1 2 0 .22-.06 1.36-.06 1.14-.16 2.89-.09 1.75-.21 3.97-.13 2.22-.25 4.56-.13 2.35-.25 4.68l-.24 4.28q-.11 1.95-.2 3.4-.1 1.46-.16 2.08-.09 1.22-.55 2.92-.45 1.71-1.42 3.53-.97 1.83-2.56 3.61-1.59 1.79-4.03 3.16-.16.09-.36.17-.2.08-.36.08-.41 0-.41-.34 0-.28.35-.66Q9.78 1.84 10.5.66q.72-1.19 1.16-2.63.43-1.44.65-3.28.22-1.84.38-4.34.19-2.22.4-5.54.19-2.81.44-7.06t.53-10.12q.03-.75.08-1.6.05-.84.08-1.61.03-.76.06-1.36.03-.59.03-.84 0-.34-.34-.34-.5 0-1.33.14-.83.14-1.78.5-.95.36-1.91.92-.95.56-1.73 1.42-.78.86-1.27 2-.48 1.14-.48 2.64 0 1.47.36 2.69t.87 2.22q.52 1 1.14 1.8.63.79 1.14 1.37.52.58.88.97t.36.58q0 .28-.31.47-.32.18-1.1.18-1.62 0-3.06-.72-1.44-.71-2.5-1.95-1.06-1.23-1.69-2.86-.62-1.62-.62-3.4 0-2.35.86-4.41t2.28-3.78Q5.5-39 7.34-40.36q1.85-1.36 3.79-2.31 1.93-.96 3.82-1.46t3.46-.5q.81 0 1.14.3.33.3.33 1.02Zm25.25 31.47q.18 0 .32.14t.14.39q0 .25-.09.47-.97 2.78-1.78 4.89t-1.64 3.51q-.83 1.41-1.7 2.13-.88.72-1.94.72-1.31 0-2.13-.61-.81-.61-1.28-1.58-.47-.97-.62-2.17-.16-1.21-.16-2.39 0-.85.03-1.68.03-.82.08-1.57.05-.75.08-1.35.03-.59.03-.97 0-.59-.2-.86-.21-.26-.46-.26-.28 0-.47.26-.18.27-.31.61-.15.38-.47 1.35-.31.97-.72 2.18-.4 1.22-.86 2.55-.45 1.33-.82 2.39-.5 1.38-.96 2.24-.45.86-.86 1.32-.4.47-.79.65-.39.17-.74.17-.31 0-.64-.13-.33-.12-.59-.4-.27-.29-.45-.77-.19-.48-.19-1.23-.06-1.6-.08-3.46-.02-1.86-.02-3.64 0-.84.02-1.62.02-.78.02-1.44 0-.91-.1-1.3-.09-.39-.25-.39-.34 0-.58.67-.23.68-.79 2.08-.19.47-.39.66-.21.19-.43.19-.18 0-.32-.14-.14-.15-.14-.49 0-.19.15-.67.16-.49.39-1.06.24-.58.47-1.19.24-.61.42-1.05.28-.72.67-1.48.4-.77.88-1.41.48-.64 1.06-1.06.58-.42 1.27-.42.9 0 1.61 1 .7 1 .76 3.03.03 1.62.05 3.08.02 1.45.05 2.53.03 1.08.04 1.72.02.64.05.64.06 0 .28-.57.22-.56.56-1.48.35-.92.79-2.09.43-1.18.92-2.38.48-1.2 1.01-2.31t1.07-1.95q.56-.91 1.2-1.38.64-.47 1.45-.47 1.13 0 1.63 1.33t.5 3.58q0 .56-.03 1.37-.04.82-.08 1.72-.05.91-.08 1.81-.03.91-.03 1.66 0 1.28.11 2.08t.29 1.23q.19.44.41.6.22.15.44.15.62 0 1.14-.56.51-.56.98-1.53t.94-2.2q.47-1.24 1.03-2.61.28-.78.85-.78Zm9.25 5.31-.66 1.69.44-.38q.65-.59 1.67-1.97 1.01-1.37 2.01-3.87.35-.78.88-.78.44 0 .44.5 0 .18-.1.46-.72 2.04-1.54 3.47-.83 1.44-1.71 2.44-.87 1-1.73 1.61-.86.61-1.61.92-.81 1.22-1.89 2.11-1.08.89-2.52.89-.93 0-1.59-.4-.66-.41-1.06-1-.41-.6-.6-1.3-.18-.7-.18-1.27 0-1.06.26-1.9.27-.85.64-1.44.38-.59.8-.89.42-.3.7-.3.38 0 .75.63.38.62.81 1.75.63 1.68 1.07 2.43.47-.06.9-.14.44-.07.88-.23.22-.44.22-.78 0-.56-.32-1.33-.31-.77-.79-1.62-.49-.86-1.08-1.75-.59-.9-1.17-1.69-.58-.8-1.08-1.47-.5-.67-.78-1.11-.22.72-.38 1.23-.15.52-.31.89-.22.63-.39.83-.17.21-.45.21-.5 0-.5-.6 0-.22.06-.4.25-.82.42-1.46.17-.64.3-1.08.12-.53.22-.9-.53-.66-.96-1.52-.42-.86-.42-2.2 0-.97.36-2.14.36-1.17.92-2.19.57-1.01 1.24-1.7t1.29-.69q.38 0 .68.24.29.23.5.6.2.38.31.86.11.49.11.96 0 1.06-.38 2.4-.03.13-.08.36-.04.24-.04.49 0 .9 1.19 2.53 1.18 1.62 2.96 3.65.85.97 1.22 2.05.38 1.08.38 2.49 0 .43-.1.95-.09.51-.21.86Zm16-4.35q-1 2.88-1.8 5-.8 2.13-1.61 3.55T65.22-.2q-.94.7-2.25.7-.75 0-1.59-.42-.85-.42-1.57-1.61-.72-1.19-1.18-3.33-.47-2.14-.47-5.58 0-.9.07-2.39.08-1.48.19-3.31t.27-3.88q.15-2.04.34-4.11-.15.04-.28.05-.12.02-.28.02-1.69.18-2.47.33-.78.14-.94.29-.15.13-.15.3 0 .17-.02.31-.01.14-.09.25-.08.11-.33.11-.16 0-.39-.08-.24-.08-.47-.25-.23-.17-.39-.43-.16-.27-.16-.65 0-.34.14-.71.14-.38.36-.72.22-.38.64-.91.43-.53 1.13-1.08.7-.54 1.73-1.01t2.44-.75q.16-1.32.33-2.33.17-1.02.36-1.81.19-.8.36-1.44.17-.64.36-1.17.37-1.22.93-1.86.57-.64 1.29-1.36.78-.78 1.32-1.05.55-.26.83-.3.28 0 .52.18.23.17.23.61 0 .25-.03.42-.03.17-.06.29-.1.35-.3 1.22-.2.88-.47 2.14-.26 1.27-.54 2.85-.29 1.58-.5 3.36 1.68.12 2.82.42t1.39.36q.54.19.72.34.19.16.35.53.12.25.29.41.18.16.35.28.17.13.29.28.13.16.13.44 0 .25-.13.48-.12.24-.28.3-.22.13-.81.24-.59.1-1.44.21-.84.11-1.92.22t-2.23.24q-.38 3.87-.74 7.47-.36 3.59-.36 6.4 0 1.44.17 2.63.18 1.18.52 2.04.34.86.83 1.33.48.47 1.11.47.56 0 1.03-.51.47-.52.94-1.43.47-.9.95-2.15t1.05-2.75q.28-.78.81-.78.5 0 .5.56 0 .09-.03.22-.03.12-.06.18Zm16.4 0q-.94 2.82-1.75 4.93t-1.62 3.53Q82.59-1 81.67-.28q-.92.72-2.04.72-.79 0-1.3-.5-.52-.5-.86-1.13-.34-.62-.52-1.2-.17-.58-.23-.77-.03-.06-.06-.18-.03-.13-.1-.13-.06 0-.11.09-.04.1-.11.19-.09.22-.5.81-.4.6-1.01 1.22-.61.63-1.39 1.11-.78.49-1.69.49-.72 0-1.39-.47-.67-.47-1.17-1.27-.5-.79-.8-1.89-.3-1.09-.3-2.34 0-2.72.86-5.11t2.8-4.8q.94-1.15 1.98-2.06 1.05-.91 2.05-1.52 1-.61 1.92-.92.93-.31 1.58-.31.44 0 .88.16.43.15.78.53.34.37.54.98.21.61.21 1.49 0 .93-.3 2.03-.3 1.09-.87 2.04-.58.96-1.43 1.58-.84.63-1.9.63-.66 0-.66-.5 0-.35.17-1.13.18-.78.18-1.5 0-.28-.04-.67-.03-.39-.15-.77-.13-.37-.35-.62-.21-.25-.59-.25-.84 0-1.47.78-.62.78-1.05 1.91-.42 1.12-.64 2.34-.21 1.22-.21 2.09 0 1.19.18 1.99.19.8.5 1.28.32.48.72.69.41.2.85.2 1.03 0 1.84-.7.81-.71 1.41-1.56.59-.86.98-1.57.39-.7.64-.7.28 0 .38.66.18 1.4.4 2.31.22.9.44 1.42.22.52.45.72.24.2.49.2.47 0 .93-.54.47-.55.94-1.49t.97-2.19l1.06-2.65q.35-.78.82-.78.46 0 .46.56 0 .22-.06.4Zm28.69-.96q.44 0 .44.5 0 .18-.1.46-.72 2.1-1.36 3.85-.64 1.75-1.26 3.12-.38.85-.81 1.63-.44.78-1 1.39-.57.61-1.29.98-.71.38-1.65.38-.63 0-1.22-.17t-1.09-.63q-.5-.45-.85-1.2-.34-.75-.47-1.88-.06-.68-.09-1.43-.03-.75-.03-1.5 0-1.69.09-3.21.1-1.51.1-2.29 0-.63-.21-.91-.2-.28-.45-.28-.34 0-.52.26-.17.27-.29.61-.16.38-.47 1.3-.31.92-.71 2.08l-.82 2.42q-.44 1.27-.82 2.33-.46 1.37-.89 2.2-.42.83-.81 1.3-.39.47-.76.62-.38.16-.75.16-.32 0-.66-.12-.34-.13-.64-.41-.3-.28-.5-.77-.2-.48-.24-1.2-.03-.5-.03-1.02v-1.04q0-1.16.03-2.32.04-1.15.08-2.15.05-1 .08-1.81.03-.82.03-1.25 0-.63-.2-.91t-.45-.28q-.29 0-.49.25t-.33.59q-.15.38-.47 1.33-.31.95-.7 2.16-.39 1.2-.83 2.5-.43 1.29-.81 2.36-.5 1.4-.92 2.25-.42.84-.83 1.29-.41.46-.77.61-.35.16-.73.16-.31 0-.66-.13-.34-.12-.64-.42-.29-.3-.5-.78-.2-.48-.2-1.2-.03-.94-.03-1.72v-1.56q0-1.1.01-2.27.02-1.17.08-2.77.03-1.4.21-2.65.17-1.25.39-2.2.22-.96.42-1.58.2-.63.33-.78.22-.25.48-.52.27-.27.52-.27t.37.15q.13.14.28.14.19 0 .47-.18l.69-.42q.22-.12.44-.26t.47-.14q.34 0 .34.81 0 .25-.08 1.01-.08.77-.14 1.52-.09 1.34-.19 2.67-.09 1.33-.17 2.45-.08 1.13-.11 1.94t-.03 1.13q0 .5.06.5.03 0 .27-.61.23-.61.59-1.6.36-.98.81-2.18.46-1.21.96-2.41.5-1.2 1.01-2.28.52-1.08 1.02-1.77.62-.87 1.31-1.32.69-.46 1.35-.46 1.31 0 1.68 1.66.38 1.65.38 4.9 0 1.41-.06 2.91-.07 1.5-.07 2.97 0 .19.07.19.03 0 .25-.61.21-.61.57-1.6.36-.98.83-2.2.47-1.22.99-2.42.51-1.2 1.03-2.27.51-1.06 1.01-1.75.63-.84 1.32-1.31.68-.47 1.34-.47.56 0 .97.36.4.36.64 1 .23.64.34 1.5.11.86.11 1.89 0 .56-.05 1.38-.04.81-.09 1.72-.05.9-.08 1.86-.03.95-.03 1.73 0 1.22.11 2t.3 1.22q.19.44.44.59.25.16.56.16.56 0 1.01-.52.46-.51.91-1.42.45-.91.92-2.14.47-1.23 1.06-2.7.29-.78.88-.78Zm7.41-20.79q.09.19.09.41 0 .59-.75 1.25-.63.56-1.16 1.09-.53.54-.97.96-.43.42-.78.67-.34.25-.56.25-.16 0-.3-.06-.14-.07-.26-.28-.38-.72-.75-1.5-.38-.79-.67-1.47-.3-.69-.49-1.21-.19-.51-.19-.7 0-.34.32-.75.12-.19.57-.72l.97-1.12q.52-.6.97-1.1.46-.5.61-.65.38-.44.63-.44.28 0 .43.41.1.21.43.93.32.72.7 1.55.37.83.72 1.55l.44.93Zm4.15 20.79q.19 0 .33.14t.14.39q0 .22-.09.43-.72 2.07-1.33 3.75-.61 1.69-1.24 3-.9 1.97-1.73 3.02T121.25.28q-.25.06-.56.13-.31.06-.66.06-.78 0-1.67-.31-.89-.32-1.66-1.19-.76-.88-1.26-2.45-.5-1.58-.5-4.11 0-2.25.15-4.33.16-2.08.47-4.21.47-.96 1.14-1.76.68-.8 1.36-1.38.69-.57 1.27-.89.58-.31.86-.31.12 0 .12.28 0 .25-.08.86-.07.61-.17 1.7-.09 1.1-.2 2.8-.11 1.7-.17 4.14 0 1.41.17 2.6.17 1.18.5 2.06.33.87.8 1.36.47.48 1.03.48.53 0 1-.51.47-.52.94-1.44.46-.92.96-2.19.5-1.26 1.07-2.73.31-.78.87-.78Zm16.75.96q-.94 2.82-1.75 4.93t-1.62 3.53q-.82 1.42-1.74 2.14-.92.72-2.04.72-.79 0-1.3-.5-.52-.5-.86-1.13-.34-.62-.52-1.2-.17-.58-.23-.77-.03-.06-.06-.18-.03-.13-.1-.13-.06 0-.11.09-.04.1-.11.19-.09.22-.5.81-.4.6-1.01 1.22-.61.63-1.39 1.11-.78.49-1.69.49-.72 0-1.39-.47-.67-.47-1.17-1.27-.5-.79-.8-1.89-.3-1.09-.3-2.34 0-2.72.86-5.11t2.8-4.8q.94-1.15 1.98-2.06 1.05-.91 2.05-1.52 1-.61 1.92-.92.93-.31 1.58-.31.44 0 .88.16.43.15.78.53.34.37.54.98.21.61.21 1.49 0 .93-.3 2.03-.3 1.09-.87 2.04-.58.96-1.43 1.58-.84.63-1.9.63-.66 0-.66-.5 0-.35.17-1.13.18-.78.18-1.5 0-.28-.04-.67-.03-.39-.15-.77-.13-.37-.35-.62-.21-.25-.59-.25-.84 0-1.47.78-.62.78-1.05 1.91-.42 1.12-.64 2.34-.21 1.22-.21 2.09 0 1.19.18 1.99.19.8.5 1.28.32.48.72.69.41.2.85.2 1.03 0 1.84-.7.81-.71 1.41-1.56.59-.86.98-1.57.39-.7.64-.7.28 0 .38.66.18 1.4.4 2.31.22.9.44 1.42.22.52.45.72.24.2.49.2.47 0 .93-.54.47-.55.94-1.49t.97-2.19l1.06-2.65q.35-.78.82-.78.46 0 .46.56 0 .22-.06.4Zm20.1 0q-1 2.79-1.8 4.9-.8 2.1-1.61 3.53-.81 1.42-1.77 2.14-.95.72-2.23.72-1.09 0-1.84-.64-.75-.65-1.19-1.63-.44-.98-.63-2.17-.18-1.19-.18-2.28v-1.57q0-.75.06-1.4-.69 2.78-1.39 4.65-.71 1.88-1.42 3-.72 1.13-1.52 1.61-.8.49-1.67.49-.66 0-1.33-.33t-1.23-1.27q-.57-.93-.93-2.64-.36-1.7-.36-4.48 0-.69.04-1.67.03-.99.12-2.06.09-1.08.23-2.13.15-1.05.36-1.89.1-.38.25-.91.16-.53.32-.68.34-.32.57-.57.24-.25.4-.25.21 0 .35.18.15.17.3.17.1 0 .36-.16.27-.16.58-.34.31-.19.61-.35.3-.15.42-.15.38 0 .38.68 0 .19-.04.44-.03.25-.09.6-.28 2-.39 3.86-.11 1.85-.11 3.98 0 1.19.03 2.16.03.96.14 1.67.11.7.36 1.09.25.39.69.39.62 0 1.16-.83.53-.82.98-2.14.45-1.31.86-2.9.41-1.6.78-3.11.38-1.52.77-2.8.39-1.28.79-1.94.41-.62 1.08-1.03.67-.4 1.27-.4.68 0 .98.51.3.52.3 1.99 0 1.06-.06 2-.07.93-.13 1.93-.06 1-.12 2.14-.07 1.14-.07 2.55 0 1.28.11 2.08t.3 1.23q.19.44.41.6.21.15.43.15.53 0 1-.47.47-.46.96-1.35.48-.9 1-2.18.51-1.28 1.14-2.9.15-.38.37-.58.22-.2.47-.2.19 0 .33.14t.14.39q0 .22-.09.43Z"
        transform="translate(168.523 99.315)"
      />
    </g>
  </svg>
);

export default Logo;
