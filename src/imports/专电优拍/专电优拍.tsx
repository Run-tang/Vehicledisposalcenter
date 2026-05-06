import svgPaths from "./svg-l9qoju52bh";
import imgImage from "./5d9a8c8637ea165fdc1f57808dec85e631fbffcf.png";
import imgImage1 from "./cfd88311764ad0743c85e969e86ef853a8d9f938.png";
import imgImage2 from "./3fd48da8cf6369fb04b47cfacbe35bcde866f9a1.png";
import imgImage3 from "./7a884373bcff0338d5075672badbdae10ce6da4e.png";
import imgImage4 from "./d53328869a3184971bb8eb4353b11dfea87aa874.png";
import imgImage5 from "./9d3240edec62c48c5057e55ad88c0f337efde725.png";
import imgImage6 from "./a4d1d89e03d9be6f98e8cf98056981a1223a995b.png";
import imgImage7 from "./3312f6ff7326699b7149b356f4983e7c4f9d5930.png";
import imgImage8 from "./312273d6fa686d32fab1de87e1fe55d49f5111d4.png";
import imgImage9 from "./8ebdb03e1975026206054d532ed777579e2ac185.png";
import imgImage10 from "./ec20975fa1ac79a760a710214d17ed6df4ed3442.png";
import imgImage11 from "./2df1df4cabb7f6d9ba3082778e3489cd5e9262e5.png";
import imgImage12 from "./be518ced0c882021cd8b527c0bbd8c5cfd77fd68.png";
import imgContainer from "./a9b60c2b6714b3a213cb7aa2becbcac132e7f441.png";
import imgContainer1 from "./141746bf4af7b8b7730264187cc881b3eab765fc.png";
import imgContainer2 from "./ae1ba1a3a90b0e3486b3336714cbba1078278aa1.png";
import imgContainer3 from "./ba9ed15d8e480535fa0438b770c556339a99c340.png";
import imgContainer4 from "./bba0856cebcf6da43093f0b0ec9be50b26570686.png";
import imgContainer5 from "./fdc663d99ef337f275872a1e5abd4c4c07f5caa8.png";
import imgContainer6 from "./c938d9547308348fbdf368eb88e887d4134a9ada.png";
import imgContainer7 from "./fd6e4f9c77efc9c6046d25f5640757fd8f84a4d4.png";
import imgContainer8 from "./80f5b1ac1a9b8ee973e63c974d543d3ebf9c547b.png";
import imgContainer9 from "./d0756388f9a8f647179ad61c2b91806a8b362618.png";
import imgContainer10 from "./c3a7e6d03e77dd7efe68239394e6683c36d8bb4e.png";
import imgContainer11 from "./984317a54c9afe35a9fab39f4e272c9a9ded6352.png";

function Image() {
  return (
    <div className="absolute h-[24px] left-[8px] top-[16px] w-[48px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[56px] left-[64px] top-0 w-[100px]" data-name="Heading 3">
      <p className="absolute font-['Heiti_SC:Medium',sans-serif] leading-[56px] left-0 not-italic text-[#0d162a] text-[20px] top-px whitespace-nowrap">广联二手车</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[14px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_1391)" id="Icon">
          <path d={svgPaths.p1adbf380} fill="var(--fill-0, black)" fillOpacity="0.45" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1391">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ImageHome() {
  return (
    <div className="absolute left-[4px] size-[14px] top-[3.75px]" data-name="Image - home">
      <Icon />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute left-[-4px] rounded-[4px] size-[22px] top-0" data-name="Link">
      <ImageHome />
    </div>
  );
}

function ListItem() {
  return (
    <div className="absolute h-[22px] left-0 top-0 w-[34.117px]" data-name="List Item">
      <Link />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[22px] not-italic text-[14px] text-[rgba(0,0,0,0.45)] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">/</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="absolute h-[22px] left-[34.12px] top-0 w-[76.117px]" data-name="List Item">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.45)] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">库存管理/</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="absolute h-[22px] left-[110.23px] top-0 w-[84px]" data-name="List Item">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">库存车辆管理</p>
    </div>
  );
}

function NumberedList() {
  return (
    <div className="absolute h-[22px] left-[184px] top-[21px] w-[194.234px]" data-name="Numbered List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[56px] relative shrink-0 w-[398.234px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Image />
        <Heading />
        <NumberedList />
      </div>
    </div>
  );
}

function Image1() {
  return <div className="absolute left-px size-[30px] top-px" data-name="Image" />;
}

function Text() {
  return (
    <div className="h-[32px] relative rounded-[16px] shrink-0 w-full" data-name="Text">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Image1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[56px] items-start left-0 pt-[13.313px] top-0 w-[32px]" data-name="Container">
      <Text />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[56px] left-[40px] top-0 w-[70px]" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[56px] left-0 not-italic text-[14px] text-black top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">超级管理员</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[14px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1aec8f00} fill="var(--fill-0, black)" fillOpacity="0.88" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageDown() {
  return (
    <div className="absolute left-[118px] size-[14px] top-[20.75px]" data-name="Image - down">
      <Icon1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[56px] relative shrink-0 w-[132px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container3 />
        <Container4 />
        <ImageDown />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[56px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[56px] items-start pb-px px-[24px] relative shrink-0 w-[2560px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#f2f4f7] border-b border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function Image2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Image">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[123_0_0] h-[40px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[40px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">{`首页 `}</p>
      </div>
    </div>
  );
}

function MenuItem() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[40px] items-center left-[4px] overflow-clip pl-[24px] pr-[16px] rounded-[8px] top-[4px] w-[191px]" data-name="Menu Item">
      <Image2 />
      <Text1 />
    </div>
  );
}

function Image3() {
  return (
    <div className="absolute left-[24px] size-[18px] top-[11px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[40px] left-[52px] overflow-clip top-0 w-[105px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[40px] left-0 not-italic text-[#1956fe] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">库存管理</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[40px] left-[4px] overflow-clip rounded-[8px] top-[48px] w-[191px]" data-name="Container">
      <Image3 />
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="flex-[127_0_0] h-[40px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[40px] left-[4px] not-italic text-[#1956fe] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">库存车辆管理</p>
      </div>
    </div>
  );
}

function MenuItem1() {
  return (
    <div className="bg-[#e8f0ff] h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[48px] pr-[16px] relative size-full">
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex flex-col h-[48px] items-start left-0 pt-[4px] px-[4px] top-[92px] w-[199px]" data-name="List">
      <MenuItem1 />
    </div>
  );
}

function Image4() {
  return (
    <div className="absolute left-[24px] size-[18px] top-[11px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[40px] left-[52px] overflow-clip top-0 w-[105px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[40px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">检测管理</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[40px] left-[4px] overflow-clip rounded-[8px] top-[144.02px] w-[191px]" data-name="Container">
      <Image4 />
      <Text4 />
    </div>
  );
}

function Image5() {
  return (
    <div className="absolute left-[24px] size-[18px] top-[11px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[40px] left-[52px] overflow-clip top-0 w-[105px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[40px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">车辆场地管理</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[40px] left-[4px] overflow-clip rounded-[8px] top-[192.03px] w-[191px]" data-name="Container">
      <Image5 />
      <Text5 />
    </div>
  );
}

function Image6() {
  return (
    <div className="absolute left-[24px] size-[18px] top-[11px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute h-[40px] left-[52px] overflow-clip top-0 w-[105px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[40px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">拍卖管理</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[40px] left-[4px] overflow-clip rounded-[8px] top-[240.05px] w-[191px]" data-name="Container">
      <Image6 />
      <Text6 />
    </div>
  );
}

function Image7() {
  return (
    <div className="absolute left-[24px] size-[18px] top-[11px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute h-[40px] left-[52px] overflow-clip top-0 w-[105px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[40px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">订单管理</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[40px] left-[4px] overflow-clip rounded-[8px] top-[288.06px] w-[191px]" data-name="Container">
      <Image7 />
      <Text7 />
    </div>
  );
}

function Text8() {
  return (
    <div className="flex-[127_0_0] h-[40px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[40px] left-[4px] not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">拍卖订单</p>
      </div>
    </div>
  );
}

function MenuItem2() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[48px] pr-[16px] relative size-full">
          <Text8 />
        </div>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="flex-[127_0_0] h-[40px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[40px] left-[4px] not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">交易流水</p>
      </div>
    </div>
  );
}

function MenuItem3() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[48px] pr-[16px] relative size-full">
          <Text9 />
        </div>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex flex-col gap-[4px] h-[92px] items-start left-0 pt-[4px] px-[4px] top-[332.06px] w-[199px]" data-name="List">
      <MenuItem2 />
      <MenuItem3 />
    </div>
  );
}

function Image8() {
  return (
    <div className="absolute left-[24px] size-[18px] top-[11px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute h-[40px] left-[52px] overflow-clip top-0 w-[105px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[40px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">工单管理</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[40px] left-[4px] overflow-clip rounded-[8px] top-[428.08px] w-[191px]" data-name="Container">
      <Image8 />
      <Text10 />
    </div>
  );
}

function Text11() {
  return (
    <div className="flex-[127_0_0] h-[40px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[40px] left-[4px] not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">交付工单</p>
      </div>
    </div>
  );
}

function MenuItem4() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[48px] pr-[16px] relative size-full">
          <Text11 />
        </div>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="flex-[127_0_0] h-[40px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[40px] left-[4px] not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">申诉工单</p>
      </div>
    </div>
  );
}

function MenuItem5() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[48px] pr-[16px] relative size-full">
          <Text12 />
        </div>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex flex-col gap-[4px] h-[92px] items-start left-0 pt-[4px] px-[4px] top-[472.08px] w-[199px]" data-name="List">
      <MenuItem4 />
      <MenuItem5 />
    </div>
  );
}

function Image9() {
  return (
    <div className="absolute left-[24px] size-[18px] top-[11px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute h-[40px] left-[52px] overflow-clip top-0 w-[105px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[40px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">财务管理</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[40px] left-[4px] overflow-clip rounded-[8px] top-[568.09px] w-[191px]" data-name="Container">
      <Image9 />
      <Text13 />
    </div>
  );
}

function Text14() {
  return (
    <div className="flex-[127_0_0] h-[40px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[40px] left-[4px] not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">经营表</p>
      </div>
    </div>
  );
}

function MenuItem6() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[48px] pr-[16px] relative size-full">
          <Text14 />
        </div>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="flex-[127_0_0] h-[40px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[40px] left-[4px] not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">到账审核</p>
      </div>
    </div>
  );
}

function MenuItem7() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[48px] pr-[16px] relative size-full">
          <Text15 />
        </div>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="flex-[127_0_0] h-[40px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[40px] left-[4px] not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">提现审核</p>
      </div>
    </div>
  );
}

function MenuItem8() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[48px] pr-[16px] relative size-full">
          <Text16 />
        </div>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="flex-[127_0_0] h-[40px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[40px] left-[4px] not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">微信支付流水</p>
      </div>
    </div>
  );
}

function MenuItem9() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[48px] pr-[16px] relative size-full">
          <Text17 />
        </div>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="flex-[127_0_0] h-[40px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[40px] left-[4px] not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">收款账户配置</p>
      </div>
    </div>
  );
}

function MenuItem10() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[48px] pr-[16px] relative size-full">
          <Text18 />
        </div>
      </div>
    </div>
  );
}

function List3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.02)] content-stretch flex flex-col gap-[4px] h-[224px] items-start left-0 pt-[4px] px-[4px] top-[612.09px] w-[199px]" data-name="List">
      <MenuItem6 />
      <MenuItem7 />
      <MenuItem8 />
      <MenuItem9 />
      <MenuItem10 />
    </div>
  );
}

function Image10() {
  return (
    <div className="absolute left-[24px] size-[18px] top-[11px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute h-[40px] left-[52px] overflow-clip top-0 w-[105px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[40px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">车商管理</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[40px] left-[4px] overflow-clip rounded-[8px] top-[840.11px] w-[191px]" data-name="Container">
      <Image10 />
      <Text19 />
    </div>
  );
}

function Image11() {
  return (
    <div className="absolute left-[24px] size-[18px] top-[11px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute h-[40px] left-[52px] overflow-clip top-0 w-[105px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[40px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">运营管理</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[40px] left-[4px] overflow-clip rounded-[8px] top-[888.13px] w-[191px]" data-name="Container">
      <Image11 />
      <Text20 />
    </div>
  );
}

function Image12() {
  return (
    <div className="absolute left-[24px] size-[18px] top-[11px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage11} />
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute h-[40px] left-[52px] overflow-clip top-0 w-[105px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[40px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">系统管理</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[40px] left-[4px] overflow-clip rounded-[8px] top-[936.14px] w-[191px]" data-name="Container">
      <Image12 />
      <Text21 />
    </div>
  );
}

function Image13() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Image">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage12} />
    </div>
  );
}

function Text22() {
  return (
    <div className="flex-[123_0_0] h-[40px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[40px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">{`个人中心 `}</p>
      </div>
    </div>
  );
}

function MenuItem11() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[40px] items-center left-[4px] overflow-clip pl-[24px] pr-[16px] rounded-[8px] top-[984.16px] w-[191px]" data-name="Menu Item">
      <Image13 />
      <Text22 />
    </div>
  );
}

function Menu() {
  return (
    <div className="bg-[#f7f8f9] h-[1151px] relative shrink-0 w-full" data-name="Menu">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <MenuItem />
        <Container6 />
        <List />
        <Container7 />
        <Container8 />
        <Container9 />
        <Container10 />
        <List1 />
        <Container11 />
        <List2 />
        <Container12 />
        <List3 />
        <Container13 />
        <Container14 />
        <Container15 />
        <MenuItem11 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(5,5,5,0.06)] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1185px] items-start left-0 pt-[0.094px] top-[-0.09px] w-[200px]" data-name="Container">
      <Menu />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[10px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Icon">
          <path d={svgPaths.p242d6880} fill="var(--fill-0, #777C85)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageLeft() {
  return (
    <div className="h-[10px] relative shrink-0 w-full" data-name="Image - left">
      <Icon2 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch drop-shadow-[0px_4px_4px_rgba(0,0,0,0.1)] flex flex-col h-[24.5px] items-start left-[186px] pb-px pt-[7.75px] px-[7px] rounded-[14px] top-[260px] w-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e1e3e6] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <ImageLeft />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-[#f7f8f9] h-[1185px] left-0 top-0 w-[200px]" data-name="Sidebar">
      <Container5 />
      <Container16 />
    </div>
  );
}

function Container20() {
  return <div className="h-0 shrink-0 w-[2316px]" data-name="Container" />;
}

function Tab() {
  return (
    <div className="absolute h-[25.141px] left-0 top-[16px] w-[63.188px]" data-name="Tab">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[25.143px] left-0 not-italic text-[16px] text-[rgba(0,0,0,0.88)] top-0 tracking-[-0.3125px] whitespace-nowrap">全部(93)</p>
    </div>
  );
}

function Tab1() {
  return (
    <div className="absolute h-[25.141px] left-[95.19px] top-[16px] w-[76.531px]" data-name="Tab">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[25.143px] left-0 not-italic text-[16px] text-[rgba(0,0,0,0.88)] top-0 tracking-[-0.3125px] whitespace-nowrap">待入库(41)</p>
    </div>
  );
}

function Tab2() {
  return (
    <div className="absolute h-[25.141px] left-[203.72px] top-[16px] w-[78.375px]" data-name="Tab">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[25.143px] left-0 not-italic text-[#1956fe] text-[16px] top-0 tracking-[-0.3125px] whitespace-nowrap">已入库(47)</p>
    </div>
  );
}

function Tab3() {
  return (
    <div className="absolute h-[25.141px] left-[314.09px] top-[16px] w-[69.172px]" data-name="Tab">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[25.143px] left-0 not-italic text-[16px] text-[rgba(0,0,0,0.88)] top-0 tracking-[-0.3125px] whitespace-nowrap">已出库(5)</p>
    </div>
  );
}

function Container22() {
  return <div className="absolute bg-[#1956fe] h-[2px] left-[203.72px] top-[55.14px] w-[78.375px]" data-name="Container" />;
}

function TabList() {
  return (
    <div className="absolute h-[57.141px] left-0 overflow-clip top-0 w-[2316px]" data-name="Tab List">
      <Tab />
      <Tab1 />
      <Tab2 />
      <Tab3 />
      <Container22 />
    </div>
  );
}

function Container23() {
  return <div className="absolute h-0 left-0 top-[73.14px] w-[2316px]" data-name="Container" />;
}

function Container21() {
  return (
    <div className="h-[73.141px] relative shrink-0 w-[2316px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <TabList />
        <Container23 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col h-[57.141px] items-start justify-center left-0 pb-[-16px] px-[2px] rounded-tl-[10px] rounded-tr-[10px] top-0 w-[2320px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f0f0f0] border-b border-solid inset-0 pointer-events-none rounded-tl-[10px] rounded-tr-[10px]" />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Label() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Label">
      <p className="-translate-x-full absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[42px] not-italic text-[14px] text-[rgba(0,0,0,0.88)] text-right top-[5.5px] tracking-[-0.1504px] whitespace-nowrap">车源号</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-[12px] overflow-clip pl-[84.242px] top-0 w-[140.25px]" data-name="Container">
      <Label />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-white h-[32px] left-[152.25px] rounded-[6px] top-0 w-[420.75px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-[11px] py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.25)] tracking-[-0.1504px] whitespace-nowrap">请输入车源号</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[5.5px] tracking-[-0.1504px] whitespace-nowrap">车型名称</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-[597px] overflow-clip pl-[70.242px] top-0 w-[140.25px]" data-name="Container">
      <Label1 />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="absolute bg-white h-[32px] left-[737.25px] rounded-[6px] top-0 w-[420.75px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-[11px] py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.25)] tracking-[-0.1504px] whitespace-nowrap">请输入车型名称</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[5.5px] tracking-[-0.1504px] whitespace-nowrap">车辆VIN码</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-[1182px] overflow-clip pl-[61.117px] top-0 w-[140.25px]" data-name="Container">
      <Label2 />
    </div>
  );
}

