import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

export interface IconProps {
  fill?: string;
}

export const ArrowRight: React.FC<IconProps> = ({ fill = 'currentColor' }) => (
  <Svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.7422 4.35667C10.506 4.60942 10.5068 5.01831 10.744 5.26997L14.5934 9.35414H3.93938L3.85714 9.36003C3.56133 9.40279 3.33333 9.673 3.33333 9.99994C3.33333 10.3566 3.60467 10.6457 3.93938 10.6457H14.5921L10.744 14.7298L10.6852 14.8021C10.5086 15.0545 10.5275 15.4134 10.7422 15.6431C10.9784 15.8958 11.3621 15.8967 11.5993 15.645L16.4739 10.4721C16.5873 10.3593 16.6601 10.2006 16.6661 10.0238C16.6722 9.85009 16.6129 9.67421 16.4881 9.5418L11.5993 4.3547L11.5312 4.29233C11.2935 4.10529 10.9569 4.1269 10.7422 4.35667Z"
      fill={fill}
    />
  </Svg>
);

export const IconGoogle: React.FC<IconProps> = () => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
      fill="#FFC107"
    />
    <Path
      d="M3.15302 7.3455L6.43851 9.755C7.32751 7.554 9.48052 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15901 2 4.82801 4.1685 3.15302 7.3455Z"
      fill="#FF3D00"
    />
    <Path
      d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.6055 17.5455 13.3575 18 12 18C9.39897 18 7.19047 16.3415 6.35847 14.027L3.09747 16.5395C4.75247 19.778 8.11347 22 12 22Z"
      fill="#4CAF50"
    />
    <Path
      d="M21.8055 10.0415H21V10H12V14H17.6515C17.2555 15.1185 16.536 16.083 15.608 16.7855C15.6085 16.785 15.609 16.785 15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
      fill="#1976D2"
    />
  </Svg>
);

export const IconFacebook: React.FC<IconProps> = () => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M22 16.19C22 19.83 19.83 22 16.19 22H15C14.45 22 14 21.55 14 21V15.23C14 14.96 14.22 14.73 14.49 14.73L16.25 14.7C16.39 14.69 16.51 14.59 16.54 14.45L16.89 12.54C16.92 12.36 16.78 12.19 16.59 12.19L14.46 12.22C14.18 12.22 13.96 12 13.95 11.73L13.91 9.28C13.91 9.12 14.04 8.98001 14.21 8.98001L16.61 8.94C16.78 8.94 16.91 8.81001 16.91 8.64001L16.87 6.23999C16.87 6.06999 16.74 5.94 16.57 5.94L13.87 5.98001C12.21 6.01001 10.89 7.37 10.92 9.03L10.97 11.78C10.98 12.06 10.76 12.28 10.48 12.29L9.28 12.31C9.11 12.31 8.98001 12.44 8.98001 12.61L9.01001 14.51C9.01001 14.68 9.14 14.81 9.31 14.81L10.51 14.79C10.79 14.79 11.01 15.01 11.02 15.28L11.11 20.98C11.12 21.54 10.67 22 10.11 22H7.81C4.17 22 2 19.83 2 16.18V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81V16.19Z"
      fill="#035B81"
    />
  </Svg>
);

export const IconSearch: React.FC<IconProps> = ({ fill }) => (
  <Svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M8.625 16.3125C4.3875 16.3125 0.9375 12.8625 0.9375 8.625C0.9375 4.3875 4.3875 0.9375 8.625 0.9375C12.8625 0.9375 16.3125 4.3875 16.3125 8.625C16.3125 12.8625 12.8625 16.3125 8.625 16.3125ZM8.625 2.0625C5.0025 2.0625 2.0625 5.01 2.0625 8.625C2.0625 12.24 5.0025 15.1875 8.625 15.1875C12.2475 15.1875 15.1875 12.24 15.1875 8.625C15.1875 5.01 12.2475 2.0625 8.625 2.0625Z"
      fill="#D9D9D9"
    />
    <Path
      d="M16.5 17.0625C16.3575 17.0625 16.215 17.01 16.1025 16.8975L14.6025 15.3975C14.385 15.18 14.385 14.82 14.6025 14.6025C14.82 14.385 15.18 14.385 15.3975 14.6025L16.8975 16.1025C17.115 16.32 17.115 16.68 16.8975 16.8975C16.785 17.01 16.6425 17.0625 16.5 17.0625Z"
      fill="#D9D9D9"
    />
  </Svg>
);

export const IconStar: React.FC<IconProps> = ({ fill }) => (
  <Svg
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
  >
    <G clipPath="url(#clip0_36_871)">
      <Path
        d="M6.15633 7.50012C6.1037 7.50032 6.05236 7.48392 6.00961 7.45324L4.00008 5.99637L1.99054 7.45324C1.94761 7.48438 1.89589 7.50106 1.84285 7.50087C1.78982 7.50067 1.73822 7.48362 1.69551 7.45217C1.65281 7.42072 1.62121 7.3765 1.60529 7.32591C1.58937 7.27532 1.58995 7.22098 1.60695 7.17074L2.3907 4.84934L0.359451 3.45637C0.315452 3.42623 0.282245 3.38281 0.26468 3.33245C0.247116 3.2821 0.246115 3.22744 0.261823 3.17648C0.277532 3.12551 0.309126 3.08091 0.351991 3.04918C0.394856 3.01745 0.446745 3.00026 0.500076 3.00012H3.00601L3.76226 0.672773C3.77855 0.622526 3.81034 0.578731 3.85307 0.54767C3.89579 0.516609 3.94725 0.499878 4.00008 0.499878C4.0529 0.499878 4.10436 0.516609 4.14709 0.54767C4.18981 0.578731 4.2216 0.622526 4.23789 0.672773L4.99414 3.0009H7.50008C7.55347 3.00087 7.60548 3.01794 7.64847 3.04961C7.69146 3.08128 7.72318 3.12588 7.73899 3.17689C7.7548 3.22789 7.75386 3.28262 7.73632 3.33305C7.71877 3.38348 7.68553 3.42697 7.64148 3.45715L5.60945 4.84934L6.39273 7.17012C6.40542 7.20769 6.40899 7.24774 6.40315 7.28697C6.3973 7.3262 6.38221 7.36347 6.35911 7.39571C6.33601 7.42795 6.30558 7.45423 6.27032 7.47239C6.23506 7.49054 6.19598 7.50005 6.15633 7.50012Z"
        fill="#FFAD30"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_36_871">
        <Rect width="8" height="8" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
