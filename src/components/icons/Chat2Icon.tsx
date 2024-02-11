/* eslint-disable @typescript-eslint/no-unused-vars */
import { IconProps } from '../../types/IconProps';

export default function Chat2Icon({ color, active, ...rest }: IconProps) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <g id="solar:chat-round-call-bold">
        <path
          id="Vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.8347 13C23.8347 18.9832 18.9846 23.8333 13.0013 23.8333C11.268 23.8333 9.62998 23.426 8.17832 22.7023C7.79484 22.5041 7.35217 22.4529 6.93357 22.5582L4.52207 23.2039C4.28338 23.2676 4.03213 23.2673 3.79355 23.2032C3.55497 23.1391 3.33745 23.0134 3.16282 22.8387C2.98819 22.6639 2.8626 22.4463 2.79865 22.2077C2.7347 21.9691 2.73464 21.7179 2.79848 21.4792L3.44307 19.0677C3.54791 18.6493 3.49628 18.207 3.2979 17.824C2.55217 16.3254 2.16533 14.6739 2.16798 13C2.16798 7.01671 7.01807 2.16663 13.0013 2.16663C18.9846 2.16663 23.8347 7.01671 23.8347 13ZM13.0013 7.85413C13.2168 7.85413 13.4235 7.93973 13.5758 8.0921C13.7282 8.24447 13.8138 8.45114 13.8138 8.66663V17.3333C13.8138 17.5488 13.7282 17.7554 13.5758 17.9078C13.4235 18.0602 13.2168 18.1458 13.0013 18.1458C12.7858 18.1458 12.5792 18.0602 12.4268 17.9078C12.2744 17.7554 12.1888 17.5488 12.1888 17.3333V8.66663C12.1888 8.45114 12.2744 8.24447 12.4268 8.0921C12.5792 7.93973 12.7858 7.85413 13.0013 7.85413ZM9.48048 10.8333C9.48048 10.6178 9.39488 10.4111 9.24251 10.2588C9.09013 10.1064 8.88347 10.0208 8.66798 10.0208C8.45249 10.0208 8.24583 10.1064 8.09346 10.2588C7.94108 10.4111 7.85548 10.6178 7.85548 10.8333V15.1666C7.85548 15.3821 7.94108 15.5888 8.09346 15.7411C8.24583 15.8935 8.45249 15.9791 8.66798 15.9791C8.88347 15.9791 9.09013 15.8935 9.24251 15.7411C9.39488 15.5888 9.48048 15.3821 9.48048 15.1666V10.8333ZM17.3346 10.0208C17.5501 10.0208 17.7568 10.1064 17.9092 10.2588C18.0615 10.4111 18.1471 10.6178 18.1471 10.8333V15.1666C18.1471 15.3821 18.0615 15.5888 17.9092 15.7411C17.7568 15.8935 17.5501 15.9791 17.3346 15.9791C17.1192 15.9791 16.9125 15.8935 16.7601 15.7411C16.6078 15.5888 16.5221 15.3821 16.5221 15.1666V10.8333C16.5221 10.6178 16.6078 10.4111 16.7601 10.2588C16.9125 10.1064 17.1192 10.0208 17.3346 10.0208Z"
          fill={color || '#1A3C53'}
        />
      </g>
    </svg>
  );
}