function TextInput2() {
  return (
    <div className="absolute bg-white h-[32px] left-[1322.25px] rounded-[6px] top-0 w-[420.75px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-[11px] py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.25)] tracking-[-0.1504px] whitespace-nowrap">请输入车辆VIN码</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[5.5px] tracking-[-0.1504px] whitespace-nowrap">车牌号</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-[1767px] overflow-clip pl-[84.242px] top-0 w-[140.25px]" data-name="Container">
      <Label3 />
    </div>
  );
}

function TextInput3() {
  return (
    <div className="absolute bg-white h-[32px] left-[1907.25px] rounded-[6px] top-0 w-[420.75px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-[11px] py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.25)] tracking-[-0.1504px] whitespace-nowrap">请输入车牌号</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[5.5px] tracking-[-0.1504px] whitespace-nowrap">创建时间</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-0 overflow-clip pl-[70.242px] top-0 w-[140.25px]" data-name="Container">
      <Label4 />
    </div>
  );
}

function TextInput4() {
  return (
    <div className="absolute content-stretch flex h-[22px] items-center left-[11px] overflow-clip rounded-[6px] top-[4px] w-[173.375px]" data-name="Text Input">
      <p className="font-['Arial:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.25)] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        请输入创建时间
      </p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p12c4a680} fill="var(--fill-0, black)" fillOpacity="0.25" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageSwapRight() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Image - swap-right">
      <Icon3 />
    </div>
  );
}

function To() {
  return (
    <div className="absolute left-[192.38px] size-[16px] top-[7px]" data-name="to">
      <ImageSwapRight />
    </div>
  );
}

function TextInput5() {
  return (
    <div className="absolute content-stretch flex h-[22px] items-center left-[216.38px] overflow-clip rounded-[6px] top-[4px] w-[173.375px]" data-name="Text Input">
      <p className="font-['Arial:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.25)] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        请输入创建时间
      </p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="flex-[1_0_0] h-[14px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[5.36%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 12.5">
            <path d={svgPaths.p34c0e00} fill="var(--fill-0, black)" fillOpacity="0.25" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute content-stretch flex items-center left-[393.75px] size-[14px] top-[8px]" data-name="Text">
      <Icon4 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-white border border-[#d9d9d9] border-solid h-[32px] left-[140.25px] rounded-[6px] top-0 w-[420.75px]" data-name="Container">
      <TextInput4 />
      <To />
      <TextInput5 />
      <Text23 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[32px] left-[12px] top-[56px] w-[561px]" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Label5() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[5.5px] tracking-[-0.1504px] whitespace-nowrap">入库时间</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-0 overflow-clip pl-[70.242px] top-0 w-[140.25px]" data-name="Container">
      <Label5 />
    </div>
  );
}

function TextInput6() {
  return (
    <div className="absolute content-stretch flex h-[22px] items-center left-[11px] overflow-clip rounded-[6px] top-[4px] w-[173.375px]" data-name="Text Input">
      <p className="font-['Arial:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.25)] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        请输入入库时间
      </p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p12c4a680} fill="var(--fill-0, black)" fillOpacity="0.25" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageSwapRight1() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Image - swap-right">
      <Icon5 />
    </div>
  );
}

function To1() {
  return (
    <div className="absolute left-[192.38px] size-[16px] top-[7px]" data-name="to">
      <ImageSwapRight1 />
    </div>
  );
}

function TextInput7() {
  return (
    <div className="absolute content-stretch flex h-[22px] items-center left-[216.38px] overflow-clip rounded-[6px] top-[4px] w-[173.375px]" data-name="Text Input">
      <p className="font-['Arial:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.25)] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        请输入入库时间
      </p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="flex-[1_0_0] h-[14px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[5.36%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 12.5">
            <path d={svgPaths.p34c0e00} fill="var(--fill-0, black)" fillOpacity="0.25" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute content-stretch flex items-center left-[393.75px] size-[14px] top-[8px]" data-name="Text">
      <Icon6 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bg-white border border-[#d9d9d9] border-solid h-[32px] left-[140.25px] rounded-[6px] top-0 w-[420.75px]" data-name="Container">
      <TextInput6 />
      <To1 />
      <TextInput7 />
      <Text24 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[32px] left-[597px] top-[56px] w-[561px]" data-name="Container">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Label6() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[5.5px] tracking-[-0.1504px] whitespace-nowrap">更新时间</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-0 overflow-clip pl-[70.242px] top-0 w-[140.25px]" data-name="Container">
      <Label6 />
    </div>
  );
}

function TextInput8() {
  return (
    <div className="absolute content-stretch flex h-[22px] items-center left-[11px] overflow-clip rounded-[6px] top-[4px] w-[173.375px]" data-name="Text Input">
      <p className="font-['Arial:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.25)] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        请输入更新时间
      </p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p12c4a680} fill="var(--fill-0, black)" fillOpacity="0.25" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageSwapRight2() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Image - swap-right">
      <Icon7 />
    </div>
  );
}

function To2() {
  return (
    <div className="absolute left-[192.38px] size-[16px] top-[7px]" data-name="to">
      <ImageSwapRight2 />
    </div>
  );
}

function TextInput9() {
  return (
    <div className="absolute content-stretch flex h-[22px] items-center left-[216.38px] overflow-clip rounded-[6px] top-[4px] w-[173.375px]" data-name="Text Input">
      <p className="font-['Arial:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.25)] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        请输入更新时间
      </p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="flex-[1_0_0] h-[14px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[5.36%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 12.5">
            <path d={svgPaths.p34c0e00} fill="var(--fill-0, black)" fillOpacity="0.25" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute content-stretch flex items-center left-[393.75px] size-[14px] top-[8px]" data-name="Text">
      <Icon8 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute bg-white border border-[#d9d9d9] border-solid h-[32px] left-[140.25px] rounded-[6px] top-0 w-[420.75px]" data-name="Container">
      <TextInput8 />
      <To2 />
      <TextInput9 />
      <Text25 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[32px] left-[1182px] top-[56px] w-[561px]" data-name="Container">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Label7() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[5.5px] tracking-[-0.1504px] whitespace-nowrap">过户时间</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-0 overflow-clip pl-[70.242px] top-0 w-[140.25px]" data-name="Container">
      <Label7 />
    </div>
  );
}

function TextInput10() {
  return (
    <div className="absolute content-stretch flex h-[22px] items-center left-[11px] overflow-clip rounded-[6px] top-[4px] w-[173.375px]" data-name="Text Input">
      <p className="font-['Arial:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.25)] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        请输入过户时间
      </p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p12c4a680} fill="var(--fill-0, black)" fillOpacity="0.25" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageSwapRight3() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Image - swap-right">
      <Icon9 />
    </div>
  );
}

function To3() {
  return (
    <div className="absolute left-[192.38px] size-[16px] top-[7px]" data-name="to">
      <ImageSwapRight3 />
    </div>
  );
}

