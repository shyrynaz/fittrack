import * as React from 'react';
import { Dimensions, View } from 'react-native';
import Svg, {
  SvgProps,
  Path,
  G,
  Defs,
  LinearGradient,
  Stop
} from 'react-native-svg';
const originalWidth = 375;
const originalHeight = 406;
const aspectRatio = originalWidth / originalHeight;
const windowWidth = Dimensions.get('window').width;
const Burn = (props: SvgProps) => (
  <View style={{ width: windowWidth, aspectRatio }}>
    <Svg
      width='100%'
      height='100%'
      viewBox={`0 0 ${originalWidth} ${originalHeight}`}
      fill='none'
      {...props}
    >
      <Path
        d='M0 214.043C0 214.043 59.4333 90.4374 122.033 90.4374C184.633 90.4374 228.467 218.742 291.067 218.742C353.667 218.742 346.733 151.957 375 151.957V-40H0V214.043Z'
        fill='url(#paint0_linear_698_3796)'
      />
      <Path
        d='M164.567 172.119L147.367 177.618C147.367 177.618 142.133 197.813 143.767 201.413C145.4 205.012 154.6 207.744 158.967 205.578C163.333 203.412 178.133 189.249 178.133 189.249L164.567 172.119Z'
        fill='#FFEDE5'
      />
      <Path
        d='M180.333 152.623C180.333 152.623 169.333 165.087 164.566 172.119L176.833 191.281L189.666 179.751C189.666 179.751 187.533 147.858 180.333 152.623Z'
        fill='#543753'
      />
      <Path
        d='M162.6 172.752V191.948L168.133 177.685L164.567 172.119L162.6 172.752Z'
        fill='#E0855C'
      />
      <Path
        d='M161.767 161.621C163.267 161.988 163.733 160.955 164.967 162.921C166.2 164.887 168.8 172.586 168.1 173.752C167.4 174.918 159.633 182.417 159.067 182.417C158.5 182.417 157.067 180.317 157.367 179.584C157.367 179.584 155.533 180.684 154.333 180.484C154.333 180.484 151.667 181.884 150.6 181.617C149.533 181.35 143.3 172.152 144.767 169.72C146.233 167.287 147.167 168.553 148.033 167.587C148.9 166.62 150.367 165.021 152.133 165.187C153.9 165.354 154.7 162.621 157.267 163.021C159.833 163.421 158.433 160.788 161.767 161.621Z'
        fill='#FFEDE5'
      />
      <Path
        d='M157.333 179.917C157.2 179.917 157.1 179.851 157.033 179.751C156.933 179.584 157 179.384 157.167 179.317C157.2 179.317 160.2 177.718 161 176.551L161.067 176.485C161.1 176.485 162.8 174.952 163.367 173.785L160.467 167.22C160.4 167.054 160.467 166.854 160.633 166.787C160.8 166.72 161 166.787 161.067 166.954L164.067 173.785L164 173.919C163.5 175.185 161.767 176.751 161.5 176.985C160.567 178.284 157.567 179.851 157.433 179.917C157.433 179.884 157.4 179.917 157.333 179.917Z'
        fill='#472938'
      />
      <Path
        d='M154.3 180.817C154.166 180.817 154.066 180.75 154 180.617L150.3 173.086C150.233 172.919 150.3 172.719 150.466 172.652C150.633 172.586 150.833 172.652 150.9 172.819L154.6 180.351C154.666 180.517 154.6 180.717 154.433 180.784C154.4 180.817 154.366 180.817 154.3 180.817Z'
        fill='#472938'
      />
      <Path
        d='M159.3 178.751C159.166 178.751 159.066 178.684 159 178.551L155.533 171.086C155.466 170.919 155.533 170.719 155.7 170.653C155.866 170.586 156.066 170.653 156.133 170.819L159.6 178.284C159.666 178.451 159.6 178.651 159.433 178.718C159.4 178.751 159.333 178.751 159.3 178.751Z'
        fill='#472938'
      />
      <Path
        d='M159.033 182.75C158.5 182.75 157.9 181.917 157.667 181.584C157.5 181.35 157.133 180.751 157 180.151C156.367 180.451 155.267 180.917 154.367 180.85C153.833 181.117 151.567 182.217 150.5 181.95C149.9 181.817 148.8 180.351 148.2 179.484C148.1 179.317 148.133 179.118 148.267 179.018C148.4 178.918 148.633 178.951 148.733 179.084C149.767 180.584 150.467 181.217 150.633 181.284C151.333 181.45 153.133 180.684 154.133 180.184L154.233 180.151H154.333C155.433 180.317 157.133 179.284 157.167 179.284L158.033 178.784L157.667 179.717C157.633 179.817 157.633 180.151 157.967 180.784C158.367 181.517 158.833 181.984 159.033 182.084C159.867 181.617 165.3 176.485 167.233 174.419C165.433 174.852 163.7 174.085 163.633 174.052C163.467 173.985 163.4 173.785 163.467 173.619C163.533 173.452 163.733 173.385 163.9 173.452C163.933 173.452 166.1 174.419 167.933 173.452C168.167 173.319 168.333 173.385 168.4 173.485C168.5 173.552 168.567 173.719 168.5 173.885C168.267 174.485 159.833 182.75 159.033 182.75Z'
        fill='#472938'
      />
      <Path
        d='M218.033 132.595L234.733 143.092V164.854C234.733 164.854 217.366 200.979 218.033 214.01L178.266 221.441C178.266 221.441 168.733 183.183 180.333 152.59L198.066 140.126L218.033 132.595Z'
        fill='#AB8DA8'
      />
      <Path
        d='M174.6 190.715C174.433 190.715 174.267 190.582 174.267 190.382C174.133 181.15 174.867 172.552 176.5 164.754C176.533 164.587 176.7 164.454 176.9 164.487C177.067 164.521 177.2 164.687 177.167 164.887C175.567 172.619 174.8 181.184 174.967 190.348C174.933 190.548 174.8 190.715 174.6 190.715Z'
        fill='#472938'
      />
      <Path
        d='M234.733 164.887L221.7 162.921L229 177.685L234.733 164.887Z'
        fill='#543753'
      />
      <Path
        d='M213.7 119.231L218.033 132.595C213.4 134.394 209.233 137.194 205.833 140.826C200.133 146.891 197.933 152.623 194.5 152.623C191.067 152.623 198.1 140.16 198.1 140.16L197.2 128.496L213.7 119.231Z'
        fill='#FFEDE5'
      />
      <Path
        d='M197.633 134.428C197.633 134.428 205.267 133.294 209.167 122.33L197.167 128.496L197.633 134.428Z'
        fill='#E0855C'
      />
      <Path
        d='M191.967 91.9371C191.967 91.9371 184.6 127.862 188.433 130.328C192.267 132.795 207.4 130.662 213.033 120.664C218.667 110.666 211.6 91.9371 191.967 91.9371Z'
        fill='#FFEDE5'
      />
      <Path
        d='M189.6 104.701C189.6 104.701 182.667 113.666 183.367 114.532C184.067 115.398 187.867 116.632 187.867 116.632L189.6 104.701Z'
        fill='#FFEDE5'
      />
      <Path
        d='M210.4 115.232C210.4 115.232 206.933 113.499 209.167 105.934C209.167 105.934 204.667 97.9691 201.733 96.6694C198.8 95.3697 191.333 94.9697 191.333 94.9697C191.333 94.9697 189.833 84.4721 192.333 83.3724C194.833 82.2726 217.967 82.9058 222.333 91.0706C223.8 93.8367 222.867 95.503 222.867 95.503C222.867 95.503 225.333 98.7689 224.9 101.568C224.467 104.368 217.667 114.732 217.667 114.732L210.4 115.232Z'
        fill='#3B2645'
      />
      <Path
        d='M217.318 117.964C219.636 115.647 220.29 112.545 218.78 111.036C217.27 109.526 214.167 110.18 211.85 112.497C209.533 114.813 208.879 117.915 210.389 119.425C211.899 120.934 215.001 120.28 217.318 117.964Z'
        fill='#FFEDE5'
      />
      <Path
        d='M191.366 122.397C189.8 122.397 188.4 121.964 188.3 121.93C188.133 121.864 188.033 121.697 188.1 121.497C188.166 121.33 188.333 121.231 188.533 121.297C188.566 121.297 193.1 122.764 194.666 120.364C194.766 120.197 194.966 120.164 195.133 120.264C195.3 120.364 195.333 120.564 195.233 120.731C194.333 122.03 192.8 122.397 191.366 122.397Z'
        fill='#472938'
      />
      <Path
        d='M212.167 116.765C212.067 116.765 211.933 116.698 211.9 116.598C211.8 116.432 211.833 116.232 212 116.132L214.7 114.432C214.867 114.332 215.067 114.365 215.167 114.532C215.267 114.699 215.233 114.899 215.067 114.999L212.367 116.698C212.3 116.732 212.233 116.765 212.167 116.765Z'
        fill='#472938'
      />
      <Path
        d='M194.2 104.734C194.9 104.901 195.333 105.601 195.167 106.267L194.967 107.167C194.8 107.867 194.1 108.3 193.433 108.133C192.733 107.967 192.3 107.267 192.467 106.6L192.667 105.701C192.833 105.001 193.5 104.568 194.2 104.734Z'
        fill='#3B2645'
      />
      <Path
        d='M192.8 101.235C192.8 101.235 197.2 100.935 198.333 104.534C198.333 104.534 198.2 100.768 195.433 100.202C192.667 99.6353 191.767 101.068 192.8 101.235Z'
        fill='#3B2645'
      />
      <Path
        d='M223.967 136.327C209 133.794 218.933 165.354 218.933 165.354L241.333 172.119L249.633 146.625C236.6 140.893 223.967 136.327 223.967 136.327Z'
        fill='#AB8DA8'
      />
      <Path
        d='M244.833 210.91C244.833 210.91 236.933 213.676 236.167 214.91C235.4 216.143 236.133 220.508 236.133 220.508C235.3 221.841 234.633 223.241 234.167 224.741C233.5 226.973 235.167 226.307 237.133 228.573C239.1 230.839 240.7 230.273 241.833 231.306C242.967 232.339 245.267 232.006 246.167 232.439C247.067 232.872 248.767 234.338 249.8 234.272C250.833 234.205 253.267 230.673 255.267 226.24C257.267 221.808 256.9 218.209 257.8 212.877C258.7 207.544 279.733 173.252 277.267 163.954C276.033 159.322 262.633 152.39 249.6 146.625L241.3 172.119L253.167 175.718L244.833 210.91Z'
        fill='#FFEDE5'
      />
      <Path
        d='M256.733 176.985C256.7 176.985 256.667 176.985 256.633 176.985L253.067 176.018C252.9 175.985 252.767 175.785 252.833 175.618C252.867 175.452 253.067 175.352 253.233 175.385L256.8 176.351C256.967 176.385 257.1 176.585 257.033 176.751C257.033 176.885 256.9 176.985 256.733 176.985Z'
        fill='#472938'
      />
      <Path
        d='M283.833 296.391L296.8 289.893C296.8 289.893 296.5 287.36 299.1 284.494C301.7 281.628 299.767 274.996 297.333 273.93C294.9 272.863 293.7 273.596 291.6 270.164L272.833 278.295L283.833 296.391Z'
        fill='#FFEDE5'
      />
      <Path
        d='M297.3 273.93C299.733 274.996 301.633 281.628 299.067 284.494C296.5 287.36 296.767 289.893 296.767 289.893C307.867 291.392 318.3 307.655 320.267 309.488C322.233 311.321 330.2 310.022 330.433 308.655C330.667 307.289 313.367 261.666 311.767 260.666C310.167 259.666 291.567 270.164 291.567 270.164C293.667 273.596 294.867 272.863 297.3 273.93Z'
        fill='#AB8DA8'
      />
      <Path
        d='M330.433 308.655C330.633 307.289 313.367 261.666 311.767 260.666C311.367 260.399 309.9 260.866 307.967 261.699C312.567 270.83 324.3 302.29 327.2 310.088C328.933 309.755 330.333 309.222 330.433 308.655Z'
        fill='#E5E5E5'
      />
      <Path
        d='M183.867 248.202C183.867 248.202 213.6 326.185 226.133 327.218C238.667 328.251 289.533 294.092 289.533 294.092L280.067 275.129L237.1 289.293L226.4 240.337L183.867 248.202Z'
        fill='#3B2645'
      />
      <G opacity={0.5}>
        <Path
          opacity={0.5}
          d='M226.4 240.37L183.867 248.202C183.867 248.202 191.5 268.198 200.633 288.06L229.933 256.7L226.4 240.37Z'
          fill='#3B2645'
        />
      </G>
      <Path
        d='M105.733 360.677L100 373.974C100 373.974 101.867 375.74 101.733 379.573C101.6 383.405 107.333 387.271 109.9 386.504C112.467 385.738 112.9 384.405 116.733 385.705L125.867 367.375L105.733 360.677Z'
        fill='#FFEDE5'
      />
      <Path
        d='M103.733 365.309C103.733 365.309 111.6 373.541 121.9 375.274L125.833 367.375L105.733 360.643L103.733 365.309Z'
        fill='#E0855C'
      />
      <Path
        d='M218.033 214.043C218.033 214.043 235.433 234.205 226.367 250.202C217.3 266.198 163.267 295.591 159.6 304.623C155.933 313.654 153.867 324.085 146.367 336.616C138.867 349.146 126.9 371.241 126.9 371.241C126.9 371.241 108.8 370.541 102.9 362.71C102.9 362.71 132.1 288.826 139.067 279.262C146.033 269.697 178.9 229.173 178.9 229.173L178.233 221.475L218.033 214.043Z'
        fill='#3B2645'
      />
      <Path
        d='M118.667 368.608C118.633 368.608 118.633 368.608 118.6 368.608C118.533 368.575 118.467 368.475 118.533 368.375C118.867 367.675 151.033 299.157 157.467 291.159C159.833 288.193 166.8 281.228 174.833 273.163C188.6 259.366 205.7 242.203 208 236.938C211.6 228.74 209.2 217.209 209.167 217.076C209.133 216.976 209.2 216.909 209.3 216.876C209.4 216.842 209.467 216.909 209.5 217.009C209.533 217.109 211.933 228.773 208.3 237.071C205.967 242.37 188.833 259.566 175.067 273.396C167.033 281.461 160.1 288.393 157.733 291.359C151.333 299.324 119.167 367.809 118.867 368.508C118.8 368.575 118.733 368.608 118.667 368.608Z'
        fill='white'
      />
      <Path
        d='M114.1 367.575C114.067 367.575 114.067 367.575 114.033 367.575C113.967 367.542 113.9 367.442 113.967 367.342C114.3 366.642 147.667 296.058 151.533 290.126C153.5 287.093 165.233 274.696 176.567 262.732C187.767 250.901 199.367 238.638 201.6 235.372C206.067 228.84 205.133 218.242 205.133 218.142C205.133 218.042 205.2 217.975 205.3 217.975C205.4 217.975 205.467 218.042 205.467 218.142C205.467 218.242 206.433 228.973 201.867 235.605C199.6 238.904 188 251.168 176.8 263.032C165.467 274.996 153.767 287.393 151.8 290.393C147.967 296.325 114.567 366.875 114.233 367.575C114.233 367.542 114.167 367.575 114.1 367.575Z'
        fill='white'
      />
      <Path
        d='M109.867 386.538C107.333 387.271 101.567 383.438 101.7 379.606C101.833 375.773 99.9666 374.007 99.9666 374.007C90.4999 380.006 72.0666 374.274 69.3666 374.14C66.6666 374.007 61.3999 380.139 62.1333 381.306C62.8666 382.472 105.433 406.267 107.333 406.033C109.233 405.8 116.667 385.771 116.667 385.771C112.867 384.438 112.433 385.805 109.867 386.538Z'
        fill='#AB8DA8'
      />
      <Path
        d='M62.1665 381.305C62.8665 382.472 105.467 406.267 107.367 406.033C107.833 405.967 108.667 404.7 109.6 402.801C100.2 398.768 70.9332 382.239 63.7332 378.14C62.5999 379.473 61.8665 380.806 62.1665 381.305Z'
        fill='#E5E5E5'
      />
      <G opacity={0.5}>
        <Path
          opacity={0.5}
          d='M178.9 229.173C178.9 229.173 198.667 226.707 198.467 226.773C198.267 226.84 178.633 225.907 178.633 225.907L178.9 229.173Z'
          fill='#3B2645'
        />
      </G>
      <Defs>
        <LinearGradient
          id='paint0_linear_698_3796'
          x1={375}
          y1={218.742}
          x2={-121.545}
          y2={163.055}
          gradientUnits='userSpaceOnUse'
        >
          <Stop stopColor='#92A3FD' />
          <Stop offset={1} stopColor='#9DCEFF' />
        </LinearGradient>
      </Defs>
    </Svg>
  </View>
);
export default Burn;
