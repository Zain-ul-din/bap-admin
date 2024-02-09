import { IconProps } from '../../types/IconProps';

export default function ManageIcons({ active, color, ...rest }: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <g id="clarity:administrator-solid" clipPath="url(#clip0_1168_4716)">
        <path
          id="Vector"
          d="M9.78125 9.53334C11.9904 9.53334 13.7812 7.74248 13.7812 5.53334C13.7812 3.3242 11.9904 1.53334 9.78125 1.53334C7.57211 1.53334 5.78125 3.3242 5.78125 5.53334C5.78125 7.74248 7.57211 9.53334 9.78125 9.53334Z"
          fill={color || active ? 'white' : '#8A92A6'}
        />
        <path
          id="Vector_2"
          d="M10.9587 21.2133C10.7384 20.9954 10.5946 20.712 10.549 20.4055C10.5033 20.099 10.5582 19.786 10.7054 19.5133L11.0587 18.8467L10.332 18.6267C10.0357 18.5339 9.77773 18.347 9.59725 18.0944C9.41678 17.8417 9.32366 17.5371 9.33203 17.2267V15.86C9.33147 15.551 9.43034 15.25 9.61401 15.0015C9.79769 14.753 10.0564 14.5701 10.352 14.48L11.0787 14.26L10.732 13.5933C10.5891 13.3244 10.5348 13.0172 10.5767 12.7155C10.6186 12.4139 10.7546 12.1332 10.9654 11.9133C10.4525 11.8461 9.93595 11.8105 9.4187 11.8067C7.89091 11.7707 6.37401 12.0723 4.97619 12.69C3.57837 13.3076 2.33407 14.2262 1.33203 15.38V20.5467C1.33203 20.7235 1.40227 20.893 1.52729 21.0181C1.65232 21.1431 1.82189 21.2133 1.9987 21.2133H10.9587Z"
          fill={color || active ? 'white' : '#8A92A6'}
        />
        <path
          id="Vector_3"
          d="M22.4655 15.64L21.1322 15.24C21.0398 14.9107 20.9101 14.5931 20.7455 14.2933L21.4122 13.0533C21.438 13.0073 21.4474 12.9539 21.4389 12.9018C21.4304 12.8498 21.4046 12.8021 21.3655 12.7667L20.3989 11.7933C20.3616 11.7571 20.3142 11.7332 20.2629 11.7248C20.2116 11.7165 20.159 11.7241 20.1122 11.7467L18.8789 12.4133C18.5753 12.2484 18.2559 12.1144 17.9255 12.0133L17.5189 10.68C17.501 10.6308 17.4683 10.5884 17.4253 10.5586C17.3823 10.5287 17.3312 10.5129 17.2789 10.5133H15.8922C15.8402 10.5148 15.7899 10.5322 15.7482 10.5632C15.7065 10.5942 15.6753 10.6373 15.6589 10.6867L15.2589 12.02C14.9221 12.118 14.5977 12.2544 14.2922 12.4267L13.0855 11.76C13.0386 11.7351 12.9851 11.7255 12.9324 11.7327C12.8798 11.7399 12.8307 11.7634 12.7922 11.8L11.8122 12.76C11.7736 12.7972 11.7482 12.8459 11.7398 12.8989C11.7313 12.9518 11.7404 13.006 11.7655 13.0533L12.4322 14.2667C12.2536 14.5678 12.1083 14.8874 11.9989 15.22L10.6655 15.6267C10.6151 15.6412 10.5708 15.672 10.5395 15.7141C10.5082 15.7562 10.4916 15.8075 10.4922 15.86V17.2267C10.4916 17.2792 10.5082 17.3304 10.5395 17.3726C10.5708 17.4147 10.6151 17.4454 10.6655 17.46L11.9989 17.8667C12.0988 18.1932 12.2329 18.5082 12.3989 18.8067L11.7322 20.0733C11.7071 20.1207 11.698 20.1749 11.7064 20.2278C11.7149 20.2807 11.7403 20.3295 11.7789 20.3667L12.7722 21.3333C12.8107 21.3699 12.8598 21.3935 12.9124 21.4006C12.9651 21.4078 13.0186 21.3983 13.0655 21.3733L14.3122 20.7067C14.6089 20.8662 14.9218 20.9936 15.2455 21.0867L15.6455 22.4533C15.6623 22.5037 15.6945 22.5476 15.7376 22.5787C15.7807 22.6098 15.8324 22.6266 15.8855 22.6267H17.2522C17.3042 22.6252 17.3545 22.6078 17.3962 22.5768C17.4379 22.5458 17.4691 22.5027 17.4855 22.4533L17.8855 21.0867C18.2054 20.9948 18.514 20.8673 18.8055 20.7067L20.0655 21.3733C20.1125 21.3983 20.166 21.4078 20.2187 21.4006C20.2713 21.3935 20.3203 21.3699 20.3589 21.3333L21.3322 20.3667C21.3688 20.3281 21.3923 20.2791 21.3995 20.2264C21.4067 20.1738 21.3971 20.1202 21.3722 20.0733L20.7055 18.82C20.865 18.5279 20.9924 18.2195 21.0855 17.9L22.4189 17.4933C22.469 17.4772 22.513 17.4463 22.5451 17.4046C22.5773 17.363 22.596 17.3125 22.5989 17.26V15.88C22.6005 15.8317 22.589 15.7838 22.5655 15.7415C22.542 15.6992 22.5074 15.6641 22.4655 15.64ZM16.5789 18.7867C16.1382 18.788 15.707 18.6585 15.34 18.4146C14.9729 18.1708 14.6865 17.8235 14.517 17.4167C14.3474 17.01 14.3023 16.5621 14.3875 16.1297C14.4727 15.6973 14.6842 15.2999 14.9954 14.9879C15.3065 14.6758 15.7032 14.4631 16.1353 14.3766C16.5675 14.2902 17.0155 14.3339 17.4228 14.5022C17.83 14.6705 18.1782 14.9559 18.4231 15.3222C18.6681 15.6886 18.7989 16.1193 18.7989 16.56C18.7989 17.1494 18.5652 17.7147 18.1491 18.1321C17.7329 18.5495 17.1683 18.7849 16.5789 18.7867Z"
          fill={color || active ? 'white' : '#8A92A6'}
        />
      </g>
      <defs>
        <clipPath id="clip0_1168_4716">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}