function TextInput11() {
  return (
    <div className="absolute content-stretch flex h-[22px] items-center left-[216.38px] overflow-clip rounded-[6px] top-[4px] w-[173.375px]" data-name="Text Input">
      <p className="font-['Arial:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.25)] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        请输入过户时间
      </p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="flex-[1_0_0] h-[14px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[5.36%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 12.5">
            <path d={svgPaths.p34c0e00} fill="var(--fill-0, black)" fillOpacity="0.25" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="absolute content-stretch flex items-center left-[393.75px] size-[14px] top-[8px]" data-name="Text">
      <Icon10 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute bg-white border border-[#d9d9d9] border-solid h-[32px] left-[140.25px] rounded-[6px] top-0 w-[420.75px]" data-name="Container">
      <TextInput10 />
      <To3 />
      <TextInput11 />
      <Text26 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute h-[32px] left-[1767px] top-[56px] w-[561px]" data-name="Container">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Label8() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[5.5px] tracking-[-0.1504px] whitespace-nowrap">所属门店</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-0 overflow-clip pl-[70.242px] top-0 w-[140.25px]" data-name="Container">
      <Label8 />
    </div>
  );
}

function Text27() {
  return (
    <div className="absolute h-[30px] left-[11px] overflow-clip top-0 w-[396.75px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.25)] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">请选择所属门店</p>
    </div>
  );
}

function Text28() {
  return <div className="absolute h-[30px] left-[11px] top-0 w-[396.75px]" data-name="Text" />;
}

function Container45() {
  return (
    <div className="absolute bg-white border border-[#d9d9d9] border-solid h-[32px] left-0 rounded-[6px] top-0 w-[420.75px]" data-name="Container">
      <Text27 />
      <Text28 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[21.43%_7.59%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1784 6.85714">
            <path d={svgPaths.p34902c00} fill="var(--fill-0, black)" fillOpacity="0.25" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="absolute content-stretch flex items-center left-[397.75px] size-[12px] top-[10px]" data-name="Text">
      <Icon11 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[32px] left-[140.25px] top-0 w-[420.75px]" data-name="Container">
      <Container45 />
      <Text29 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[32px] left-[12px] top-[112px] w-[561px]" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function Label9() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[5.5px] tracking-[-0.1504px] whitespace-nowrap">车辆所在地址</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-[597px] overflow-clip pl-[42.242px] top-[112px] w-[140.25px]" data-name="Container">
      <Label9 />
    </div>
  );
}

function TextInput12() {
  return (
    <div className="absolute bg-white h-[32px] left-[737.25px] rounded-[6px] top-[112px] w-[420.75px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-[11px] py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.25)] tracking-[-0.1504px] whitespace-nowrap">请输入车辆所在地址</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Label10() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[5.5px] tracking-[-0.1504px] whitespace-nowrap">车辆保管人</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-[1182px] overflow-clip pl-[56.242px] top-[112px] w-[140.25px]" data-name="Container">
      <Label10 />
    </div>
  );
}

function TextInput13() {
  return (
    <div className="absolute bg-white h-[32px] left-[1322.25px] rounded-[6px] top-[112px] w-[420.75px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-[11px] py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.25)] tracking-[-0.1504px] whitespace-nowrap">请输入车辆保管人</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Label11() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[5.5px] tracking-[-0.1504px] whitespace-nowrap">车辆状态</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-0 overflow-clip pl-[70.242px] top-0 w-[140.25px]" data-name="Container">
      <Label11 />
    </div>
  );
}

function Text30() {
  return (
    <div className="absolute h-[30px] left-[11px] overflow-clip top-0 w-[396.75px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.25)] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">请选择车辆状态</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute bg-white border border-[#d9d9d9] border-solid h-[32px] left-0 rounded-[6px] top-0 w-[420.75px]" data-name="Container">
      <Text30 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[21.43%_7.59%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1784 6.85714">
            <path d={svgPaths.p34902c00} fill="var(--fill-0, black)" fillOpacity="0.25" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="absolute content-stretch flex items-center left-[397.75px] size-[12px] top-[10px]" data-name="Text">
      <Icon12 />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute h-[32px] left-[140.25px] top-0 w-[420.75px]" data-name="Container">
      <Container51 />
      <Text31 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[32px] left-[1767px] top-[112px] w-[561px]" data-name="Container">
      <Container49 />
      <Container50 />
    </div>
  );
}

function Label12() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[5.5px] tracking-[-0.1504px] whitespace-nowrap">发拍状态</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-[12px] overflow-clip pl-[70.242px] top-[168px] w-[140.25px]" data-name="Container">
      <Label12 />
    </div>
  );
}

function SearchInput() {
  return <div className="absolute h-[24px] left-[12px] top-[3px] w-[4px]" data-name="Search Input" />;
}

function Text32() {
  return (
    <div className="absolute h-[22px] left-[11px] overflow-clip top-[4px] w-[396.75px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.25)] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">请选择发拍状态</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute bg-white border border-[#d9d9d9] border-solid h-[32px] left-[152.25px] rounded-[6px] top-[168px] w-[420.75px]" data-name="Container">
      <SearchInput />
      <Text32 />
    </div>
  );
}

function Label13() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[5.5px] tracking-[-0.1504px] whitespace-nowrap">车辆来源</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-0 overflow-clip pl-[70.242px] top-0 w-[140.25px]" data-name="Container">
      <Label13 />
    </div>
  );
}

function Text33() {
  return (
    <div className="absolute h-[30px] left-[11px] overflow-clip top-0 w-[396.75px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.25)] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">请选择车辆来源</p>
    </div>
  );
}

function Text34() {
  return <div className="absolute h-[30px] left-[11px] top-0 w-[396.75px]" data-name="Text" />;
}

function Container57() {
  return (
    <div className="absolute bg-white border border-[#d9d9d9] border-solid h-[32px] left-0 rounded-[6px] top-0 w-[420.75px]" data-name="Container">
      <Text33 />
      <Text34 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[21.43%_7.59%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1784 6.85714">
            <path d={svgPaths.p34902c00} fill="var(--fill-0, black)" fillOpacity="0.25" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="absolute content-stretch flex items-center left-[397.75px] size-[12px] top-[10px]" data-name="Text">
      <Icon13 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute h-[32px] left-[140.25px] top-0 w-[420.75px]" data-name="Container">
      <Container57 />
      <Text35 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[32px] left-[597px] top-[168px] w-[561px]" data-name="Container">
      <Container55 />
      <Container56 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-0 size-[14px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_1388)" id="Icon">
          <path d={svgPaths.pd76fb00} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1388">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ImageSearch() {
  return (
    <div className="absolute left-[15px] size-[14px] top-[7.75px]" data-name="Image - search">
      <Icon14 />
    </div>
  );
}

function Text36() {
  return (
    <div className="absolute h-[22px] left-[34px] top-[4px] w-[28px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[14px] not-italic text-[14px] text-center text-white top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">查询</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#185efe] border border-[rgba(0,0,0,0)] border-solid drop-shadow-[0px_2px_0px_rgba(25,105,255,0.1)] h-[32px] left-[919px] rounded-[4px] top-0 w-[79px]" data-name="Button">
      <ImageSearch />
      <Text36 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-0 size-[14px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_1394)" id="Icon">
          <path d={svgPaths.p2b9c2800} fill="var(--fill-0, black)" fillOpacity="0.88" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1394">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ImageUndo() {
  return (
    <div className="absolute left-[15px] size-[14px] top-[7.75px]" data-name="Image - undo">
      <Icon15 />
    </div>
  );
}

function Text37() {
  return (
    <div className="absolute h-[22px] left-[34px] top-[4px] w-[28px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[14px] not-italic text-[14px] text-[rgba(0,0,0,0.88)] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">重置</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-white border border-[#d9d9d9] border-solid drop-shadow-[0px_2px_0px_rgba(0,0,0,0.02)] h-[32px] left-[1008px] rounded-[4px] top-0 w-[79px]" data-name="Button">
      <ImageUndo />
      <Text37 />
    </div>
  );
}

function Text38() {
  return (
    <div className="absolute h-[22px] left-[15px] top-[4px] w-[28px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[14px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">收起</p>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p35195e00} fill="var(--fill-0, #1956FE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageDoubleRight() {
  return (
    <div className="absolute left-[43px] size-[14px] top-[7.75px]" data-name="Image - double-right">
      <div className="absolute flex items-center justify-center left-0 size-[14px] top-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Icon16 />
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[32px] left-[1087px] rounded-[4px] top-0 w-[59px]" data-name="Button">
      <Text38 />
      <ImageDoubleRight />
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute h-[32px] left-[1182px] top-[168px] w-[1146px]" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[200px] relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <TextInput />
      <Container27 />
      <TextInput1 />
      <Container28 />
      <TextInput2 />
      <Container29 />
      <TextInput3 />
      <Container30 />
      <Container33 />
      <Container36 />
      <Container39 />
      <Container42 />
      <Container46 />
      <TextInput12 />
      <Container47 />
      <TextInput13 />
      <Container48 />
      <Container52 />
      <Container53 />
      <Container54 />
      <Container58 />
    </div>
  );
}

function Form() {
  return (
    <div className="absolute content-stretch flex flex-col h-[224px] items-start left-[2px] pt-[12px] px-[-12px] top-[3px] w-[2316px]" data-name="Form">
      <Container25 />
    </div>
  );
}

function Text39() {
  return (
    <div className="absolute h-[22px] left-[15px] top-[4px] w-[31.789px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[16px] not-italic text-[14px] text-center text-white top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">新 建</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#185efe] border border-[rgba(0,0,0,0)] border-solid drop-shadow-[0px_2px_0px_rgba(25,105,255,0.1)] h-[32px] left-0 rounded-[4px] top-[-7.5px] w-[63.789px]" data-name="Button">
      <Text39 />
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[16.5px] left-[2px] top-[234.5px] w-[73.789px]" data-name="Link">
      <Button3 />
    </div>
  );
}

function Text40() {
  return (
    <div className="absolute h-[22px] left-[15px] top-[4px] w-[31.789px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[16px] not-italic text-[14px] text-center text-white top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">导 出</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#185efe] border border-[rgba(0,0,0,0)] border-solid drop-shadow-[0px_2px_0px_rgba(25,105,255,0.1)] h-[32px] left-[75.79px] rounded-[4px] top-[227px] w-[63.789px]" data-name="Button">
      <Text40 />
    </div>
  );
}

function Text41() {
  return <div className="absolute bg-white border border-[#d9d9d9] border-solid left-[8px] rounded-[4px] size-[16px] top-[11px]" data-name="Text" />;
}

function HeaderCell() {
  return (
    <div className="absolute bg-[#fafafa] border-[#f0f0f0] border-b border-solid h-[39px] left-0 rounded-tl-[8px] top-0 w-[32px]" data-name="Header Cell">
      <Text41 />
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute bg-[#fafafa] border-[#f0f0f0] border-b border-solid h-[39px] left-[32px] top-0 w-[80px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[40px] not-italic text-[#777] text-[14px] text-center top-[8.5px] tracking-[-0.1504px] whitespace-nowrap">序号</p>
    </div>
  );
}

function Text42() {
  return (
    <div className="absolute h-[22px] left-0 overflow-clip top-0 w-[118px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[#777] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">车源号</p>
    </div>
  );
}

function Icon17() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[29.3%_15.62%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25034 4.96846">
            <path d={svgPaths.p27ca7500} fill="var(--fill-0, black)" fillOpacity="0.29" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CaretUp() {
  return (
    <div className="absolute content-stretch flex items-center left-0 size-[12px] top-0" data-name="caret-up">
      <Icon17 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[29.3%_15.62%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25034 4.96846">
            <path d={svgPaths.p38f06a00} fill="var(--fill-0, black)" fillOpacity="0.29" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CaretDown() {
  return (
    <div className="absolute content-stretch flex items-center left-0 size-[12px] top-[8.41px]" data-name="caret-down">
      <Icon18 />
    </div>
  );
}

function Text43() {
  return (
    <div className="absolute h-[20.406px] left-[122px] top-[0.8px] w-[12px]" data-name="Text">
      <CaretUp />
      <CaretDown />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute h-[22px] left-[8px] top-[8px] w-[134px]" data-name="Container">
      <Text42 />
      <Text43 />
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute bg-[#fafafa] border-[#f0f0f0] border-b border-solid h-[39px] left-[112px] overflow-clip top-0 w-[150px]" data-name="Header Cell">
      <Container63 />
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute bg-[#fafafa] border-[#f0f0f0] border-b border-solid h-[39px] left-[262px] overflow-clip top-0 w-[80px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#777] text-[14px] top-[8.5px] tracking-[-0.1504px] whitespace-nowrap">封面</p>
    </div>
  );
}

function Text44() {
  return (
    <div className="absolute h-[22px] left-0 overflow-clip top-0 w-[208px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[#777] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">车型名称</p>
    </div>
  );
}

function Icon19() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[29.3%_15.62%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25034 4.96846">
            <path d={svgPaths.p27ca7500} fill="var(--fill-0, black)" fillOpacity="0.29" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CaretUp1() {
  return (
    <div className="absolute content-stretch flex items-center left-0 size-[12px] top-0" data-name="caret-up">
      <Icon19 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[29.3%_15.62%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25034 4.96846">
            <path d={svgPaths.p38f06a00} fill="var(--fill-0, black)" fillOpacity="0.29" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CaretDown1() {
  return (
    <div className="absolute content-stretch flex items-center left-0 size-[12px] top-[8.41px]" data-name="caret-down">
      <Icon20 />
    </div>
  );
}

function Text45() {
  return (
    <div className="absolute h-[20.406px] left-[212px] top-[0.8px] w-[12px]" data-name="Text">
      <CaretUp1 />
      <CaretDown1 />
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute h-[22px] left-[8px] top-[8px] w-[224px]" data-name="Container">
      <Text44 />
      <Text45 />
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute bg-[#fafafa] border-[#f0f0f0] border-b border-solid h-[39px] left-[342px] overflow-clip top-0 w-[240px]" data-name="Header Cell">
      <Container64 />
    </div>
  );
}

function Text46() {
  return (
    <div className="absolute h-[22px] left-0 overflow-clip top-0 w-[138px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[#777] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">车辆VIN码</p>
    </div>
  );
}

function Icon21() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[29.3%_15.62%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25034 4.96846">
            <path d={svgPaths.p27ca7500} fill="var(--fill-0, black)" fillOpacity="0.29" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CaretUp2() {
  return (
    <div className="absolute content-stretch flex items-center left-0 size-[12px] top-0" data-name="caret-up">
      <Icon21 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[29.3%_15.62%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25034 4.96846">
            <path d={svgPaths.p38f06a00} fill="var(--fill-0, black)" fillOpacity="0.29" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CaretDown2() {
  return (
    <div className="absolute content-stretch flex items-center left-0 size-[12px] top-[8.41px]" data-name="caret-down">
      <Icon22 />
    </div>
  );
}

function Text47() {
  return (
    <div className="absolute h-[20.406px] left-[142px] top-[0.8px] w-[12px]" data-name="Text">
      <CaretUp2 />
      <CaretDown2 />
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute h-[22px] left-[8px] top-[8px] w-[154px]" data-name="Container">
      <Text46 />
      <Text47 />
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute bg-[#fafafa] border-[#f0f0f0] border-b border-solid h-[39px] left-[582px] overflow-clip top-0 w-[170px]" data-name="Header Cell">
      <Container65 />
    </div>
  );
}

function Text48() {
  return (
    <div className="absolute h-[22px] left-0 overflow-clip top-0 w-[78px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[#777] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">车牌号</p>
    </div>
  );
}

function Icon23() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[29.3%_15.62%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25034 4.96846">
            <path d={svgPaths.p27ca7500} fill="var(--fill-0, black)" fillOpacity="0.29" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CaretUp3() {
  return (
    <div className="absolute content-stretch flex items-center left-0 size-[12px] top-0" data-name="caret-up">
      <Icon23 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[29.3%_15.62%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25034 4.96846">
            <path d={svgPaths.p38f06a00} fill="var(--fill-0, black)" fillOpacity="0.29" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CaretDown3() {
  return (
    <div className="absolute content-stretch flex items-center left-0 size-[12px] top-[8.41px]" data-name="caret-down">
      <Icon24 />
    </div>
  );
}

function Text49() {
  return (
    <div className="absolute h-[20.406px] left-[82px] top-[0.8px] w-[12px]" data-name="Text">
      <CaretUp3 />
      <CaretDown3 />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute h-[22px] left-[8px] top-[8px] w-[94px]" data-name="Container">
      <Text48 />
      <Text49 />
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="absolute bg-[#fafafa] border-[#f0f0f0] border-b border-solid h-[39px] left-[752px] overflow-clip top-0 w-[110px]" data-name="Header Cell">
      <Container66 />
    </div>
  );
}

function HeaderCell7() {
  return (
    <div className="absolute bg-[#fafafa] border-[#f0f0f0] border-b border-solid h-[39px] left-[862px] overflow-clip top-0 w-[100px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[50px] not-italic text-[#777] text-[14px] text-center top-[8.5px] tracking-[-0.1504px] whitespace-nowrap">发拍状态</p>
    </div>
  );
}

function HeaderCell8() {
  return (
    <div className="absolute bg-[#fafafa] border-[#f0f0f0] border-b border-solid h-[39px] left-[962px] overflow-clip top-0 w-[170px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[85px] not-italic text-[#777] text-[14px] text-center top-[8.5px] tracking-[-0.1504px] whitespace-nowrap">车辆来源</p>
    </div>
  );
}

function Text50() {
  return (
    <div className="absolute h-[22px] left-0 overflow-clip top-0 w-[118px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[#777] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">所属门店</p>
    </div>
  );
}

function Icon25() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[29.3%_15.62%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25034 4.96846">
            <path d={svgPaths.p27ca7500} fill="var(--fill-0, black)" fillOpacity="0.29" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CaretUp4() {
  return (
    <div className="absolute content-stretch flex items-center left-0 size-[12px] top-0" data-name="caret-up">
      <Icon25 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[29.3%_15.62%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25034 4.96846">
            <path d={svgPaths.p38f06a00} fill="var(--fill-0, black)" fillOpacity="0.29" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CaretDown4() {
  return (
    <div className="absolute content-stretch flex items-center left-0 size-[12px] top-[8.41px]" data-name="caret-down">
      <Icon26 />
    </div>
  );
}

function Text51() {
  return (
    <div className="absolute h-[20.406px] left-[122px] top-[0.8px] w-[12px]" data-name="Text">
      <CaretUp4 />
      <CaretDown4 />
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute h-[22px] left-[8px] top-[8px] w-[134px]" data-name="Container">
      <Text50 />
      <Text51 />
    </div>
  );
}

function HeaderCell9() {
  return (
    <div className="absolute bg-[#fafafa] border-[#f0f0f0] border-b border-solid h-[39px] left-[1132px] overflow-clip top-0 w-[150px]" data-name="Header Cell">
      <Container67 />
    </div>
  );
}

function Text52() {
  return (
    <div className="absolute h-[22px] left-0 overflow-clip top-0 w-[148px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[#777] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">车辆所在地址</p>
    </div>
  );
}

function Icon27() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[29.3%_15.62%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25034 4.96846">
            <path d={svgPaths.p27ca7500} fill="var(--fill-0, black)" fillOpacity="0.29" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CaretUp5() {
  return (
    <div className="absolute content-stretch flex items-center left-0 size-[12px] top-0" data-name="caret-up">
      <Icon27 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[29.3%_15.62%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25034 4.96846">
            <path d={svgPaths.p38f06a00} fill="var(--fill-0, black)" fillOpacity="0.29" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CaretDown5() {
  return (
    <div className="absolute content-stretch flex items-center left-0 size-[12px] top-[8.41px]" data-name="caret-down">
      <Icon28 />
    </div>
  );
}

function Text53() {
  return (
    <div className="absolute h-[20.406px] left-[152px] top-[0.8px] w-[12px]" data-name="Text">
      <CaretUp5 />
      <CaretDown5 />
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute h-[22px] left-[8px] top-[8px] w-[164px]" data-name="Container">
      <Text52 />
      <Text53 />
    </div>
  );
}

function HeaderCell10() {
  return (
    <div className="absolute bg-[#fafafa] border-[#f0f0f0] border-b border-solid h-[39px] left-[1282px] overflow-clip top-0 w-[180px]" data-name="Header Cell">
      <Container68 />
    </div>
  );
}

function Text54() {
  return (
    <div className="absolute h-[22px] left-0 overflow-clip top-0 w-[98px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[#777] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">车辆保管人</p>
    </div>
  );
}

function Icon29() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[29.3%_15.62%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25034 4.96846">
            <path d={svgPaths.p27ca7500} fill="var(--fill-0, black)" fillOpacity="0.29" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CaretUp6() {
  return (
    <div className="absolute content-stretch flex items-center left-0 size-[12px] top-0" data-name="caret-up">
      <Icon29 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[29.3%_15.62%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25034 4.96846">
            <path d={svgPaths.p38f06a00} fill="var(--fill-0, black)" fillOpacity="0.29" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CaretDown6() {
  return (
    <div className="absolute content-stretch flex items-center left-0 size-[12px] top-[8.41px]" data-name="caret-down">
      <Icon30 />
    </div>
  );
}

function Text55() {
  return (
    <div className="absolute h-[20.406px] left-[102px] top-[0.8px] w-[12px]" data-name="Text">
      <CaretUp6 />
      <CaretDown6 />
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute h-[22px] left-[8px] top-[8px] w-[114px]" data-name="Container">
      <Text54 />
      <Text55 />
    </div>
  );
}

function HeaderCell11() {
  return (
    <div className="absolute bg-[#fafafa] border-[#f0f0f0] border-b border-solid h-[39px] left-[1462px] overflow-clip top-0 w-[130px]" data-name="Header Cell">
      <Container69 />
    </div>
  );
}

function Text56() {
  return (
    <div className="absolute h-[22px] left-0 overflow-clip top-0 w-[138px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[69px] not-italic text-[#777] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">创建时间</p>
    </div>
  );
}

function Icon31() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[29.3%_15.62%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25034 4.96846">
            <path d={svgPaths.p27ca7500} fill="var(--fill-0, black)" fillOpacity="0.29" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CaretUp7() {
  return (
    <div className="absolute content-stretch flex items-center left-0 size-[12px] top-0" data-name="caret-up">
      <Icon31 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[29.3%_15.62%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25034 4.96846">
            <path d={svgPaths.p38f06a00} fill="var(--fill-0, black)" fillOpacity="0.29" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CaretDown7() {
  return (
    <div className="absolute content-stretch flex items-center left-0 size-[12px] top-[8.41px]" data-name="caret-down">
      <Icon32 />
    </div>
  );
}

function Text57() {
  return (
    <div className="absolute h-[20.406px] left-[142px] top-[0.8px] w-[12px]" data-name="Text">
      <CaretUp7 />
      <CaretDown7 />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute h-[22px] left-[8px] top-[8px] w-[154px]" data-name="Container">
      <Text56 />
      <Text57 />
    </div>
  );
}

function HeaderCell12() {
  return (
    <div className="absolute bg-[#fafafa] border-[#f0f0f0] border-b border-solid h-[39px] left-[1592px] overflow-clip top-0 w-[170px]" data-name="Header Cell">
      <Container70 />
    </div>
  );
}

function Text58() {
  return (
    <div className="absolute h-[22px] left-0 overflow-clip top-0 w-[138px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[69px] not-italic text-[#777] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">入库时间</p>
    </div>
  );
}

function Icon33() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[29.3%_15.62%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25034 4.96846">
            <path d={svgPaths.p27ca7500} fill="var(--fill-0, black)" fillOpacity="0.29" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CaretUp8() {
  return (
    <div className="absolute content-stretch flex items-center left-0 size-[12px] top-0" data-name="caret-up">
      <Icon33 />
    </div>
  );
}

function Icon34() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[29.3%_15.62%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25034 4.96846">
            <path d={svgPaths.p38f06a00} fill="var(--fill-0, black)" fillOpacity="0.29" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CaretDown8() {
  return (
    <div className="absolute content-stretch flex items-center left-0 size-[12px] top-[8.41px]" data-name="caret-down">
      <Icon34 />
    </div>
  );
}

function Text59() {
  return (
    <div className="absolute h-[20.406px] left-[142px] top-[0.8px] w-[12px]" data-name="Text">
      <CaretUp8 />
      <CaretDown8 />
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute h-[22px] left-[8px] top-[8px] w-[154px]" data-name="Container">
      <Text58 />
      <Text59 />
    </div>
  );
}

function HeaderCell13() {
  return (
    <div className="absolute bg-[#fafafa] border-[#f0f0f0] border-b border-solid h-[39px] left-[1762px] overflow-clip top-0 w-[170px]" data-name="Header Cell">
      <Container71 />
    </div>
  );
}

function Text60() {
  return (
    <div className="absolute h-[22px] left-0 overflow-clip top-0 w-[138px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[69px] not-italic text-[#777] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">过户时间</p>
    </div>
  );
}

function Icon35() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[29.3%_15.62%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25034 4.96846">
            <path d={svgPaths.p27ca7500} fill="var(--fill-0, black)" fillOpacity="0.29" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CaretUp9() {
  return (
    <div className="absolute content-stretch flex items-center left-0 size-[12px] top-0" data-name="caret-up">
      <Icon35 />
    </div>
  );
}

function Icon36() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[29.3%_15.62%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25034 4.96846">
            <path d={svgPaths.p38f06a00} fill="var(--fill-0, black)" fillOpacity="0.29" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CaretDown9() {
  return (
    <div className="absolute content-stretch flex items-center left-0 size-[12px] top-[8.41px]" data-name="caret-down">
      <Icon36 />
    </div>
  );
}

function Text61() {
  return (
    <div className="absolute h-[20.406px] left-[142px] top-[0.8px] w-[12px]" data-name="Text">
      <CaretUp9 />
      <CaretDown9 />
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute h-[22px] left-[8px] top-[8px] w-[154px]" data-name="Container">
      <Text60 />
      <Text61 />
    </div>
  );
}

function HeaderCell14() {
  return (
    <div className="absolute bg-[#fafafa] border-[#f0f0f0] border-b border-solid h-[39px] left-[1932px] overflow-clip top-0 w-[170px]" data-name="Header Cell">
      <Container72 />
    </div>
  );
}

function Text62() {
  return (
    <div className="absolute h-[22px] left-0 overflow-clip top-0 w-[138px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[69px] not-italic text-[#777] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">更新时间</p>
    </div>
  );
}

function Icon37() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[29.3%_15.62%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25034 4.96846">
            <path d={svgPaths.p27ca7500} fill="var(--fill-0, black)" fillOpacity="0.29" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CaretUp10() {
  return (
    <div className="absolute content-stretch flex items-center left-0 size-[12px] top-0" data-name="caret-up">
      <Icon37 />
    </div>
  );
}

function Icon38() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[29.3%_15.62%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25034 4.96846">
            <path d={svgPaths.p38f06a00} fill="var(--fill-0, black)" fillOpacity="0.29" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CaretDown10() {
  return (
    <div className="absolute content-stretch flex items-center left-0 size-[12px] top-[8.41px]" data-name="caret-down">
      <Icon38 />
    </div>
  );
}

function Text63() {
  return (
    <div className="absolute h-[20.406px] left-[142px] top-[0.8px] w-[12px]" data-name="Text">
      <CaretUp10 />
      <CaretDown10 />
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute h-[22px] left-[8px] top-[8px] w-[154px]" data-name="Container">
      <Text62 />
      <Text63 />
    </div>
  );
}

function HeaderCell15() {
  return (
    <div className="absolute bg-[#fafafa] border-[#f0f0f0] border-b border-solid h-[39px] left-[2102px] overflow-clip top-0 w-[170px]" data-name="Header Cell">
      <Container73 />
    </div>
  );
}

function Text65() {
  return (
    <div className="absolute h-[22px] left-0 overflow-clip top-0 w-[68px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[34px] not-italic text-[#777] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">车辆状态</p>
    </div>
  );
}

function Icon39() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[29.3%_15.62%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25034 4.96846">
            <path d={svgPaths.p27ca7500} fill="var(--fill-0, black)" fillOpacity="0.29" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CaretUp11() {
  return (
    <div className="absolute content-stretch flex items-center left-0 size-[12px] top-0" data-name="caret-up">
      <Icon39 />
    </div>
  );
}

function Icon40() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[29.3%_15.62%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25034 4.96846">
            <path d={svgPaths.p38f06a00} fill="var(--fill-0, black)" fillOpacity="0.29" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CaretDown11() {
  return (
    <div className="absolute content-stretch flex items-center left-0 size-[12px] top-[8.41px]" data-name="caret-down">
      <Icon40 />
    </div>
  );
}

function Text66() {
  return (
    <div className="absolute h-[20.406px] left-[72px] top-[0.8px] w-[12px]" data-name="Text">
      <CaretUp11 />
      <CaretDown11 />
    </div>
  );
}

function Text64() {
  return (
    <div className="absolute h-[22px] left-[8px] overflow-clip top-[8px] w-[84px]" data-name="Text">
      <Text65 />
      <Text66 />
    </div>
  );
}

function HeaderCell16() {
  return (
    <div className="absolute bg-[#fafafa] border-[#f0f0f0] border-b border-solid h-[39px] left-[2040px] top-0 w-[100px]" data-name="Header Cell">
      <Text64 />
    </div>
  );
}

function HeaderCell17() {
  return (
    <div className="absolute bg-[#fafafa] border-[#f0f0f0] border-b border-solid h-[39px] left-[2140px] top-0 w-[170px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[85px] not-italic text-[#777] text-[14px] text-center top-[8.5px] tracking-[-0.1504px] whitespace-nowrap">操作</p>
    </div>
  );
}

function HeaderCell18() {
  return <div className="absolute bg-[#fafafa] border-[#f0f0f0] border-b border-solid h-[39px] left-[2310px] rounded-tr-[8px] shadow-[0px_1px_0px_0px_#fafafa] top-0 w-[6px]" data-name="Header Cell" />;
}

function TableRow() {
  return (
    <div className="absolute h-[39px] left-0 top-0 w-[2548px]" data-name="Table Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
      <HeaderCell5 />
      <HeaderCell6 />
      <HeaderCell7 />
      <HeaderCell8 />
      <HeaderCell9 />
      <HeaderCell10 />
      <HeaderCell11 />
      <HeaderCell12 />
      <HeaderCell13 />
      <HeaderCell14 />
      <HeaderCell15 />
      <HeaderCell16 />
      <HeaderCell17 />
      <HeaderCell18 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[39px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Table">
      <TableRow />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start overflow-clip pr-[-232px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Container">
      <Table />
    </div>
  );
}

function Text67() {
  return <div className="absolute bg-white border border-[#d9d9d9] border-solid left-[8px] rounded-[4px] size-[16px] top-[30px]" data-name="Text" />;
}

function TableCell() {
  return (
    <div className="absolute h-[76px] left-[32px] top-0 w-[80px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[40.33px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">1</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[76px] left-[112px] overflow-clip top-0 w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">FP202604300001</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute left-[8px] rounded-[4px] size-[60px] top-[8px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgContainer} />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[76px] left-[262px] overflow-clip top-0 w-[80px]" data-name="Table Cell">
      <Container75 />
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[76px] left-[342px] overflow-clip top-0 w-[240px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">揽胜运动 2025款 400PS 藏锋特别版</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[76px] left-[582px] overflow-clip top-0 w-[170px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">SALWA2BU6LA713964</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[76px] left-[752px] overflow-clip top-0 w-[110px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">fdffff</p>
    </div>
  );
}

function Text68() {
  return (
    <div className="absolute bg-[#e9f2fc] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-[20px] rounded-[4px] top-[27.25px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-[7px] not-italic text-[#2a82e4] text-[12px] top-px whitespace-nowrap">待拍卖</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[76px] left-[862px] overflow-clip top-0 w-[100px]" data-name="Table Cell">
      <Text68 />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[76px] left-[962px] overflow-clip top-0 w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[76px] left-[1132px] overflow-clip top-0 w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">测试</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[76px] left-[1282px] overflow-clip top-0 w-[180px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[76px] left-[1462px] overflow-clip top-0 w-[130px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">崔彦峰</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[76px] left-[1592px] overflow-clip top-0 w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.58px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-04-30 09:18:44</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[76px] left-[1762px] overflow-clip top-0 w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.61px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-04-30 15:17:38</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[76px] left-[1932px] overflow-clip top-0 w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[76px] left-[2102px] overflow-clip top-0 w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.44px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-04-30 15:17:47</p>
    </div>
  );
}

function Text70() {
  return (
    <div className="bg-[#fff3e5] h-[22px] relative rounded-[4px] shrink-0 w-full" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#fc8b0a] text-[12px] top-[2px] whitespace-nowrap">待定价</p>
    </div>
  );
}

function Text69() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.5px] items-start left-[8px] overflow-clip pl-[12px] pr-[20px] pt-[0.5px] top-[26.75px] w-[84px]" data-name="Text">
      <Text70 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute bg-white h-[76px] left-[2040px] top-0 w-[100px]" data-name="Table Cell">
      <Text69 />
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">查看档案</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[16.5px] left-[13px] top-[29.5px] w-[72px]" data-name="Link">
      <Button5 />
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-[85px] rounded-[4px] top-[26px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">评估定价</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute bg-white h-[76px] left-[2140px] top-0 w-[170px]" data-name="Table Cell">
      <Link2 />
      <Button6 />
    </div>
  );
}

function Text71() {
  return <div className="absolute bg-white border border-[#d9d9d9] border-solid left-[8px] rounded-[4px] size-[16px] top-[30px]" data-name="Text" />;
}

function TableCell17() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-0 top-[76px] w-[32px]" data-name="Table Cell">
      <Text71 />
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[32px] top-[76px] w-[80px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[40.34px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[112px] overflow-clip top-[76px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">FP202604280015</p>
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute left-[8px] rounded-[4px] size-[60px] top-[8px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgContainer1} />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[262px] overflow-clip top-[76px] w-[80px]" data-name="Table Cell">
      <Container76 />
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[342px] overflow-clip top-[76px] w-[240px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">奔腾X40新能源 2019款 EV400 舒适型</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[582px] overflow-clip top-[76px] w-[170px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">44444444444444444</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[752px] overflow-clip top-[76px] w-[110px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">哈666666</p>
    </div>
  );
}

function Text72() {
  return (
    <div className="absolute bg-[#e9f2fc] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-[20px] rounded-[4px] top-[27.25px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-[7px] not-italic text-[#2a82e4] text-[12px] top-px whitespace-nowrap">待拍卖</p>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[862px] overflow-clip top-[76px] w-[100px]" data-name="Table Cell">
      <Text72 />
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[962px] overflow-clip top-[76px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[84.99px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">优车·番禺店</p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1132px] overflow-clip top-[76px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">测试</p>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1282px] overflow-clip top-[76px] w-[180px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1462px] overflow-clip top-[76px] w-[130px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">陆汉林</p>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1592px] overflow-clip top-[76px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[84.96px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-04-28 17:38:38</p>
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1762px] overflow-clip top-[76px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-04-28 17:41:57</p>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1932px] overflow-clip top-[76px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[2102px] overflow-clip top-[76px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.98px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-04-28 17:57:30</p>
    </div>
  );
}

function Text74() {
  return (
    <div className="absolute bg-[#fff3e5] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-0 rounded-[4px] top-[-2px] w-[76px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-[7px] not-italic text-[#fc8b0a] text-[12px] top-px whitespace-nowrap">待关联拍场</p>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Link">
      <Text74 />
    </div>
  );
}

function Text73() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.5px] items-start left-[8px] overflow-clip pt-[2.5px] top-[26.75px] w-[84px]" data-name="Text">
      <Link3 />
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2040px] top-[76px] w-[100px]" data-name="Table Cell">
      <Text73 />
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">查看档案</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[16.5px] left-[13px] top-[29.5px] w-[72px]" data-name="Link">
      <Button7 />
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">安排上拍</p>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute h-[16.5px] left-[85px] top-[29.5px] w-[72px]" data-name="Link">
      <Button8 />
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2140px] top-[76px] w-[170px]" data-name="Table Cell">
      <Link4 />
      <Link5 />
    </div>
  );
}

function Text75() {
  return <div className="absolute bg-white border border-[#d9d9d9] border-solid left-[8px] rounded-[4px] size-[16px] top-[30px]" data-name="Text" />;
}

function TableCell35() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-0 top-[153px] w-[32px]" data-name="Table Cell">
      <Text75 />
    </div>
  );
}

function TableCell36() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[32px] top-[153px] w-[80px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[40.18px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">3</p>
    </div>
  );
}

function TableCell37() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[112px] overflow-clip top-[153px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">FP202604280010</p>
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute left-[8px] rounded-[4px] size-[60px] top-[8px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgContainer2} />
    </div>
  );
}

function TableCell38() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[262px] overflow-clip top-[153px] w-[80px]" data-name="Table Cell">
      <Container77 />
    </div>
  );
}

function TableCell39() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[342px] overflow-clip top-[153px] w-[240px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">阿尔法·罗密欧4C 2014款 Spider Concept</p>
    </div>
  );
}

function TableCell40() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[582px] overflow-clip top-[153px] w-[170px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">44444444444444444</p>
    </div>
  );
}

function TableCell41() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[752px] overflow-clip top-[153px] w-[110px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">哈哈6666</p>
    </div>
  );
}

function Text76() {
  return (
    <div className="absolute bg-[#e9f2fc] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-[20px] rounded-[4px] top-[27.25px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-[7px] not-italic text-[#2a82e4] text-[12px] top-px whitespace-nowrap">待拍卖</p>
    </div>
  );
}

function TableCell42() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[862px] overflow-clip top-[153px] w-[100px]" data-name="Table Cell">
      <Text76 />
    </div>
  );
}

function TableCell43() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[962px] overflow-clip top-[153px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[84.99px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">优车·番禺店</p>
    </div>
  );
}

function TableCell44() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1132px] overflow-clip top-[153px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">测试</p>
    </div>
  );
}

function TableCell45() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1282px] overflow-clip top-[153px] w-[180px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell46() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1462px] overflow-clip top-[153px] w-[130px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">陆汉林</p>
    </div>
  );
}

function TableCell47() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1592px] overflow-clip top-[153px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.16px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-04-28 15:39:42</p>
    </div>
  );
}

function TableCell48() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1762px] overflow-clip top-[153px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.09px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-04-28 15:40:51</p>
    </div>
  );
}

function TableCell49() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1932px] overflow-clip top-[153px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell50() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[2102px] overflow-clip top-[153px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.08px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-04-28 17:25:54</p>
    </div>
  );
}

function Text78() {
  return (
    <div className="absolute bg-[#fff3e5] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-0 rounded-[4px] top-[-2px] w-[76px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-[7px] not-italic text-[#fc8b0a] text-[12px] top-px whitespace-nowrap">待关联拍场</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Link">
      <Text78 />
    </div>
  );
}

function Text77() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.5px] items-start left-[8px] overflow-clip pt-[2.5px] top-[26.75px] w-[84px]" data-name="Text">
      <Link6 />
    </div>
  );
}

function TableCell51() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2040px] top-[153px] w-[100px]" data-name="Table Cell">
      <Text77 />
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">查看档案</p>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute h-[16.5px] left-[13px] top-[29.5px] w-[72px]" data-name="Link">
      <Button9 />
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">安排上拍</p>
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute h-[16.5px] left-[85px] top-[29.5px] w-[72px]" data-name="Link">
      <Button10 />
    </div>
  );
}

function TableCell52() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2140px] top-[153px] w-[170px]" data-name="Table Cell">
      <Link7 />
      <Link8 />
    </div>
  );
}

function Text79() {
  return <div className="absolute bg-white border border-[#d9d9d9] border-solid left-[8px] rounded-[4px] size-[16px] top-[30px]" data-name="Text" />;
}

function TableCell53() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-0 top-[230px] w-[32px]" data-name="Table Cell">
      <Text79 />
    </div>
  );
}

function TableCell54() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[32px] top-[230px] w-[80px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[40.07px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">4</p>
    </div>
  );
}

function TableCell55() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[112px] overflow-clip top-[230px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">FP202604280009</p>
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute left-[8px] rounded-[4px] size-[60px] top-[8px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgContainer3} />
    </div>
  );
}

function TableCell56() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[262px] overflow-clip top-[230px] w-[80px]" data-name="Table Cell">
      <Container78 />
    </div>
  );
}

function TableCell57() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[342px] overflow-clip top-[230px] w-[240px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">奥迪RS Q3 2016款 RS Q3 performance版</p>
    </div>
  );
}

function TableCell58() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[582px] overflow-clip top-[230px] w-[170px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">66666666666666666</p>
    </div>
  );
}

function TableCell59() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[752px] overflow-clip top-[230px] w-[110px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">那666666</p>
    </div>
  );
}

function Text80() {
  return (
    <div className="absolute bg-[#e9f2fc] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-[20px] rounded-[4px] top-[27.25px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-[7px] not-italic text-[#2a82e4] text-[12px] top-px whitespace-nowrap">待拍卖</p>
    </div>
  );
}

function TableCell60() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[862px] overflow-clip top-[230px] w-[100px]" data-name="Table Cell">
      <Text80 />
    </div>
  );
}

function TableCell61() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[962px] overflow-clip top-[230px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[84.99px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">优车·番禺店</p>
    </div>
  );
}

function TableCell62() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1132px] overflow-clip top-[230px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">测试</p>
    </div>
  );
}

function TableCell63() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1282px] overflow-clip top-[230px] w-[180px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell64() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1462px] overflow-clip top-[230px] w-[130px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">陆汉林</p>
    </div>
  );
}

function TableCell65() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1592px] overflow-clip top-[230px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.52px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-04-28 15:35:47</p>
    </div>
  );
}

function TableCell66() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1762px] overflow-clip top-[230px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.14px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-04-28 15:36:27</p>
    </div>
  );
}

function TableCell67() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1932px] overflow-clip top-[230px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell68() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[2102px] overflow-clip top-[230px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.06px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-04-28 15:40:18</p>
    </div>
  );
}

function Text82() {
  return (
    <div className="bg-[#fff3e5] h-[22px] relative rounded-[4px] shrink-0 w-full" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#fc8b0a] text-[12px] top-[2px] whitespace-nowrap">待定价</p>
    </div>
  );
}

function Text81() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.5px] items-start left-[8px] overflow-clip pl-[12px] pr-[20px] pt-[0.5px] top-[26.75px] w-[84px]" data-name="Text">
      <Text82 />
    </div>
  );
}

function TableCell69() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2040px] top-[230px] w-[100px]" data-name="Table Cell">
      <Text81 />
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">查看档案</p>
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute h-[16.5px] left-[13px] top-[29.5px] w-[72px]" data-name="Link">
      <Button11 />
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-[85px] rounded-[4px] top-[26px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">评估定价</p>
    </div>
  );
}

function TableCell70() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2140px] top-[230px] w-[170px]" data-name="Table Cell">
      <Link9 />
      <Button12 />
    </div>
  );
}

function Text83() {
  return <div className="absolute bg-white border border-[#d9d9d9] border-solid left-[8px] rounded-[4px] size-[16px] top-[30px]" data-name="Text" />;
}

function TableCell71() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-0 top-[307px] w-[32px]" data-name="Table Cell">
      <Text83 />
    </div>
  );
}

function TableCell72() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[32px] top-[307px] w-[80px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[40.24px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">5</p>
    </div>
  );
}

function TableCell73() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[112px] overflow-clip top-[307px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">FP202604280001</p>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute left-[8px] rounded-[4px] size-[60px] top-[8px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgContainer4} />
    </div>
  );
}

function TableCell74() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[262px] overflow-clip top-[307px] w-[80px]" data-name="Table Cell">
      <Container79 />
    </div>
  );
}

function TableCell75() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[342px] overflow-clip top-[307px] w-[240px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">沃尔沃S90 2024款 B5 智雅豪华版</p>
    </div>
  );
}

function TableCell76() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[582px] overflow-clip top-[307px] w-[170px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">WAUAGD4L8ED026824</p>
    </div>
  );
}

function TableCell77() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[752px] overflow-clip top-[307px] w-[110px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">别动我</p>
    </div>
  );
}

function Text84() {
  return (
    <div className="absolute bg-[#f0f2f5] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-[26px] rounded-[4px] top-[27.25px] w-[40px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-[7px] not-italic text-[#777c85] text-[12px] top-px whitespace-nowrap">流拍</p>
    </div>
  );
}

function TableCell78() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[862px] overflow-clip top-[307px] w-[100px]" data-name="Table Cell">
      <Text84 />
    </div>
  );
}

function TableCell79() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[962px] overflow-clip top-[307px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[84.99px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">优车·番禺店</p>
    </div>
  );
}

function TableCell80() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1132px] overflow-clip top-[307px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">测试</p>
    </div>
  );
}

function TableCell81() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1282px] overflow-clip top-[307px] w-[180px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell82() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1462px] overflow-clip top-[307px] w-[130px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">呃呃呃呃呃</p>
    </div>
  );
}

function TableCell83() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1592px] overflow-clip top-[307px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.21px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-04-28 09:35:44</p>
    </div>
  );
}

function TableCell84() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1762px] overflow-clip top-[307px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.09px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-04-28 09:41:02</p>
    </div>
  );
}

function TableCell85() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1932px] overflow-clip top-[307px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell86() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[2102px] overflow-clip top-[307px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-04-28 17:35:01</p>
    </div>
  );
}

function Text86() {
  return (
    <div className="absolute bg-[#fff3e5] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-0 rounded-[4px] top-[-2px] w-[76px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-[7px] not-italic text-[#fc8b0a] text-[12px] top-px whitespace-nowrap">待关联拍场</p>
    </div>
  );
}

function Link10() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Link">
      <Text86 />
    </div>
  );
}

function Text85() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.5px] items-start left-[8px] overflow-clip pt-[2.5px] top-[26.75px] w-[84px]" data-name="Text">
      <Link10 />
    </div>
  );
}

function TableCell87() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2040px] top-[307px] w-[100px]" data-name="Table Cell">
      <Text85 />
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">查看档案</p>
    </div>
  );
}

function Link11() {
  return (
    <div className="absolute h-[16.5px] left-[13px] top-[29.5px] w-[72px]" data-name="Link">
      <Button13 />
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">安排上拍</p>
    </div>
  );
}

function Link12() {
  return (
    <div className="absolute h-[16.5px] left-[85px] top-[29.5px] w-[72px]" data-name="Link">
      <Button14 />
    </div>
  );
}

function TableCell88() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2140px] top-[307px] w-[170px]" data-name="Table Cell">
      <Link11 />
      <Link12 />
    </div>
  );
}

function Text87() {
  return <div className="absolute bg-white border border-[#d9d9d9] border-solid left-[8px] rounded-[4px] size-[16px] top-[30px]" data-name="Text" />;
}

function TableCell89() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-0 top-[384px] w-[32px]" data-name="Table Cell">
      <Text87 />
    </div>
  );
}

function TableCell90() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[32px] top-[384px] w-[80px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[40.12px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">6</p>
    </div>
  );
}

function TableCell91() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[112px] overflow-clip top-[384px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">FP202604270037</p>
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute left-[8px] rounded-[4px] size-[60px] top-[8px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgContainer4} />
    </div>
  );
}

function TableCell92() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[262px] overflow-clip top-[384px] w-[80px]" data-name="Table Cell">
      <Container80 />
    </div>
  );
}

function TableCell93() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[342px] overflow-clip top-[384px] w-[240px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">众泰E200 2017款 豪华型</p>
    </div>
  );
}

function TableCell94() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[582px] overflow-clip top-[384px] w-[170px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">LS5A3DBE2GA118449</p>
    </div>
  );
}

function TableCell95() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[752px] overflow-clip top-[384px] w-[110px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">粤B88888</p>
    </div>
  );
}

function Text88() {
  return (
    <div className="absolute bg-[#e9f2fc] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-[20px] rounded-[4px] top-[27.25px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-[7px] not-italic text-[#2a82e4] text-[12px] top-px whitespace-nowrap">待拍卖</p>
    </div>
  );
}

function TableCell96() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[862px] overflow-clip top-[384px] w-[100px]" data-name="Table Cell">
      <Text88 />
    </div>
  );
}

function TableCell97() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[962px] overflow-clip top-[384px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell98() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1132px] overflow-clip top-[384px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">测试</p>
    </div>
  );
}

function TableCell99() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1282px] overflow-clip top-[384px] w-[180px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell100() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1462px] overflow-clip top-[384px] w-[130px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">123456</p>
    </div>
  );
}

function TableCell101() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1592px] overflow-clip top-[384px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.28px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-04-27 15:18:51</p>
    </div>
  );
}

function TableCell102() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1762px] overflow-clip top-[384px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.34px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-04-27 16:22:17</p>
    </div>
  );
}

function TableCell103() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1932px] overflow-clip top-[384px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell104() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[2102px] overflow-clip top-[384px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[84.94px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-04-28 10:54:17</p>
    </div>
  );
}

function Text90() {
  return (
    <div className="bg-[#fff3e5] h-[22px] relative rounded-[4px] shrink-0 w-full" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#fc8b0a] text-[12px] top-[2px] whitespace-nowrap">待定价</p>
    </div>
  );
}

function Text89() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.5px] items-start left-[8px] overflow-clip pl-[12px] pr-[20px] pt-[0.5px] top-[26.75px] w-[84px]" data-name="Text">
      <Text90 />
    </div>
  );
}

function TableCell105() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2040px] top-[384px] w-[100px]" data-name="Table Cell">
      <Text89 />
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">查看档案</p>
    </div>
  );
}

function Link13() {
  return (
    <div className="absolute h-[16.5px] left-[13px] top-[29.5px] w-[72px]" data-name="Link">
      <Button15 />
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-[85px] rounded-[4px] top-[26px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">评估定价</p>
    </div>
  );
}

function TableCell106() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2140px] top-[384px] w-[170px]" data-name="Table Cell">
      <Link13 />
      <Button16 />
    </div>
  );
}

function Text91() {
  return <div className="absolute bg-white border border-[#d9d9d9] border-solid left-[8px] rounded-[4px] size-[16px] top-[30px]" data-name="Text" />;
}

function TableCell107() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-0 top-[461px] w-[32px]" data-name="Table Cell">
      <Text91 />
    </div>
  );
}

function TableCell108() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[32px] top-[461px] w-[80px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[40.09px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">7</p>
    </div>
  );
}

function TableCell109() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[112px] overflow-clip top-[461px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">FP202604270028</p>
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute left-[8px] rounded-[4px] size-[60px] top-[8px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgContainer5} />
    </div>
  );
}

function TableCell110() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[262px] overflow-clip top-[461px] w-[80px]" data-name="Table Cell">
      <Container81 />
    </div>
  );
}

function TableCell111() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[342px] overflow-clip top-[461px] w-[240px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">V8 Vantage 2022款 4.0T V8 Roadster</p>
    </div>
  );
}

function TableCell112() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[582px] overflow-clip top-[461px] w-[170px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">96454546454546546</p>
    </div>
  );
}

function TableCell113() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[752px] overflow-clip top-[461px] w-[110px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">我流拍了</p>
    </div>
  );
}

function Text92() {
  return (
    <div className="absolute bg-[#e9f2fc] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-[20px] rounded-[4px] top-[27.25px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-[7px] not-italic text-[#2a82e4] text-[12px] top-px whitespace-nowrap">待拍卖</p>
    </div>
  );
}

function TableCell114() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[862px] overflow-clip top-[461px] w-[100px]" data-name="Table Cell">
      <Text92 />
    </div>
  );
}

function TableCell115() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[962px] overflow-clip top-[461px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell116() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1132px] overflow-clip top-[461px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">测试</p>
    </div>
  );
}

function TableCell117() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1282px] overflow-clip top-[461px] w-[180px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell118() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1462px] overflow-clip top-[461px] w-[130px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">hhhh</p>
    </div>
  );
}

function TableCell119() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1592px] overflow-clip top-[461px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.7px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-04-27 10:43:21</p>
    </div>
  );
}

function TableCell120() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1762px] overflow-clip top-[461px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.46px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-04-27 10:59:33</p>
    </div>
  );
}

function TableCell121() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1932px] overflow-clip top-[461px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell122() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[2102px] overflow-clip top-[461px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.95px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-04-27 11:47:59</p>
    </div>
  );
}

function Text94() {
  return (
    <div className="absolute bg-[#fff3e5] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-0 rounded-[4px] top-[-2px] w-[76px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-[7px] not-italic text-[#fc8b0a] text-[12px] top-px whitespace-nowrap">待关联拍场</p>
    </div>
  );
}

function Link14() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Link">
      <Text94 />
    </div>
  );
}

function Text93() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.5px] items-start left-[8px] overflow-clip pt-[2.5px] top-[26.75px] w-[84px]" data-name="Text">
      <Link14 />
    </div>
  );
}

function TableCell123() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2040px] top-[461px] w-[100px]" data-name="Table Cell">
      <Text93 />
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">查看档案</p>
    </div>
  );
}

function Link15() {
  return (
    <div className="absolute h-[16.5px] left-[13px] top-[29.5px] w-[72px]" data-name="Link">
      <Button17 />
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">安排上拍</p>
    </div>
  );
}

function Link16() {
  return (
    <div className="absolute h-[16.5px] left-[85px] top-[29.5px] w-[72px]" data-name="Link">
      <Button18 />
    </div>
  );
}

function TableCell124() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2140px] top-[461px] w-[170px]" data-name="Table Cell">
      <Link15 />
      <Link16 />
    </div>
  );
}

function Text95() {
  return <div className="absolute bg-white border border-[#d9d9d9] border-solid left-[8px] rounded-[4px] size-[16px] top-[30px]" data-name="Text" />;
}

function TableCell125() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-0 top-[538px] w-[32px]" data-name="Table Cell">
      <Text95 />
    </div>
  );
}

function TableCell126() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[32px] top-[538px] w-[80px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[40.1px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">8</p>
    </div>
  );
}

function TableCell127() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[112px] overflow-clip top-[538px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">FP202604240007</p>
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute left-[8px] rounded-[4px] size-[60px] top-[8px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgContainer6} />
    </div>
  );
}

function TableCell128() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[262px] overflow-clip top-[538px] w-[80px]" data-name="Table Cell">
      <Container82 />
    </div>
  );
}

function TableCell129() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[342px] overflow-clip top-[538px] w-[240px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">奥迪RS 3 2022款 RS 3 Sportback 南非版</p>
    </div>
  );
}

function TableCell130() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[582px] overflow-clip top-[538px] w-[170px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">TF121313161919191</p>
    </div>
  );
}

function TableCell131() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[752px] overflow-clip top-[538px] w-[110px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">粤B134816</p>
    </div>
  );
}

function Text96() {
  return (
    <div className="absolute bg-[#fff0f0] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-[20px] rounded-[4px] top-[27.25px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-[7px] not-italic text-[#e32727] text-[12px] top-px whitespace-nowrap">已下架</p>
    </div>
  );
}

function TableCell132() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[862px] overflow-clip top-[538px] w-[100px]" data-name="Table Cell">
      <Text96 />
    </div>
  );
}

function TableCell133() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[962px] overflow-clip top-[538px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[85.49px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">广联·深圳直营店</p>
    </div>
  );
}

function TableCell134() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1132px] overflow-clip top-[538px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">测试</p>
    </div>
  );
}

function TableCell135() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1282px] overflow-clip top-[538px] w-[180px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell136() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1462px] overflow-clip top-[538px] w-[130px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">杨</p>
    </div>
  );
}

function TableCell137() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1592px] overflow-clip top-[538px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.43px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-04-24 17:45:40</p>
    </div>
  );
}

function TableCell138() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1762px] overflow-clip top-[538px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.97px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-04-24 17:48:17</p>
    </div>
  );
}

function TableCell139() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1932px] overflow-clip top-[538px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell140() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[2102px] overflow-clip top-[538px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.63px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-04-25 15:33:12</p>
    </div>
  );
}

function Text98() {
  return (
    <div className="absolute bg-[#fff3e5] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-0 rounded-[4px] top-[-2px] w-[76px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-[7px] not-italic text-[#fc8b0a] text-[12px] top-px whitespace-nowrap">待关联拍场</p>
    </div>
  );
}

function Link17() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Link">
      <Text98 />
    </div>
  );
}

function Text97() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.5px] items-start left-[8px] overflow-clip pt-[2.5px] top-[26.75px] w-[84px]" data-name="Text">
      <Link17 />
    </div>
  );
}

function TableCell141() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2040px] top-[538px] w-[100px]" data-name="Table Cell">
      <Text97 />
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">查看档案</p>
    </div>
  );
}

function Link18() {
  return (
    <div className="absolute h-[16.5px] left-[13px] top-[29.5px] w-[72px]" data-name="Link">
      <Button19 />
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">安排上拍</p>
    </div>
  );
}

function Link19() {
  return (
    <div className="absolute h-[16.5px] left-[85px] top-[29.5px] w-[72px]" data-name="Link">
      <Button20 />
    </div>
  );
}

function TableCell142() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2140px] top-[538px] w-[170px]" data-name="Table Cell">
      <Link18 />
      <Link19 />
    </div>
  );
}

function Text99() {
  return <div className="absolute bg-white border border-[#d9d9d9] border-solid left-[8px] rounded-[4px] size-[16px] top-[30px]" data-name="Text" />;
}

function TableCell143() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-0 top-[615px] w-[32px]" data-name="Table Cell">
      <Text99 />
    </div>
  );
}

function TableCell144() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[32px] top-[615px] w-[80px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[40.12px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">9</p>
    </div>
  );
}

function TableCell145() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[112px] overflow-clip top-[615px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">26045WjOtd</p>
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute left-[8px] rounded-[4px] size-[60px] top-[8px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgContainer7} />
    </div>
  );
}

function TableCell146() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[262px] overflow-clip top-[615px] w-[80px]" data-name="Table Cell">
      <Container83 />
    </div>
  );
}

function TableCell147() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[342px] overflow-clip top-[615px] w-[240px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">Vanquish 2027款 Volante</p>
    </div>
  );
}

function TableCell148() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[582px] overflow-clip top-[615px] w-[170px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">R9LRRTM9AK8SDL0AX</p>
    </div>
  );
}

function TableCell149() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[752px] overflow-clip top-[615px] w-[110px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">新QYFDYR</p>
    </div>
  );
}

function TableCell150() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[862px] overflow-clip top-[615px] w-[100px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[50.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell151() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[962px] overflow-clip top-[615px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[85px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">广联</p>
    </div>
  );
}

function TableCell152() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1132px] overflow-clip top-[615px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">测试</p>
    </div>
  );
}

function TableCell153() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1282px] overflow-clip top-[615px] w-[180px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">广东省深圳市</p>
    </div>
  );
}

function TableCell154() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1462px] overflow-clip top-[615px] w-[130px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">梁懿</p>
    </div>
  );
}

function TableCell155() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1592px] overflow-clip top-[615px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[84.81px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-04-13 10:16:01</p>
    </div>
  );
}

function TableCell156() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1762px] overflow-clip top-[615px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.72px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-04-15 11:11:51</p>
    </div>
  );
}

function TableCell157() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1932px] overflow-clip top-[615px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell158() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[2102px] overflow-clip top-[615px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.13px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-04-20 15:48:01</p>
    </div>
  );
}

function Text101() {
  return (
    <div className="absolute bg-[#fff3e5] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-0 rounded-[4px] top-[-2px] w-[76px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-[7px] not-italic text-[#fc8b0a] text-[12px] top-px whitespace-nowrap">待关联拍场</p>
    </div>
  );
}

function Link20() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Link">
      <Text101 />
    </div>
  );
}

function Text100() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.5px] items-start left-[8px] overflow-clip pt-[2.5px] top-[26.75px] w-[84px]" data-name="Text">
      <Link20 />
    </div>
  );
}

function TableCell159() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2040px] top-[615px] w-[100px]" data-name="Table Cell">
      <Text100 />
    </div>
  );
}

function Button21() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">查看档案</p>
    </div>
  );
}

function Link21() {
  return (
    <div className="absolute h-[16.5px] left-[13px] top-[29.5px] w-[72px]" data-name="Link">
      <Button21 />
    </div>
  );
}

function Button22() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">安排上拍</p>
    </div>
  );
}

function Link22() {
  return (
    <div className="absolute h-[16.5px] left-[85px] top-[29.5px] w-[72px]" data-name="Link">
      <Button22 />
    </div>
  );
}

function TableCell160() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2140px] top-[615px] w-[170px]" data-name="Table Cell">
      <Link21 />
      <Link22 />
    </div>
  );
}

function Text102() {
  return <div className="absolute bg-white border border-[#d9d9d9] border-solid left-[8px] rounded-[4px] size-[16px] top-[30px]" data-name="Text" />;
}

function TableCell161() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-0 top-[692px] w-[32px]" data-name="Table Cell">
      <Text102 />
    </div>
  );
}

function TableCell162() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[32px] top-[692px] w-[80px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[40.49px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">10</p>
    </div>
  );
}

function TableCell163() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[112px] overflow-clip top-[692px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2603BbgGl0</p>
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute left-[8px] rounded-[4px] size-[60px] top-[8px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgContainer8} />
    </div>
  );
}

function TableCell164() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[262px] overflow-clip top-[692px] w-[80px]" data-name="Table Cell">
      <Container84 />
    </div>
  );
}

function TableCell165() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[342px] overflow-clip top-[692px] w-[240px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">奥迪RS 3 2022款 RS 3 Sedan 英国版</p>
    </div>
  );
}

function TableCell166() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[582px] overflow-clip top-[692px] w-[170px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">88888888888888888</p>
    </div>
  );
}

function TableCell167() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[752px] overflow-clip top-[692px] w-[110px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">6666595616</p>
    </div>
  );
}

function TableCell168() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[862px] overflow-clip top-[692px] w-[100px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[50.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell169() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[962px] overflow-clip top-[692px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[85px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">广联</p>
    </div>
  );
}

function TableCell170() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1132px] overflow-clip top-[692px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">测试</p>
    </div>
  );
}

function TableCell171() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1282px] overflow-clip top-[692px] w-[180px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">广东省深圳市</p>
    </div>
  );
}

function TableCell172() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1462px] overflow-clip top-[692px] w-[130px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">王刘洋</p>
    </div>
  );
}

function TableCell173() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1592px] overflow-clip top-[692px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[84.92px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-03-31 15:10:03</p>
    </div>
  );
}

function TableCell174() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1762px] overflow-clip top-[692px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[84.6px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-03-31 16:53:36</p>
    </div>
  );
}

function TableCell175() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1932px] overflow-clip top-[692px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell176() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[2102px] overflow-clip top-[692px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.47px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-04-07 15:25:32</p>
    </div>
  );
}

function Text104() {
  return (
    <div className="absolute bg-[#fff3e5] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-0 rounded-[4px] top-[-2px] w-[76px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-[7px] not-italic text-[#fc8b0a] text-[12px] top-px whitespace-nowrap">待关联拍场</p>
    </div>
  );
}

function Link23() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Link">
      <Text104 />
    </div>
  );
}

function Text103() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.5px] items-start left-[8px] overflow-clip pt-[2.5px] top-[26.75px] w-[84px]" data-name="Text">
      <Link23 />
    </div>
  );
}

function TableCell177() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2040px] top-[692px] w-[100px]" data-name="Table Cell">
      <Text103 />
    </div>
  );
}

function Button23() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">查看档案</p>
    </div>
  );
}

function Link24() {
  return (
    <div className="absolute h-[16.5px] left-[13px] top-[29.5px] w-[72px]" data-name="Link">
      <Button23 />
    </div>
  );
}

function Button24() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">安排上拍</p>
    </div>
  );
}

function Link25() {
  return (
    <div className="absolute h-[16.5px] left-[85px] top-[29.5px] w-[72px]" data-name="Link">
      <Button24 />
    </div>
  );
}

function TableCell178() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2140px] top-[692px] w-[170px]" data-name="Table Cell">
      <Link24 />
      <Link25 />
    </div>
  );
}

function Text105() {
  return <div className="absolute bg-white border border-[#d9d9d9] border-solid left-[8px] rounded-[4px] size-[16px] top-[30px]" data-name="Text" />;
}

function TableCell179() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-0 top-[769px] w-[32px]" data-name="Table Cell">
      <Text105 />
    </div>
  );
}

function TableCell180() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[32px] top-[769px] w-[80px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[40.16px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">11</p>
    </div>
  );
}

function TableCell181() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[112px] overflow-clip top-[769px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">26035U8OFh</p>
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute left-[8px] rounded-[4px] size-[60px] top-[8px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgContainer9} />
    </div>
  );
}

function TableCell182() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[262px] overflow-clip top-[769px] w-[80px]" data-name="Table Cell">
      <Container85 />
    </div>
  );
}

function TableCell183() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[342px] overflow-clip top-[769px] w-[240px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">宝马M235L 2025款 M235L</p>
    </div>
  );
}

function TableCell184() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[582px] overflow-clip top-[769px] w-[170px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">LFMCM1CX9L0095398</p>
    </div>
  );
}

function TableCell185() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[752px] overflow-clip top-[769px] w-[110px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">浙J0U5M2</p>
    </div>
  );
}

function TableCell186() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[862px] overflow-clip top-[769px] w-[100px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[50.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell187() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[962px] overflow-clip top-[769px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[85px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">广联</p>
    </div>
  );
}

function TableCell188() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1132px] overflow-clip top-[769px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">测试</p>
    </div>
  );
}

function TableCell189() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1282px] overflow-clip top-[769px] w-[180px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">广东省深圳市</p>
    </div>
  );
}

function TableCell190() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1462px] overflow-clip top-[769px] w-[130px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">陆汉林</p>
    </div>
  );
}

function TableCell191() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1592px] overflow-clip top-[769px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[84.5px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-03-30 14:18:00</p>
    </div>
  );
}

function TableCell192() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1762px] overflow-clip top-[769px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.38px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-03-30 15:44:53</p>
    </div>
  );
}

function TableCell193() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1932px] overflow-clip top-[769px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell194() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[2102px] overflow-clip top-[769px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.52px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-04-07 10:35:50</p>
    </div>
  );
}

function Text107() {
  return (
    <div className="absolute bg-[#fff3e5] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-0 rounded-[4px] top-[-2px] w-[76px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-[7px] not-italic text-[#fc8b0a] text-[12px] top-px whitespace-nowrap">待关联拍场</p>
    </div>
  );
}

function Link26() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Link">
      <Text107 />
    </div>
  );
}

function Text106() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.5px] items-start left-[8px] overflow-clip pt-[2.5px] top-[26.75px] w-[84px]" data-name="Text">
      <Link26 />
    </div>
  );
}

function TableCell195() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2040px] top-[769px] w-[100px]" data-name="Table Cell">
      <Text106 />
    </div>
  );
}

function Button25() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">查看档案</p>
    </div>
  );
}

function Link27() {
  return (
    <div className="absolute h-[16.5px] left-[13px] top-[29.5px] w-[72px]" data-name="Link">
      <Button25 />
    </div>
  );
}

function Button26() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">安排上拍</p>
    </div>
  );
}

function Link28() {
  return (
    <div className="absolute h-[16.5px] left-[85px] top-[29.5px] w-[72px]" data-name="Link">
      <Button26 />
    </div>
  );
}

function TableCell196() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2140px] top-[769px] w-[170px]" data-name="Table Cell">
      <Link27 />
      <Link28 />
    </div>
  );
}

function Text108() {
  return <div className="absolute bg-white border border-[#d9d9d9] border-solid left-[8px] rounded-[4px] size-[16px] top-[30px]" data-name="Text" />;
}

function TableCell197() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-0 top-[846px] w-[32px]" data-name="Table Cell">
      <Text108 />
    </div>
  );
}

function TableCell198() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[32px] top-[846px] w-[80px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[40.17px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">12</p>
    </div>
  );
}

function TableCell199() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[112px] overflow-clip top-[846px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">260352CFsh</p>
    </div>
  );
}

function Image14() {
  return <div className="absolute left-[8px] rounded-[4px] size-[60px] top-[8px]" data-name="Image" />;
}

function TableCell200() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[262px] overflow-clip top-[846px] w-[80px]" data-name="Table Cell">
      <Image14 />
    </div>
  );
}

function TableCell201() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[342px] overflow-clip top-[846px] w-[240px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">奥迪Q5 e-tron 2024款 50 e-tron quattro 光耀型 锦衣套装</p>
    </div>
  );
}

function TableCell202() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[582px] overflow-clip top-[846px] w-[170px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">24555555555555555</p>
    </div>
  );
}

function TableCell203() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[752px] overflow-clip top-[846px] w-[110px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">111111111111</p>
    </div>
  );
}

function TableCell204() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[862px] overflow-clip top-[846px] w-[100px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[50.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell205() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[962px] overflow-clip top-[846px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[85px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">广联</p>
    </div>
  );
}

function TableCell206() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1132px] overflow-clip top-[846px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">测试</p>
    </div>
  );
}

function TableCell207() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1282px] overflow-clip top-[846px] w-[180px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell208() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1462px] overflow-clip top-[846px] w-[130px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">11</p>
    </div>
  );
}

function TableCell209() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1592px] overflow-clip top-[846px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[84.8px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-03-30 10:23:41</p>
    </div>
  );
}

function TableCell210() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1762px] overflow-clip top-[846px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.55px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-03-30 10:23:57</p>
    </div>
  );
}

function TableCell211() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1932px] overflow-clip top-[846px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell212() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[2102px] overflow-clip top-[846px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.55px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-03-31 15:52:01</p>
    </div>
  );
}

function Text110() {
  return (
    <div className="bg-[#e7f2fe] h-[22px] relative rounded-[4px] shrink-0 w-full" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#288bfa] text-[12px] top-[2px] whitespace-nowrap">待签署合同</p>
    </div>
  );
}

function Text109() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.5px] items-start left-[8px] overflow-clip pr-[8px] pt-[0.5px] top-[26.75px] w-[84px]" data-name="Text">
      <Text110 />
    </div>
  );
}

function TableCell213() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2040px] top-[846px] w-[100px]" data-name="Table Cell">
      <Text109 />
    </div>
  );
}

function Button27() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">查看档案</p>
    </div>
  );
}

function Link29() {
  return (
    <div className="absolute h-[16.5px] left-[49px] top-[17.5px] w-[72px]" data-name="Link">
      <Button27 />
    </div>
  );
}

function Button28() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-[35px] rounded-[4px] top-[38px] w-[100px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[49px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">查看拍卖订单</p>
    </div>
  );
}

function TableCell214() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2140px] top-[846px] w-[170px]" data-name="Table Cell">
      <Link29 />
      <Button28 />
    </div>
  );
}

function Text111() {
  return <div className="absolute bg-white border border-[#d9d9d9] border-solid left-[8px] rounded-[4px] size-[16px] top-[30px]" data-name="Text" />;
}

function TableCell215() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-0 top-[923px] w-[32px]" data-name="Table Cell">
      <Text111 />
    </div>
  );
}

function TableCell216() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[32px] top-[923px] w-[80px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[39.51px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">13</p>
    </div>
  );
}

function TableCell217() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[112px] overflow-clip top-[923px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">26034urnAu</p>
    </div>
  );
}

function Image15() {
  return <div className="absolute left-[8px] rounded-[4px] size-[60px] top-[8px]" data-name="Image" />;
}

function TableCell218() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[262px] overflow-clip top-[923px] w-[80px]" data-name="Table Cell">
      <Image15 />
    </div>
  );
}

function TableCell219() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[342px] overflow-clip top-[923px] w-[240px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">享界S9T 2025款 纯电 后驱Max</p>
    </div>
  );
}

function TableCell220() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[582px] overflow-clip top-[923px] w-[170px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">KAPDZ255LPXYHHUJ6</p>
    </div>
  );
}

function TableCell221() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[752px] overflow-clip top-[923px] w-[110px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">粤RJ2SFK</p>
    </div>
  );
}

function TableCell222() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[862px] overflow-clip top-[923px] w-[100px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[50.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell223() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[962px] overflow-clip top-[923px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[85px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">广联</p>
    </div>
  );
}

function TableCell224() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1132px] overflow-clip top-[923px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">测试</p>
    </div>
  );
}

function TableCell225() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1282px] overflow-clip top-[923px] w-[180px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">厕所</p>
    </div>
  );
}

function TableCell226() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1462px] overflow-clip top-[923px] w-[130px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">胡庚美</p>
    </div>
  );
}

function TableCell227() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1592px] overflow-clip top-[923px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[84.58px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-03-30 10:04:02</p>
    </div>
  );
}

function TableCell228() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1762px] overflow-clip top-[923px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[84.79px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-03-30 10:16:02</p>
    </div>
  );
}

function TableCell229() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1932px] overflow-clip top-[923px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell230() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[2102px] overflow-clip top-[923px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.24px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-04-07 14:56:00</p>
    </div>
  );
}

function Text113() {
  return (
    <div className="absolute bg-[#fff3e5] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-0 rounded-[4px] top-[-2px] w-[76px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-[7px] not-italic text-[#fc8b0a] text-[12px] top-px whitespace-nowrap">待关联拍场</p>
    </div>
  );
}

function Link30() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Link">
      <Text113 />
    </div>
  );
}

function Text112() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.5px] items-start left-[8px] overflow-clip pt-[2.5px] top-[26.75px] w-[84px]" data-name="Text">
      <Link30 />
    </div>
  );
}

function TableCell231() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2040px] top-[923px] w-[100px]" data-name="Table Cell">
      <Text112 />
    </div>
  );
}

function Button29() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">查看档案</p>
    </div>
  );
}

function Link31() {
  return (
    <div className="absolute h-[16.5px] left-[13px] top-[29.5px] w-[72px]" data-name="Link">
      <Button29 />
    </div>
  );
}

function Button30() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">安排上拍</p>
    </div>
  );
}

function Link32() {
  return (
    <div className="absolute h-[16.5px] left-[85px] top-[29.5px] w-[72px]" data-name="Link">
      <Button30 />
    </div>
  );
}

function TableCell232() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2140px] top-[923px] w-[170px]" data-name="Table Cell">
      <Link31 />
      <Link32 />
    </div>
  );
}

function Text114() {
  return <div className="absolute bg-white border border-[#d9d9d9] border-solid left-[8px] rounded-[4px] size-[16px] top-[30px]" data-name="Text" />;
}

function TableCell233() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-0 top-[1000px] w-[32px]" data-name="Table Cell">
      <Text114 />
    </div>
  );
}

function TableCell234() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[32px] top-[1000px] w-[80px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[40.4px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">14</p>
    </div>
  );
}

function TableCell235() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[112px] overflow-clip top-[1000px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">26032nUxml</p>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute left-[8px] rounded-[4px] size-[60px] top-[8px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgContainer10} />
    </div>
  );
}

function TableCell236() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[262px] overflow-clip top-[1000px] w-[80px]" data-name="Table Cell">
      <Container86 />
    </div>
  );
}

function TableCell237() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[342px] overflow-clip top-[1000px] w-[240px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">享界S9T 2025款 纯电 后驱Max</p>
    </div>
  );
}

function TableCell238() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[582px] overflow-clip top-[1000px] w-[170px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">8J5JEC9UJ6YTTDPWV</p>
    </div>
  );
}

function TableCell239() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[752px] overflow-clip top-[1000px] w-[110px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">琼TDHH40</p>
    </div>
  );
}

function TableCell240() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[862px] overflow-clip top-[1000px] w-[100px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[50.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell241() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[962px] overflow-clip top-[1000px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[85px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">广联</p>
    </div>
  );
}

function TableCell242() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1132px] overflow-clip top-[1000px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">测试</p>
    </div>
  );
}

function TableCell243() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1282px] overflow-clip top-[1000px] w-[180px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">厕所</p>
    </div>
  );
}

function TableCell244() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1462px] overflow-clip top-[1000px] w-[130px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">胡庚美</p>
    </div>
  );
}

function TableCell245() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1592px] overflow-clip top-[1000px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[84.6px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-03-30 09:52:01</p>
    </div>
  );
}

function TableCell246() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1762px] overflow-clip top-[1000px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.52px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-03-30 09:54:49</p>
    </div>
  );
}

function TableCell247() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1932px] overflow-clip top-[1000px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell248() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[2102px] overflow-clip top-[1000px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[84.79px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-04-07 13:38:49</p>
    </div>
  );
}

function Text116() {
  return (
    <div className="absolute bg-[#fff3e5] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-0 rounded-[4px] top-[-2px] w-[76px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-[7px] not-italic text-[#fc8b0a] text-[12px] top-px whitespace-nowrap">待关联拍场</p>
    </div>
  );
}

function Link33() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Link">
      <Text116 />
    </div>
  );
}

function Text115() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.5px] items-start left-[8px] overflow-clip pt-[2.5px] top-[26.75px] w-[84px]" data-name="Text">
      <Link33 />
    </div>
  );
}

function TableCell249() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2040px] top-[1000px] w-[100px]" data-name="Table Cell">
      <Text115 />
    </div>
  );
}

function Button31() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">查看档案</p>
    </div>
  );
}

function Link34() {
  return (
    <div className="absolute h-[16.5px] left-[13px] top-[29.5px] w-[72px]" data-name="Link">
      <Button31 />
    </div>
  );
}

function Button32() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">安排上拍</p>
    </div>
  );
}

function Link35() {
  return (
    <div className="absolute h-[16.5px] left-[85px] top-[29.5px] w-[72px]" data-name="Link">
      <Button32 />
    </div>
  );
}

function TableCell250() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2140px] top-[1000px] w-[170px]" data-name="Table Cell">
      <Link34 />
      <Link35 />
    </div>
  );
}

function Text117() {
  return <div className="absolute bg-white border border-[#d9d9d9] border-solid left-[8px] rounded-[4px] size-[16px] top-[30px]" data-name="Text" />;
}

function TableCell251() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-0 top-[1077px] w-[32px]" data-name="Table Cell">
      <Text117 />
    </div>
  );
}

function TableCell252() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[32px] top-[1077px] w-[80px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[40.07px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">15</p>
    </div>
  );
}

function TableCell253() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[112px] overflow-clip top-[1077px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2603fUTSj0</p>
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute left-[8px] rounded-[4px] size-[60px] top-[8px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgContainer10} />
    </div>
  );
}

function TableCell254() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[262px] overflow-clip top-[1077px] w-[80px]" data-name="Table Cell">
      <Container87 />
    </div>
  );
}

function TableCell255() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[342px] overflow-clip top-[1077px] w-[240px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">享界S9T 2025款 纯电 后驱Max</p>
    </div>
  );
}

function TableCell256() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[582px] overflow-clip top-[1077px] w-[170px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">T3W1KK17H838L8PMW</p>
    </div>
  );
}

function TableCell257() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[752px] overflow-clip top-[1077px] w-[110px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">冀K8E7GV</p>
    </div>
  );
}

function TableCell258() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[862px] overflow-clip top-[1077px] w-[100px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[50.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell259() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[962px] overflow-clip top-[1077px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[85px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">广联</p>
    </div>
  );
}

function TableCell260() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1132px] overflow-clip top-[1077px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">测试</p>
    </div>
  );
}

function TableCell261() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1282px] overflow-clip top-[1077px] w-[180px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">厕所</p>
    </div>
  );
}

function TableCell262() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1462px] overflow-clip top-[1077px] w-[130px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">胡庚美</p>
    </div>
  );
}

function TableCell263() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1592px] overflow-clip top-[1077px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.44px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-03-30 09:50:02</p>
    </div>
  );
}

function TableCell264() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1762px] overflow-clip top-[1077px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.39px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-03-30 09:55:07</p>
    </div>
  );
}

function TableCell265() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1932px] overflow-clip top-[1077px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell266() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[2102px] overflow-clip top-[1077px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.37px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-04-23 17:07:02</p>
    </div>
  );
}

function Text119() {
  return (
    <div className="absolute bg-[#fff3e5] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-0 rounded-[4px] top-[-2px] w-[76px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-[7px] not-italic text-[#fc8b0a] text-[12px] top-px whitespace-nowrap">待关联拍场</p>
    </div>
  );
}

function Link36() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Link">
      <Text119 />
    </div>
  );
}

function Text118() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.5px] items-start left-[8px] overflow-clip pt-[2.5px] top-[26.75px] w-[84px]" data-name="Text">
      <Link36 />
    </div>
  );
}

function TableCell267() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2040px] top-[1077px] w-[100px]" data-name="Table Cell">
      <Text118 />
    </div>
  );
}

function Button33() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">查看档案</p>
    </div>
  );
}

function Link37() {
  return (
    <div className="absolute h-[16.5px] left-[13px] top-[29.5px] w-[72px]" data-name="Link">
      <Button33 />
    </div>
  );
}

function Button34() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">安排上拍</p>
    </div>
  );
}

function Link38() {
  return (
    <div className="absolute h-[16.5px] left-[85px] top-[29.5px] w-[72px]" data-name="Link">
      <Button34 />
    </div>
  );
}

function TableCell268() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2140px] top-[1077px] w-[170px]" data-name="Table Cell">
      <Link37 />
      <Link38 />
    </div>
  );
}

function Text120() {
  return <div className="absolute bg-white border border-[#d9d9d9] border-solid left-[8px] rounded-[4px] size-[16px] top-[30px]" data-name="Text" />;
}

function TableCell269() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-0 top-[1154px] w-[32px]" data-name="Table Cell">
      <Text120 />
    </div>
  );
}

function TableCell270() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[32px] top-[1154px] w-[80px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[40.45px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">16</p>
    </div>
  );
}

function TableCell271() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[112px] overflow-clip top-[1154px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">26033BsnV0</p>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute left-[8px] rounded-[4px] size-[60px] top-[8px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgContainer10} />
    </div>
  );
}

function TableCell272() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[262px] overflow-clip top-[1154px] w-[80px]" data-name="Table Cell">
      <Container88 />
    </div>
  );
}

function TableCell273() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[342px] overflow-clip top-[1154px] w-[240px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">享界S9T 2025款 纯电 后驱Max</p>
    </div>
  );
}

function TableCell274() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[582px] overflow-clip top-[1154px] w-[170px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">0RFW6KKFNXV5LX1YS</p>
    </div>
  );
}

function TableCell275() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[752px] overflow-clip top-[1154px] w-[110px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">赣TMBM60</p>
    </div>
  );
}

function TableCell276() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[862px] overflow-clip top-[1154px] w-[100px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[50.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell277() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[962px] overflow-clip top-[1154px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[85px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">广联</p>
    </div>
  );
}

function TableCell278() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1132px] overflow-clip top-[1154px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">测试</p>
    </div>
  );
}

function TableCell279() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1282px] overflow-clip top-[1154px] w-[180px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">厕所</p>
    </div>
  );
}

function TableCell280() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1462px] overflow-clip top-[1154px] w-[130px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">胡庚美</p>
    </div>
  );
}

function TableCell281() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1592px] overflow-clip top-[1154px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[84.52px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-03-27 21:10:42</p>
    </div>
  );
}

function TableCell282() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1762px] overflow-clip top-[1154px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.41px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-03-30 15:45:12</p>
    </div>
  );
}

function TableCell283() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1932px] overflow-clip top-[1154px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell284() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[2102px] overflow-clip top-[1154px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.13px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-03-31 14:57:19</p>
    </div>
  );
}

function Text122() {
  return (
    <div className="bg-[#fff3e5] h-[22px] relative rounded-[4px] shrink-0 w-full" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#fc8b0a] text-[12px] top-[2px] whitespace-nowrap">待定价</p>
    </div>
  );
}

function Text121() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.5px] items-start left-[8px] overflow-clip pl-[12px] pr-[20px] pt-[0.5px] top-[26.75px] w-[84px]" data-name="Text">
      <Text122 />
    </div>
  );
}

function TableCell285() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2040px] top-[1154px] w-[100px]" data-name="Table Cell">
      <Text121 />
    </div>
  );
}

function Button35() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">查看档案</p>
    </div>
  );
}

function Link39() {
  return (
    <div className="absolute h-[16.5px] left-[13px] top-[29.5px] w-[72px]" data-name="Link">
      <Button35 />
    </div>
  );
}

function Button36() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-[85px] rounded-[4px] top-[26px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">评估定价</p>
    </div>
  );
}

function TableCell286() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2140px] top-[1154px] w-[170px]" data-name="Table Cell">
      <Link39 />
      <Button36 />
    </div>
  );
}

function Text123() {
  return <div className="absolute bg-white border border-[#d9d9d9] border-solid left-[8px] rounded-[4px] size-[16px] top-[30px]" data-name="Text" />;
}

function TableCell287() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-0 top-[1231px] w-[32px]" data-name="Table Cell">
      <Text123 />
    </div>
  );
}

function TableCell288() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[32px] top-[1231px] w-[80px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[40.41px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">17</p>
    </div>
  );
}

function TableCell289() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[112px] overflow-clip top-[1231px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">260318UNxb</p>
    </div>
  );
}

function Image16() {
  return <div className="absolute left-[8px] rounded-[4px] size-[60px] top-[8px]" data-name="Image" />;
}

function TableCell290() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[262px] overflow-clip top-[1231px] w-[80px]" data-name="Table Cell">
      <Image16 />
    </div>
  );
}

function TableCell291() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[342px] overflow-clip top-[1231px] w-[240px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">奥迪Q5 e-tron 2024款 50 e-tron quattro 光耀型 机甲套装</p>
    </div>
  );
}

function TableCell292() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[582px] overflow-clip top-[1231px] w-[170px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">24555555555555555</p>
    </div>
  );
}

function TableCell293() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[752px] overflow-clip top-[1231px] w-[110px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">111111111111</p>
    </div>
  );
}

function TableCell294() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[862px] overflow-clip top-[1231px] w-[100px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[50.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell295() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[962px] overflow-clip top-[1231px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[85px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">广联</p>
    </div>
  );
}

function TableCell296() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1132px] overflow-clip top-[1231px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">测试</p>
    </div>
  );
}

function TableCell297() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1282px] overflow-clip top-[1231px] w-[180px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell298() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1462px] overflow-clip top-[1231px] w-[130px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">11</p>
    </div>
  );
}

function TableCell299() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1592px] overflow-clip top-[1231px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.07px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-03-27 19:26:08</p>
    </div>
  );
}

function TableCell300() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1762px] overflow-clip top-[1231px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.54px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-03-27 19:26:40</p>
    </div>
  );
}

function TableCell301() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1932px] overflow-clip top-[1231px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell302() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[2102px] overflow-clip top-[1231px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[84.53px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-03-31 14:51:48</p>
    </div>
  );
}

function Text125() {
  return (
    <div className="absolute bg-[#fff3e5] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-0 rounded-[4px] top-[-2px] w-[76px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-[7px] not-italic text-[#fc8b0a] text-[12px] top-px whitespace-nowrap">待关联拍场</p>
    </div>
  );
}

function Link40() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Link">
      <Text125 />
    </div>
  );
}

function Text124() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.5px] items-start left-[8px] overflow-clip pt-[2.5px] top-[26.75px] w-[84px]" data-name="Text">
      <Link40 />
    </div>
  );
}

function TableCell303() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2040px] top-[1231px] w-[100px]" data-name="Table Cell">
      <Text124 />
    </div>
  );
}

function Button37() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">查看档案</p>
    </div>
  );
}

function Link41() {
  return (
    <div className="absolute h-[16.5px] left-[13px] top-[29.5px] w-[72px]" data-name="Link">
      <Button37 />
    </div>
  );
}

function Button38() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">安排上拍</p>
    </div>
  );
}

function Link42() {
  return (
    <div className="absolute h-[16.5px] left-[85px] top-[29.5px] w-[72px]" data-name="Link">
      <Button38 />
    </div>
  );
}

function TableCell304() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2140px] top-[1231px] w-[170px]" data-name="Table Cell">
      <Link41 />
      <Link42 />
    </div>
  );
}

function Text126() {
  return <div className="absolute bg-white border border-[#d9d9d9] border-solid left-[8px] rounded-[4px] size-[16px] top-[30px]" data-name="Text" />;
}

function TableCell305() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-0 top-[1308px] w-[32px]" data-name="Table Cell">
      <Text126 />
    </div>
  );
}

function TableCell306() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[32px] top-[1308px] w-[80px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[40.93px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">18</p>
    </div>
  );
}

function TableCell307() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[112px] overflow-clip top-[1308px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">260388PVfc</p>
    </div>
  );
}

function Image17() {
  return <div className="absolute left-[8px] rounded-[4px] size-[60px] top-[8px]" data-name="Image" />;
}

function TableCell308() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[262px] overflow-clip top-[1308px] w-[80px]" data-name="Table Cell">
      <Image17 />
    </div>
  );
}

function TableCell309() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[342px] overflow-clip top-[1308px] w-[240px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">V8 Vantage 2026款 4.0T V8 S Roadster</p>
    </div>
  );
}

function TableCell310() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[582px] overflow-clip top-[1308px] w-[170px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">24555555555555555</p>
    </div>
  );
}

function TableCell311() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[752px] overflow-clip top-[1308px] w-[110px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">111111111111</p>
    </div>
  );
}

function TableCell312() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[862px] overflow-clip top-[1308px] w-[100px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[50.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell313() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[962px] overflow-clip top-[1308px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[85px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">广联</p>
    </div>
  );
}

function TableCell314() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1132px] overflow-clip top-[1308px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">测试</p>
    </div>
  );
}

function TableCell315() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1282px] overflow-clip top-[1308px] w-[180px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell316() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1462px] overflow-clip top-[1308px] w-[130px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">11</p>
    </div>
  );
}

function TableCell317() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1592px] overflow-clip top-[1308px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-03-27 19:24:05</p>
    </div>
  );
}

function TableCell318() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1762px] overflow-clip top-[1308px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.13px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-03-31 14:56:52</p>
    </div>
  );
}

function TableCell319() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1932px] overflow-clip top-[1308px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell320() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[2102px] overflow-clip top-[1308px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.4px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-04-24 14:26:48</p>
    </div>
  );
}

function Text128() {
  return (
    <div className="absolute bg-[#fff3e5] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-0 rounded-[4px] top-[-2px] w-[76px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-[7px] not-italic text-[#fc8b0a] text-[12px] top-px whitespace-nowrap">待关联拍场</p>
    </div>
  );
}

function Link43() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Link">
      <Text128 />
    </div>
  );
}

function Text127() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.5px] items-start left-[8px] overflow-clip pt-[2.5px] top-[26.75px] w-[84px]" data-name="Text">
      <Link43 />
    </div>
  );
}

function TableCell321() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2040px] top-[1308px] w-[100px]" data-name="Table Cell">
      <Text127 />
    </div>
  );
}

function Button39() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">查看档案</p>
    </div>
  );
}

function Link44() {
  return (
    <div className="absolute h-[16.5px] left-[13px] top-[29.5px] w-[72px]" data-name="Link">
      <Button39 />
    </div>
  );
}

function Button40() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">安排上拍</p>
    </div>
  );
}

function Link45() {
  return (
    <div className="absolute h-[16.5px] left-[85px] top-[29.5px] w-[72px]" data-name="Link">
      <Button40 />
    </div>
  );
}

function TableCell322() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2140px] top-[1308px] w-[170px]" data-name="Table Cell">
      <Link44 />
      <Link45 />
    </div>
  );
}

function Text129() {
  return <div className="absolute bg-white border border-[#d9d9d9] border-solid left-[8px] rounded-[4px] size-[16px] top-[30px]" data-name="Text" />;
}

function TableCell323() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-0 top-[1385px] w-[32px]" data-name="Table Cell">
      <Text129 />
    </div>
  );
}

function TableCell324() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[32px] top-[1385px] w-[80px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[40.45px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">19</p>
    </div>
  );
}

function TableCell325() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[112px] overflow-clip top-[1385px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">260347NUpd</p>
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute left-[8px] rounded-[4px] size-[60px] top-[8px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgContainer11} />
    </div>
  );
}

function TableCell326() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[262px] overflow-clip top-[1385px] w-[80px]" data-name="Table Cell">
      <Container89 />
    </div>
  );
}

function TableCell327() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[342px] overflow-clip top-[1385px] w-[240px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">小米SU7 2026款 Max</p>
    </div>
  );
}

function TableCell328() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[582px] overflow-clip top-[1385px] w-[170px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">LFMCM1CX9L0095398</p>
    </div>
  );
}

function TableCell329() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[752px] overflow-clip top-[1385px] w-[110px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">浙J0JJJU5M2</p>
    </div>
  );
}

function TableCell330() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[862px] overflow-clip top-[1385px] w-[100px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[50.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell331() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[962px] overflow-clip top-[1385px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[85px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">广联</p>
    </div>
  );
}

function TableCell332() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1132px] overflow-clip top-[1385px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">测试</p>
    </div>
  );
}

function TableCell333() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1282px] overflow-clip top-[1385px] w-[180px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">广东省深圳市</p>
    </div>
  );
}

function TableCell334() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1462px] overflow-clip top-[1385px] w-[130px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">陆汉林</p>
    </div>
  );
}

function TableCell335() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1592px] overflow-clip top-[1385px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.12px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-03-26 14:26:00</p>
    </div>
  );
}

function TableCell336() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1762px] overflow-clip top-[1385px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.02px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-03-27 10:48:26</p>
    </div>
  );
}

function TableCell337() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[1932px] overflow-clip top-[1385px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell338() {
  return (
    <div className="absolute border-[#f0f0f0] border-solid border-t h-[77px] left-[2102px] overflow-clip top-[1385px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.14px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-03-27 15:45:38</p>
    </div>
  );
}

function Text131() {
  return (
    <div className="absolute bg-[#fff3e5] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-0 rounded-[4px] top-[-2px] w-[76px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-[7px] not-italic text-[#fc8b0a] text-[12px] top-px whitespace-nowrap">待关联拍场</p>
    </div>
  );
}

function Link46() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Link">
      <Text131 />
    </div>
  );
}

function Text130() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.5px] items-start left-[8px] overflow-clip pt-[2.5px] top-[26.75px] w-[84px]" data-name="Text">
      <Link46 />
    </div>
  );
}

function TableCell339() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2040px] top-[1385px] w-[100px]" data-name="Table Cell">
      <Text130 />
    </div>
  );
}

function Button41() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">查看档案</p>
    </div>
  );
}

function Link47() {
  return (
    <div className="absolute h-[16.5px] left-[13px] top-[29.5px] w-[72px]" data-name="Link">
      <Button41 />
    </div>
  );
}

function Button42() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">安排上拍</p>
    </div>
  );
}

function Link48() {
  return (
    <div className="absolute h-[16.5px] left-[85px] top-[29.5px] w-[72px]" data-name="Link">
      <Button42 />
    </div>
  );
}

function TableCell340() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-solid border-t h-[77px] left-[2140px] top-[1385px] w-[170px]" data-name="Table Cell">
      <Link47 />
      <Link48 />
    </div>
  );
}

function Text132() {
  return <div className="absolute bg-white border border-[#d9d9d9] border-solid left-[8px] rounded-[4px] size-[16px] top-[30px]" data-name="Text" />;
}

function TableCell341() {
  return (
    <div className="absolute border-[#f0f0f0] border-b border-solid border-t h-[78px] left-0 top-[1462px] w-[32px]" data-name="Table Cell">
      <Text132 />
    </div>
  );
}

function TableCell342() {
  return (
    <div className="absolute border-[#f0f0f0] border-b border-solid border-t h-[78px] left-[32px] top-[1462px] w-[80px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[39.52px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">20</p>
    </div>
  );
}

function TableCell343() {
  return (
    <div className="absolute border-[#f0f0f0] border-b border-solid border-t h-[78px] left-[112px] overflow-clip top-[1462px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">26032v1wFW</p>
    </div>
  );
}

function Image18() {
  return <div className="absolute left-[8px] rounded-[4px] size-[60px] top-[8px]" data-name="Image" />;
}

function TableCell344() {
  return (
    <div className="absolute border-[#f0f0f0] border-b border-solid border-t h-[78px] left-[262px] overflow-clip top-[1462px] w-[80px]" data-name="Table Cell">
      <Image18 />
    </div>
  );
}

function TableCell345() {
  return (
    <div className="absolute border-[#f0f0f0] border-b border-solid border-t h-[78px] left-[342px] overflow-clip top-[1462px] w-[240px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">享界S9T 2025款 纯电 后驱Max</p>
    </div>
  );
}

function TableCell346() {
  return (
    <div className="absolute border-[#f0f0f0] border-b border-solid border-t h-[78px] left-[582px] overflow-clip top-[1462px] w-[170px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">SN3B87N0CP02EKF00</p>
    </div>
  );
}

function TableCell347() {
  return (
    <div className="absolute border-[#f0f0f0] border-b border-solid border-t h-[78px] left-[752px] overflow-clip top-[1462px] w-[110px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">津Q0YQH4</p>
    </div>
  );
}

function TableCell348() {
  return (
    <div className="absolute border-[#f0f0f0] border-b border-solid border-t h-[78px] left-[862px] overflow-clip top-[1462px] w-[100px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[50.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell349() {
  return (
    <div className="absolute border-[#f0f0f0] border-b border-solid border-t h-[78px] left-[962px] overflow-clip top-[1462px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[85px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">广联</p>
    </div>
  );
}

function TableCell350() {
  return (
    <div className="absolute border-[#f0f0f0] border-b border-solid border-t h-[78px] left-[1132px] overflow-clip top-[1462px] w-[150px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">测试</p>
    </div>
  );
}

function TableCell351() {
  return (
    <div className="absolute border-[#f0f0f0] border-b border-solid border-t h-[78px] left-[1282px] overflow-clip top-[1462px] w-[180px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">厕所</p>
    </div>
  );
}

function TableCell352() {
  return (
    <div className="absolute border-[#f0f0f0] border-b border-solid border-t h-[78px] left-[1462px] overflow-clip top-[1462px] w-[130px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[8px] not-italic text-[#2f3133] text-[14px] top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">胡庚美</p>
    </div>
  );
}

function TableCell353() {
  return (
    <div className="absolute border-[#f0f0f0] border-b border-solid border-t h-[78px] left-[1592px] overflow-clip top-[1462px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.44px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-03-25 18:32:03</p>
    </div>
  );
}

function TableCell354() {
  return (
    <div className="absolute border-[#f0f0f0] border-b border-solid border-t h-[78px] left-[1762px] overflow-clip top-[1462px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.62px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-03-31 13:55:57</p>
    </div>
  );
}

function TableCell355() {
  return (
    <div className="absolute border-[#f0f0f0] border-b border-solid border-t h-[78px] left-[1932px] overflow-clip top-[1462px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.27px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell356() {
  return (
    <div className="absolute border-[#f0f0f0] border-b border-solid border-t h-[78px] left-[2102px] overflow-clip top-[1462px] w-[170px]" data-name="Table Cell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[85.34px] not-italic text-[#2f3133] text-[14px] text-center top-[27.5px] tracking-[-0.1504px] whitespace-nowrap">2026-03-31 14:55:25</p>
    </div>
  );
}

function Text134() {
  return (
    <div className="bg-[#e7f2fe] h-[22px] relative rounded-[4px] shrink-0 w-full" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#288bfa] text-[12px] top-[2px] whitespace-nowrap">待签署合同</p>
    </div>
  );
}

function Text133() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.5px] items-start left-[8px] overflow-clip pr-[8px] pt-[0.5px] top-[26.75px] w-[84px]" data-name="Text">
      <Text134 />
    </div>
  );
}

function TableCell357() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-b border-solid border-t h-[78px] left-[2040px] top-[1462px] w-[100px]" data-name="Table Cell">
      <Text133 />
    </div>
  );
}

function Button43() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-0 rounded-[4px] top-[-3.5px] w-[72px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[35px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">查看档案</p>
    </div>
  );
}

function Link49() {
  return (
    <div className="absolute h-[16.5px] left-[49px] top-[17.5px] w-[72px]" data-name="Link">
      <Button43 />
    </div>
  );
}

function Button44() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-[35px] rounded-[4px] top-[38px] w-[100px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-[49px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">查看拍卖订单</p>
    </div>
  );
}

function TableCell358() {
  return (
    <div className="absolute bg-white border-[#f0f0f0] border-b border-solid border-t h-[78px] left-[2140px] top-[1462px] w-[170px]" data-name="Table Cell">
      <Link49 />
      <Button44 />
    </div>
  );
}

function Table1() {
  return (
    <div className="h-[1540px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Table">
      <Text67 />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
      <TableCell35 />
      <TableCell36 />
      <TableCell37 />
      <TableCell38 />
      <TableCell39 />
      <TableCell40 />
      <TableCell41 />
      <TableCell42 />
      <TableCell43 />
      <TableCell44 />
      <TableCell45 />
      <TableCell46 />
      <TableCell47 />
      <TableCell48 />
      <TableCell49 />
      <TableCell50 />
      <TableCell51 />
      <TableCell52 />
      <TableCell53 />
      <TableCell54 />
      <TableCell55 />
      <TableCell56 />
      <TableCell57 />
      <TableCell58 />
      <TableCell59 />
      <TableCell60 />
      <TableCell61 />
      <TableCell62 />
      <TableCell63 />
      <TableCell64 />
      <TableCell65 />
      <TableCell66 />
      <TableCell67 />
      <TableCell68 />
      <TableCell69 />
      <TableCell70 />
      <TableCell71 />
      <TableCell72 />
      <TableCell73 />
      <TableCell74 />
      <TableCell75 />
      <TableCell76 />
      <TableCell77 />
      <TableCell78 />
      <TableCell79 />
      <TableCell80 />
      <TableCell81 />
      <TableCell82 />
      <TableCell83 />
      <TableCell84 />
      <TableCell85 />
      <TableCell86 />
      <TableCell87 />
      <TableCell88 />
      <TableCell89 />
      <TableCell90 />
      <TableCell91 />
      <TableCell92 />
      <TableCell93 />
      <TableCell94 />
      <TableCell95 />
      <TableCell96 />
      <TableCell97 />
      <TableCell98 />
      <TableCell99 />
      <TableCell100 />
      <TableCell101 />
      <TableCell102 />
      <TableCell103 />
      <TableCell104 />
      <TableCell105 />
      <TableCell106 />
      <TableCell107 />
      <TableCell108 />
      <TableCell109 />
      <TableCell110 />
      <TableCell111 />
      <TableCell112 />
      <TableCell113 />
      <TableCell114 />
      <TableCell115 />
      <TableCell116 />
      <TableCell117 />
      <TableCell118 />
      <TableCell119 />
      <TableCell120 />
      <TableCell121 />
      <TableCell122 />
      <TableCell123 />
      <TableCell124 />
      <TableCell125 />
      <TableCell126 />
      <TableCell127 />
      <TableCell128 />
      <TableCell129 />
      <TableCell130 />
      <TableCell131 />
      <TableCell132 />
      <TableCell133 />
      <TableCell134 />
      <TableCell135 />
      <TableCell136 />
      <TableCell137 />
      <TableCell138 />
      <TableCell139 />
      <TableCell140 />
      <TableCell141 />
      <TableCell142 />
      <TableCell143 />
      <TableCell144 />
      <TableCell145 />
      <TableCell146 />
      <TableCell147 />
      <TableCell148 />
      <TableCell149 />
      <TableCell150 />
      <TableCell151 />
      <TableCell152 />
      <TableCell153 />
      <TableCell154 />
      <TableCell155 />
      <TableCell156 />
      <TableCell157 />
      <TableCell158 />
      <TableCell159 />
      <TableCell160 />
      <TableCell161 />
      <TableCell162 />
      <TableCell163 />
      <TableCell164 />
      <TableCell165 />
      <TableCell166 />
      <TableCell167 />
      <TableCell168 />
      <TableCell169 />
      <TableCell170 />
      <TableCell171 />
      <TableCell172 />
      <TableCell173 />
      <TableCell174 />
      <TableCell175 />
      <TableCell176 />
      <TableCell177 />
      <TableCell178 />
      <TableCell179 />
      <TableCell180 />
      <TableCell181 />
      <TableCell182 />
      <TableCell183 />
      <TableCell184 />
      <TableCell185 />
      <TableCell186 />
      <TableCell187 />
      <TableCell188 />
      <TableCell189 />
      <TableCell190 />
      <TableCell191 />
      <TableCell192 />
      <TableCell193 />
      <TableCell194 />
      <TableCell195 />
      <TableCell196 />
      <TableCell197 />
      <TableCell198 />
      <TableCell199 />
      <TableCell200 />
      <TableCell201 />
      <TableCell202 />
      <TableCell203 />
      <TableCell204 />
      <TableCell205 />
      <TableCell206 />
      <TableCell207 />
      <TableCell208 />
      <TableCell209 />
      <TableCell210 />
      <TableCell211 />
      <TableCell212 />
      <TableCell213 />
      <TableCell214 />
      <TableCell215 />
      <TableCell216 />
      <TableCell217 />
      <TableCell218 />
      <TableCell219 />
      <TableCell220 />
      <TableCell221 />
      <TableCell222 />
      <TableCell223 />
      <TableCell224 />
      <TableCell225 />
      <TableCell226 />
      <TableCell227 />
      <TableCell228 />
      <TableCell229 />
      <TableCell230 />
      <TableCell231 />
      <TableCell232 />
      <TableCell233 />
      <TableCell234 />
      <TableCell235 />
      <TableCell236 />
      <TableCell237 />
      <TableCell238 />
      <TableCell239 />
      <TableCell240 />
      <TableCell241 />
      <TableCell242 />
      <TableCell243 />
      <TableCell244 />
      <TableCell245 />
      <TableCell246 />
      <TableCell247 />
      <TableCell248 />
      <TableCell249 />
      <TableCell250 />
      <TableCell251 />
      <TableCell252 />
      <TableCell253 />
      <TableCell254 />
      <TableCell255 />
      <TableCell256 />
      <TableCell257 />
      <TableCell258 />
      <TableCell259 />
      <TableCell260 />
      <TableCell261 />
      <TableCell262 />
      <TableCell263 />
      <TableCell264 />
      <TableCell265 />
      <TableCell266 />
      <TableCell267 />
      <TableCell268 />
      <TableCell269 />
      <TableCell270 />
      <TableCell271 />
      <TableCell272 />
      <TableCell273 />
      <TableCell274 />
      <TableCell275 />
      <TableCell276 />
      <TableCell277 />
      <TableCell278 />
      <TableCell279 />
      <TableCell280 />
      <TableCell281 />
      <TableCell282 />
      <TableCell283 />
      <TableCell284 />
      <TableCell285 />
      <TableCell286 />
      <TableCell287 />
      <TableCell288 />
      <TableCell289 />
      <TableCell290 />
      <TableCell291 />
      <TableCell292 />
      <TableCell293 />
      <TableCell294 />
      <TableCell295 />
      <TableCell296 />
      <TableCell297 />
      <TableCell298 />
      <TableCell299 />
      <TableCell300 />
      <TableCell301 />
      <TableCell302 />
      <TableCell303 />
      <TableCell304 />
      <TableCell305 />
      <TableCell306 />
      <TableCell307 />
      <TableCell308 />
      <TableCell309 />
      <TableCell310 />
      <TableCell311 />
      <TableCell312 />
      <TableCell313 />
      <TableCell314 />
      <TableCell315 />
      <TableCell316 />
      <TableCell317 />
      <TableCell318 />
      <TableCell319 />
      <TableCell320 />
      <TableCell321 />
      <TableCell322 />
      <TableCell323 />
      <TableCell324 />
      <TableCell325 />
      <TableCell326 />
      <TableCell327 />
      <TableCell328 />
      <TableCell329 />
      <TableCell330 />
      <TableCell331 />
      <TableCell332 />
      <TableCell333 />
      <TableCell334 />
      <TableCell335 />
      <TableCell336 />
      <TableCell337 />
      <TableCell338 />
      <TableCell339 />
      <TableCell340 />
      <TableCell341 />
      <TableCell342 />
      <TableCell343 />
      <TableCell344 />
      <TableCell345 />
      <TableCell346 />
      <TableCell347 />
      <TableCell348 />
      <TableCell349 />
      <TableCell350 />
      <TableCell351 />
      <TableCell352 />
      <TableCell353 />
      <TableCell354 />
      <TableCell355 />
      <TableCell356 />
      <TableCell357 />
      <TableCell358 />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col h-[891px] items-start overflow-clip pr-[-226px] relative shrink-0 w-full" data-name="Container">
      <Table1 />
    </div>
  );
}

function Container61() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[930px] items-start relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Container">
      <Container62 />
      <Container74 />
    </div>
  );
}

function ListItem3() {
  return (
    <div className="absolute h-[24px] left-[1750.13px] top-0 w-[235.992px]" data-name="List Item">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">显示第1到第20条记录，总共47条记录</p>
    </div>
  );
}

function Icon41() {
  return (
    <div className="absolute left-0 size-[12px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p34973b30} fill="var(--fill-0, black)" fillOpacity="0.25" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageLeft1() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Image - left">
      <Icon41 />
    </div>
  );
}

function Button45() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[1994.13px] pb-px pt-[5.5px] px-[6px] rounded-[6px] size-[24px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <ImageLeft1 />
    </div>
  );
}

function Link50() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="Link">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] left-[11.1px] not-italic text-[#1956fe] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">1</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[2018.13px] p-px rounded-[6px] size-[24px] top-0" data-name="List Item">
      <div aria-hidden="true" className="absolute border border-[#1956fe] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Link50 />
    </div>
  );
}

function Link51() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="Link">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[11.34px] not-italic text-[14px] text-[rgba(0,0,0,0.88)] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">2</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[2042.13px] p-px rounded-[6px] size-[24px] top-0" data-name="List Item">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Link51 />
    </div>
  );
}

function Link52() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="Link">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[11.18px] not-italic text-[14px] text-[rgba(0,0,0,0.88)] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">3</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[2066.13px] p-px rounded-[6px] size-[24px] top-0" data-name="List Item">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Link52 />
    </div>
  );
}

function Icon42() {
  return (
    <div className="absolute left-0 size-[12px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p26bc2372} fill="var(--fill-0, black)" fillOpacity="0.88" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageRight() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Image - right">
      <Icon42 />
    </div>
  );
}

function Button46() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[2090.13px] pb-px pt-[5.5px] px-[6px] rounded-[6px] size-[24px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <ImageRight />
    </div>
  );
}

function Text135() {
  return (
    <div className="absolute h-[22px] left-[7px] overflow-clip top-0 w-[73.875px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">20 条/页</p>
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute bg-white border border-[#d9d9d9] border-solid h-[24px] left-0 rounded-[4px] top-0 w-[89.875px]" data-name="Container">
      <Text135 />
    </div>
  );
}

function Icon43() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[21.43%_7.59%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1784 6.85714">
            <path d={svgPaths.p34902c00} fill="var(--fill-0, black)" fillOpacity="0.25" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text136() {
  return (
    <div className="absolute content-stretch flex items-center left-[66.88px] size-[12px] top-[6px]" data-name="Text">
      <Icon43 />
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[89.875px]" data-name="Container">
      <Container91 />
      <Text136 />
    </div>
  );
}

function TextInput14() {
  return <div className="absolute bg-white border border-[#d9d9d9] border-solid h-[24px] left-[36px] rounded-[4px] top-[0.5px] w-[44px]" data-name="Text Input" />;
}

function Container92() {
  return (
    <div className="absolute h-[24px] left-[97.88px] top-0 w-[102px]" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">跳至</p>
      <TextInput14 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] left-[88px] not-italic text-[14px] text-[rgba(0,0,0,0.88)] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">页</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="absolute h-[24px] left-[2116.13px] top-0 w-[199.875px]" data-name="List Item">
      <Container90 />
      <Container92 />
    </div>
  );
}

function List4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List">
      <ListItem3 />
      <Button45 />
      <ListItem4 />
      <ListItem5 />
      <ListItem6 />
      <Button46 />
      <ListItem7 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[970px] items-start relative shrink-0 w-full" data-name="Container">
      <Container61 />
      <List4 />
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex flex-col h-[986px] items-start left-[2px] top-[267px] w-[2316px]" data-name="Container">
      <Container60 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[1255px] left-0 rounded-bl-[10px] rounded-br-[10px] top-[56.14px] w-[2320px]" data-name="Container">
      <Form />
      <Link1 />
      <Button4 />
      <Container59 />
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-white h-[1311.141px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container24 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[1176px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[16px] pr-[22px] pt-[12px] relative size-full">
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[1185px] items-start left-[200px] pt-px px-px top-0 w-[2360px]" data-name="Main Content">
      <Container17 />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-[#f5f5f5] flex-[1185_0_0] min-h-px relative w-[2560px]" data-name="Section">
      <Sidebar />
      <MainContent />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col h-[1241px] items-start relative shrink-0 w-full" data-name="Section">
      <Header />
      <Section1 />
    </div>
  );
}

function Container93() {
  return <div className="h-0 shrink-0 w-full" data-name="Container" />;
}

function Body() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1241px] items-start left-0 top-0 w-[2560px]" data-name="Body">
      <Section />
      <Container93 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="专电优拍">
      <Body />
    </div>
  );
}