function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#202124] text-[24px] top-0 tracking-[0.0703px] whitespace-nowrap">车辆全生命周期</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#80868b] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">追踪车辆跨平台处置状态，管理处置策略与记录</p>
    </div>
  );
}

function Body() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[65px] items-start left-[576.5px] top-[80px] w-[1392px]" data-name="Body">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[21px] relative shrink-0 w-[56px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#5f6368] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">筛选条件</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[21px] relative shrink-0 w-[10.602px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#1a73e8] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">▲</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[21px] relative shrink-0 w-[42.602px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] min-w-px not-italic relative text-[#1a73e8] text-[14px] tracking-[-0.1504px] whitespace-nowrap">收起</p>
        <Text2 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[21px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Label() {
  return (
    <div className="h-[18px] relative shrink-0 w-[257.594px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#80868b] text-[12px] top-px whitespace-nowrap">车架号/VIN</p>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[6px] w-[257.594px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <p className="font-['Arial:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          支持模糊搜索
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dadce0] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[60px] items-start left-0 top-0 w-[257.594px]" data-name="Container">
      <Label />
      <TextInput />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[257.602px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#80868b] text-[12px] top-px whitespace-nowrap">车牌号</p>
      </div>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[6px] w-[257.602px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <p className="font-['Arial:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          支持模糊搜索
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dadce0] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[60px] items-start left-[273.59px] top-0 w-[257.602px]" data-name="Container">
      <Label1 />
      <TextInput1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[257.602px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#80868b] text-[12px] top-px whitespace-nowrap">所属门店</p>
      </div>
    </div>
  );
}

function Option() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option1() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option2() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Dropdown() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[6px] w-[257.602px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#dadce0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pl-[-1143.695px] pr-[1401.297px] pt-[-250px] relative size-full">
        <Option />
        <Option1 />
        <Option2 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[60px] items-start left-[547.2px] top-0 w-[257.602px]" data-name="Container">
      <Label2 />
      <Dropdown />
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[18px] relative shrink-0 w-[257.602px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#80868b] text-[12px] top-px whitespace-nowrap">当前处置平台</p>
      </div>
    </div>
  );
}

function Option3() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option4() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option5() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option6() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option7() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Dropdown1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[6px] w-[257.602px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#dadce0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pl-[-1417.297px] pr-[1674.898px] pt-[-250px] relative size-full">
        <Option3 />
        <Option4 />
        <Option5 />
        <Option6 />
        <Option7 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[60px] items-start left-[820.8px] top-0 w-[257.602px]" data-name="Container">
      <Label3 />
      <Dropdown1 />
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[18px] relative shrink-0 w-[257.602px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#80868b] text-[12px] top-px whitespace-nowrap">处置状态</p>
      </div>
    </div>
  );
}

function Option8() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option9() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option10() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option11() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option12() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option13() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Dropdown2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[6px] w-[257.602px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#dadce0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pl-[-1690.898px] pr-[1948.5px] pt-[-250px] relative size-full">
        <Option8 />
        <Option9 />
        <Option10 />
        <Option11 />
        <Option12 />
        <Option13 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[60px] items-start left-[1094.4px] top-0 w-[257.602px]" data-name="Container">
      <Label4 />
      <Dropdown2 />
    </div>
  );
}

function Label5() {
  return (
    <div className="h-[18px] relative shrink-0 w-[257.594px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#80868b] text-[12px] top-px whitespace-nowrap">策略状态</p>
      </div>
    </div>
  );
}

function Option14() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option15() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option16() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option17() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option18() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Dropdown3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[6px] w-[257.594px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#dadce0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pl-[-596.5px] pr-[854.094px] pt-[-326px] relative size-full">
        <Option14 />
        <Option15 />
        <Option16 />
        <Option17 />
        <Option18 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[60px] items-start left-0 top-[76px] w-[257.594px]" data-name="Container">
      <Label5 />
      <Dropdown3 />
    </div>
  );
}

function Label6() {
  return (
    <div className="h-[18px] relative shrink-0 w-[257.602px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#80868b] text-[12px] top-px whitespace-nowrap">处置方式</p>
      </div>
    </div>
  );
}

function Option19() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option20() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option21() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option22() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Dropdown4() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[6px] w-[257.602px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#dadce0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pl-[-870.094px] pr-[1127.695px] pt-[-326px] relative size-full">
        <Option19 />
        <Option20 />
        <Option21 />
        <Option22 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[60px] items-start left-[273.59px] top-[76px] w-[257.602px]" data-name="Container">
      <Label6 />
      <Dropdown4 />
    </div>
  );
}

function Label7() {
  return (
    <div className="h-[18px] relative shrink-0 w-[257.602px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#80868b] text-[12px] top-px whitespace-nowrap">车辆来源</p>
      </div>
    </div>
  );
}

function Option23() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option24() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option25() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Dropdown5() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[6px] w-[257.602px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#dadce0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pl-[-1143.695px] pr-[1401.297px] pt-[-326px] relative size-full">
        <Option23 />
        <Option24 />
        <Option25 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[60px] items-start left-[547.2px] top-[76px] w-[257.602px]" data-name="Container">
      <Label7 />
      <Dropdown5 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[136px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[36px] relative rounded-[6px] shrink-0 w-[62px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dadce0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[17px] py-px relative size-full">
        <p className="font-['Arial:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#5f6368] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          重置
        </p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#1a73e8] h-[36px] relative rounded-[6px] shrink-0 w-[60px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[16px] relative size-full">
        <p className="font-['Arial:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[normal] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          筛选
        </p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-start justify-end relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[16px] h-[265px] items-start left-[576.5px] pt-[20px] px-[20px] rounded-[8px] top-[169px] w-[1392px]" data-name="Container">
      <Container1 />
      <Container2 />
      <Container11 />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[16px] top-[10px] w-[8.18px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">+</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#1a73e8] h-[36px] relative rounded-[6px] shrink-0 w-[102.18px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text3 />
        <p className="-translate-x-1/2 absolute font-['Arial:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] left-[58.18px] text-[14px] text-center text-white top-[10.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>{` 制定策略`}</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white flex-[1_0_0] h-[36px] min-w-px relative rounded-[6px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dadce0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid leading-[normal] relative size-full text-[#5f6368] text-[14px] text-center whitespace-nowrap">
        <p className="-translate-x-1/2 absolute font-['Arial:Regular',sans-serif] left-[20.5px] not-italic top-[10px]">↓</p>
        <p className="-translate-x-1/2 absolute font-['Arial:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] left-[58px] top-[10.5px]" style={{ fontVariationSettings: "'wght' 400" }}>{` 导出数据`}</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[36px] relative shrink-0 w-[217.18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[#e8f0fe] h-[27.5px] relative rounded-[12px] shrink-0 w-[86.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[19.5px] left-[12px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] whitespace-nowrap">共 20 辆车</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[68px] items-center justify-between left-[576.5px] px-[20px] py-[16px] rounded-[8px] top-[450px] w-[1392px]" data-name="Container">
      <Container13 />
      <Text4 />
    </div>
  );
}

function Checkbox() {
  return <div className="absolute left-[16px] size-[13px] top-[14.5px]" data-name="Checkbox" />;
}

function HeaderCell() {
  return (
    <div className="absolute border-[#e8eaed] border-b border-solid h-[45.5px] left-0 top-0 w-[45px]" data-name="Header Cell">
      <Checkbox />
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute border-[#e8eaed] border-b border-solid h-[45.5px] left-[45px] top-0 w-[60px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#5f6368] text-[14px] top-[12px] tracking-[-0.1504px] whitespace-nowrap">序号</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute border-[#e8eaed] border-b border-solid h-[45.5px] left-[105px] top-0 w-[184.984px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#5f6368] text-[14px] top-[12px] tracking-[-0.1504px] whitespace-nowrap">车架号(VIN)</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute border-[#e8eaed] border-b border-solid h-[45.5px] left-[289.98px] top-0 w-[83.258px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#5f6368] text-[14px] top-[12px] tracking-[-0.1504px] whitespace-nowrap">车牌号</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute border-[#e8eaed] border-b border-solid h-[45.5px] left-[373.24px] top-0 w-[92.258px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#5f6368] text-[14px] top-[12px] tracking-[-0.1504px] whitespace-nowrap">品牌/车型</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute border-[#e8eaed] border-b border-solid h-[45.5px] left-[465.5px] top-0 w-[88px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#5f6368] text-[14px] top-[12px] tracking-[-0.1504px] whitespace-nowrap">所属门店</p>
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="absolute border-[#e8eaed] border-b border-solid h-[45.5px] left-[553.5px] top-0 w-[88px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#5f6368] text-[14px] top-[12px] tracking-[-0.1504px] whitespace-nowrap">车辆来源</p>
    </div>
  );
}

function HeaderCell7() {
  return (
    <div className="absolute border-[#e8eaed] border-b border-solid h-[45.5px] left-[641.5px] top-0 w-[116px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#5f6368] text-[14px] top-[12px] tracking-[-0.1504px] whitespace-nowrap">当前处置平台</p>
    </div>
  );
}

function HeaderCell8() {
  return (
    <div className="absolute border-[#e8eaed] border-b border-solid h-[45.5px] left-[757.5px] top-0 w-[88px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#5f6368] text-[14px] top-[12px] tracking-[-0.1504px] whitespace-nowrap">处置状态</p>
    </div>
  );
}

function HeaderCell9() {
  return (
    <div className="absolute border-[#e8eaed] border-b border-solid h-[45.5px] left-[845.5px] top-0 w-[88px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#5f6368] text-[14px] top-[12px] tracking-[-0.1504px] whitespace-nowrap">策略状态</p>
    </div>
  );
}

function HeaderCell10() {
  return (
    <div className="absolute border-[#e8eaed] border-b border-solid h-[45.5px] left-[933.5px] top-0 w-[88px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#5f6368] text-[14px] top-[12px] tracking-[-0.1504px] whitespace-nowrap">处置方式</p>
    </div>
  );
}

function HeaderCell11() {
  return (
    <div className="absolute border-[#e8eaed] border-b border-solid h-[45.5px] left-[1021.5px] top-0 w-[93.359px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#5f6368] text-[14px] top-[12px] tracking-[-0.1504px] whitespace-nowrap">收购价格</p>
    </div>
  );
}

function HeaderCell12() {
  return (
    <div className="absolute border-[#e8eaed] border-b border-solid h-[45.5px] left-[1114.86px] top-0 w-[93.555px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#5f6368] text-[14px] top-[12px] tracking-[-0.1504px] whitespace-nowrap">拍卖价格</p>
    </div>
  );
}

function HeaderCell13() {
  return (
    <div className="absolute border-[#e8eaed] border-b border-solid h-[45.5px] left-[1208.41px] top-0 w-[88px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#5f6368] text-[14px] top-[12px] tracking-[-0.1504px] whitespace-nowrap">收拍利润</p>
    </div>
  );
}

function HeaderCell14() {
  return (
    <div className="absolute border-[#e8eaed] border-b border-solid h-[45.5px] left-[1296.41px] top-0 w-[88px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#5f6368] text-[14px] top-[12px] tracking-[-0.1504px] whitespace-nowrap">入库时间</p>
    </div>
  );
}

function HeaderCell15() {
  return (
    <div className="absolute border-[#e8eaed] border-b border-solid h-[45.5px] left-[1384.41px] top-0 w-[135px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#5f6368] text-[14px] top-[12px] tracking-[-0.1504px] whitespace-nowrap">操作</p>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute bg-[#f8f9fa] h-[45.5px] left-0 top-0 w-[1519.414px]" data-name="Table Header">
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
    </div>
  );
}

function Checkbox1() {
  return <div className="absolute left-[16px] size-[13px] top-[38px]" data-name="Checkbox" />;
}

function TableCell() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-0 top-[45.5px] w-[45px]" data-name="Table Cell">
      <Checkbox1 />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[45px] top-[45.5px] w-[60px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">1</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[105px] top-[45.5px] w-[184.984px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#1a73e8] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">LVSHBFAD5GF402835</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[289.98px] top-[45.5px] w-[83.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[52px]">粤B8***Y</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[373.24px] top-[45.5px] w-[92.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[61px]">福特/蒙迪欧</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[465.5px] top-[45.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[56px]">北京朝阳店</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[553.5px] top-[45.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">专电优拍</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute bg-[#e8f0fe] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[64px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#1a73e8] text-[12px] top-[3px] whitespace-nowrap">专电优拍</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[641.5px] top-[45.5px] w-[116px]" data-name="Table Cell">
      <Text5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute bg-[#e6f4ea] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#137333] text-[12px] top-[3px] whitespace-nowrap">已成交</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[757.5px] top-[45.5px] w-[88px]" data-name="Table Cell">
      <Text6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute bg-[#e6f4ea] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#137333] text-[12px] top-[3px] whitespace-nowrap">执行中</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[845.5px] top-[45.5px] w-[88px]" data-name="Table Cell">
      <Text7 />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[933.5px] top-[45.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">拍卖</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1021.5px] top-[45.5px] w-[93.359px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">¥85,000</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1114.86px] top-[45.5px] w-[93.555px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">¥92,500</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1208.41px] top-[45.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#34a853] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">+7,500</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1296.41px] top-[45.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[14.5px] tracking-[-0.1504px] w-[56px]">2026-04-15 10:30</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[47px] relative rounded-[4px] shrink-0 w-[47.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">查看详情</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="flex-[1_0_0] h-[47px] min-w-px relative rounded-[4px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">添加记录</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[47px] items-start left-[16px] top-[22.5px] w-[103px]" data-name="Container">
      <Text8 />
      <Text9 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1384.41px] top-[45.5px] w-[135px]" data-name="Table Cell">
      <Container16 />
    </div>
  );
}

function Checkbox2() {
  return <div className="absolute left-[16px] size-[13px] top-[38px]" data-name="Checkbox" />;
}

function TableCell16() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-0 top-[137.5px] w-[45px]" data-name="Table Cell">
      <Checkbox2 />
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[45px] top-[137.5px] w-[60px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">2</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[105px] top-[137.5px] w-[184.984px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#1a73e8] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">LVSHBFAD6GF402836</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[289.98px] top-[137.5px] w-[83.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[52px]">沪A5***X</p>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[373.24px] top-[137.5px] w-[92.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[61px]">大众/帕萨特</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[465.5px] top-[137.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[56px]">上海浦东店</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[553.5px] top-[137.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">优加发拍</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute bg-[#e8f0fe] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[40px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#1a73e8] text-[12px] top-[3px] whitespace-nowrap">有辆</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[641.5px] top-[137.5px] w-[116px]" data-name="Table Cell">
      <Text10 />
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute bg-[#e8f0fe] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#1a73e8] text-[12px] top-[3px] whitespace-nowrap">竞拍中</p>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[757.5px] top-[137.5px] w-[88px]" data-name="Table Cell">
      <Text11 />
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute bg-[#e6f4ea] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#137333] text-[12px] top-[3px] whitespace-nowrap">执行中</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[845.5px] top-[137.5px] w-[88px]" data-name="Table Cell">
      <Text12 />
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[933.5px] top-[137.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">拍卖</p>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1021.5px] top-[137.5px] w-[93.359px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">¥78,000</p>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1114.86px] top-[137.5px] w-[93.555px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1208.41px] top-[137.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#80868b] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1296.41px] top-[137.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[14.5px] tracking-[-0.1504px] w-[56px]">2026-04-16 14:20</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[47px] relative rounded-[4px] shrink-0 w-[47.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">查看详情</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="flex-[1_0_0] h-[47px] min-w-px relative rounded-[4px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">添加记录</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[47px] items-start left-[16px] top-[22.5px] w-[103px]" data-name="Container">
      <Text13 />
      <Text14 />
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1384.41px] top-[137.5px] w-[135px]" data-name="Table Cell">
      <Container17 />
    </div>
  );
}

function Checkbox3() {
  return <div className="absolute left-[16px] size-[13px] top-[38px]" data-name="Checkbox" />;
}

function TableCell32() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-0 top-[229.5px] w-[45px]" data-name="Table Cell">
      <Checkbox3 />
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[45px] top-[229.5px] w-[60px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">3</p>
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[105px] top-[229.5px] w-[184.984px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#1a73e8] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">LVSHBFAD7GF402837</p>
    </div>
  );
}

function TableCell35() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[289.98px] top-[229.5px] w-[83.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[52px]">粤A2***Z</p>
    </div>
  );
}

function TableCell36() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[373.24px] top-[229.5px] w-[92.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[61px]">丰田/凯美瑞</p>
    </div>
  );
}

function TableCell37() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[465.5px] top-[229.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[56px]">广州天河店</p>
    </div>
  );
}

function TableCell38() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[553.5px] top-[229.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">专电优拍</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute bg-[#e8f0fe] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#1a73e8] text-[12px] top-[3px] whitespace-nowrap">汽车街</p>
    </div>
  );
}

function TableCell39() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[641.5px] top-[229.5px] w-[116px]" data-name="Table Cell">
      <Text15 />
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute bg-[#fce8e6] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[40px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#c5221f] text-[12px] top-[3px] whitespace-nowrap">流拍</p>
    </div>
  );
}

function TableCell40() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[757.5px] top-[229.5px] w-[88px]" data-name="Table Cell">
      <Text16 />
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute bg-[#fef7e0] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#b06000] text-[12px] top-[3px] whitespace-nowrap">待执行</p>
    </div>
  );
}

function TableCell41() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[845.5px] top-[229.5px] w-[88px]" data-name="Table Cell">
      <Text17 />
    </div>
  );
}

function TableCell42() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[933.5px] top-[229.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">拍卖</p>
    </div>
  );
}

function TableCell43() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1021.5px] top-[229.5px] w-[93.359px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">¥92,000</p>
    </div>
  );
}

function TableCell44() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1114.86px] top-[229.5px] w-[93.555px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell45() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1208.41px] top-[229.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#80868b] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell46() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1296.41px] top-[229.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[14.5px] tracking-[-0.1504px] w-[56px]">2026-04-14 09:15</p>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[47px] relative rounded-[4px] shrink-0 w-[47.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">查看详情</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="flex-[1_0_0] h-[47px] min-w-px relative rounded-[4px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">添加记录</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[47px] items-start left-[16px] top-[22.5px] w-[103px]" data-name="Container">
      <Text18 />
      <Text19 />
    </div>
  );
}

function TableCell47() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1384.41px] top-[229.5px] w-[135px]" data-name="Table Cell">
      <Container18 />
    </div>
  );
}

function Checkbox4() {
  return <div className="absolute left-[16px] size-[13px] top-[49.5px]" data-name="Checkbox" />;
}

function TableCell48() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-0 top-[321.5px] w-[45px]" data-name="Table Cell">
      <Checkbox4 />
    </div>
  );
}

function TableCell49() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[45px] top-[321.5px] w-[60px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[47px] tracking-[-0.1504px] whitespace-nowrap">4</p>
    </div>
  );
}

function TableCell50() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[105px] top-[321.5px] w-[184.984px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#1a73e8] text-[14px] top-[47px] tracking-[-0.1504px] whitespace-nowrap">LVSHBFAD8GF402838</p>
    </div>
  );
}

function TableCell51() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[289.98px] top-[321.5px] w-[83.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[36.5px] tracking-[-0.1504px] w-[52px]">京C3***W</p>
    </div>
  );
}

function TableCell52() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[373.24px] top-[321.5px] w-[92.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[47px] tracking-[-0.1504px] whitespace-nowrap">本田/雅阁</p>
    </div>
  );
}

function TableCell53() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[465.5px] top-[321.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[36.5px] tracking-[-0.1504px] w-[56px]">北京朝阳店</p>
    </div>
  );
}

function TableCell54() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[553.5px] top-[321.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[47px] tracking-[-0.1504px] whitespace-nowrap">优加发拍</p>
    </div>
  );
}

function TableCell55() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[641.5px] top-[321.5px] w-[116px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[47px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell56() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[757.5px] top-[321.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[47px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute bg-[#fce8e6] h-[22px] left-[16px] rounded-[4px] top-[46.5px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#c5221f] text-[12px] top-[3px] whitespace-nowrap">未制定</p>
    </div>
  );
}

function TableCell57() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[845.5px] top-[321.5px] w-[88px]" data-name="Table Cell">
      <Text20 />
    </div>
  );
}

function TableCell58() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[933.5px] top-[321.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[47px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell59() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[1021.5px] top-[321.5px] w-[93.359px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[47px] tracking-[-0.1504px] whitespace-nowrap">¥88,000</p>
    </div>
  );
}

function TableCell60() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[1114.86px] top-[321.5px] w-[93.555px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[47px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell61() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[1208.41px] top-[321.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#80868b] text-[14px] top-[47px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell62() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[1296.41px] top-[321.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[26px] tracking-[-0.1504px] w-[56px]">2026-04-17 11:30</p>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[86px] relative rounded-[4px] shrink-0 w-[29px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[13px]">查看详情</p>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[86px] relative rounded-[4px] shrink-0 w-[29px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[13px]">制定策略</p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="flex-[1_0_0] h-[86px] min-w-px relative rounded-[4px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[13px]">添加记录</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[86px] items-start left-[16px] top-[14.5px] w-[103px]" data-name="Container">
      <Text21 />
      <Text22 />
      <Text23 />
    </div>
  );
}

function TableCell63() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[1384.41px] top-[321.5px] w-[135px]" data-name="Table Cell">
      <Container19 />
    </div>
  );
}

function Checkbox5() {
  return <div className="absolute left-[16px] size-[13px] top-[38px]" data-name="Checkbox" />;
}

function TableCell64() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-0 top-[436.5px] w-[45px]" data-name="Table Cell">
      <Checkbox5 />
    </div>
  );
}

function TableCell65() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[45px] top-[436.5px] w-[60px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">5</p>
    </div>
  );
}

function TableCell66() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[105px] top-[436.5px] w-[184.984px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#1a73e8] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">LVSHBFAD9GF402839</p>
    </div>
  );
}

function TableCell67() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[289.98px] top-[436.5px] w-[83.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[52px]">粤B6***V</p>
    </div>
  );
}

function TableCell68() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[373.24px] top-[436.5px] w-[92.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">日产/天籁</p>
    </div>
  );
}

function TableCell69() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[465.5px] top-[436.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[56px]">广州天河店</p>
    </div>
  );
}

function TableCell70() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[553.5px] top-[436.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">专电优拍</p>
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute bg-[#e8f0fe] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#1a73e8] text-[12px] top-[3px] whitespace-nowrap">优信拍</p>
    </div>
  );
}

function TableCell71() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[641.5px] top-[436.5px] w-[116px]" data-name="Table Cell">
      <Text24 />
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute bg-[#fef7e0] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#b06000] text-[12px] top-[3px] whitespace-nowrap">待上架</p>
    </div>
  );
}

function TableCell72() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[757.5px] top-[436.5px] w-[88px]" data-name="Table Cell">
      <Text25 />
    </div>
  );
}

function Text26() {
  return (
    <div className="absolute bg-[#fef7e0] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#b06000] text-[12px] top-[3px] whitespace-nowrap">待执行</p>
    </div>
  );
}

function TableCell73() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[845.5px] top-[436.5px] w-[88px]" data-name="Table Cell">
      <Text26 />
    </div>
  );
}

function TableCell74() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[933.5px] top-[436.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">拍卖</p>
    </div>
  );
}

function TableCell75() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1021.5px] top-[436.5px] w-[93.359px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">¥75,000</p>
    </div>
  );
}

function TableCell76() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1114.86px] top-[436.5px] w-[93.555px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell77() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1208.41px] top-[436.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#80868b] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell78() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1296.41px] top-[436.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[14.5px] tracking-[-0.1504px] w-[56px]">2026-04-18 08:45</p>
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[47px] relative rounded-[4px] shrink-0 w-[47.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">查看详情</p>
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="flex-[1_0_0] h-[47px] min-w-px relative rounded-[4px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">添加记录</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[47px] items-start left-[16px] top-[22.5px] w-[103px]" data-name="Container">
      <Text27 />
      <Text28 />
    </div>
  );
}

function TableCell79() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1384.41px] top-[436.5px] w-[135px]" data-name="Table Cell">
      <Container20 />
    </div>
  );
}

function Checkbox6() {
  return <div className="absolute left-[16px] size-[13px] top-[38px]" data-name="Checkbox" />;
}

function TableCell80() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-0 top-[528.5px] w-[45px]" data-name="Table Cell">
      <Checkbox6 />
    </div>
  );
}

function TableCell81() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[45px] top-[528.5px] w-[60px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">6</p>
    </div>
  );
}

function TableCell82() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[105px] top-[528.5px] w-[184.984px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#1a73e8] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">LVSHBFAD0GF402840</p>
    </div>
  );
}

function TableCell83() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[289.98px] top-[528.5px] w-[83.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[52px]">沪B7***U</p>
    </div>
  );
}

function TableCell84() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[373.24px] top-[528.5px] w-[92.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">宝马/3系</p>
    </div>
  );
}

function TableCell85() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[465.5px] top-[528.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[56px]">上海浦东店</p>
    </div>
  );
}

function TableCell86() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[553.5px] top-[528.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">专电优拍</p>
    </div>
  );
}

function Text29() {
  return (
    <div className="absolute bg-[#e8f0fe] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[64px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#1a73e8] text-[12px] top-[3px] whitespace-nowrap">专电优拍</p>
    </div>
  );
}

function TableCell87() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[641.5px] top-[528.5px] w-[116px]" data-name="Table Cell">
      <Text29 />
    </div>
  );
}

function Text30() {
  return (
    <div className="absolute bg-[#f1f3f4] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#5f6368] text-[12px] top-[3px] whitespace-nowrap">已交付</p>
    </div>
  );
}

function TableCell88() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[757.5px] top-[528.5px] w-[88px]" data-name="Table Cell">
      <Text30 />
    </div>
  );
}

function Text31() {
  return (
    <div className="absolute bg-[#e8f0fe] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#1a73e8] text-[12px] top-[3px] whitespace-nowrap">已完成</p>
    </div>
  );
}

function TableCell89() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[845.5px] top-[528.5px] w-[88px]" data-name="Table Cell">
      <Text31 />
    </div>
  );
}

function TableCell90() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[933.5px] top-[528.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">拍卖</p>
    </div>
  );
}

function TableCell91() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1021.5px] top-[528.5px] w-[93.359px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">¥185,000</p>
    </div>
  );
}

function TableCell92() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1114.86px] top-[528.5px] w-[93.555px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">¥198,000</p>
    </div>
  );
}

function TableCell93() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1208.41px] top-[528.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#34a853] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">+13,000</p>
    </div>
  );
}

function TableCell94() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1296.41px] top-[528.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[14.5px] tracking-[-0.1504px] w-[56px]">2026-04-10 09:00</p>
    </div>
  );
}

function Text32() {
  return (
    <div className="h-[47px] relative rounded-[4px] shrink-0 w-[47.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">查看详情</p>
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="flex-[1_0_0] h-[47px] min-w-px relative rounded-[4px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">添加记录</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[47px] items-start left-[16px] top-[22.5px] w-[103px]" data-name="Container">
      <Text32 />
      <Text33 />
    </div>
  );
}

function TableCell95() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1384.41px] top-[528.5px] w-[135px]" data-name="Table Cell">
      <Container21 />
    </div>
  );
}

function Checkbox7() {
  return <div className="absolute left-[16px] size-[13px] top-[38px]" data-name="Checkbox" />;
}

function TableCell96() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-0 top-[620.5px] w-[45px]" data-name="Table Cell">
      <Checkbox7 />
    </div>
  );
}

function TableCell97() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[45px] top-[620.5px] w-[60px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">7</p>
    </div>
  );
}

function TableCell98() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[105px] top-[620.5px] w-[184.984px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#1a73e8] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">LVSHBFAD1GF402841</p>
    </div>
  );
}

function TableCell99() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[289.98px] top-[620.5px] w-[83.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[52px]">京D4***T</p>
    </div>
  );
}

function TableCell100() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[373.24px] top-[620.5px] w-[92.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">奔驰/C级</p>
    </div>
  );
}

function TableCell101() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[465.5px] top-[620.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[56px]">北京朝阳店</p>
    </div>
  );
}

function TableCell102() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[553.5px] top-[620.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">优加发拍</p>
    </div>
  );
}

function Text34() {
  return (
    <div className="absolute bg-[#e8f0fe] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[40px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#1a73e8] text-[12px] top-[3px] whitespace-nowrap">有辆</p>
    </div>
  );
}

function TableCell103() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[641.5px] top-[620.5px] w-[116px]" data-name="Table Cell">
      <Text34 />
    </div>
  );
}

function Text35() {
  return (
    <div className="absolute bg-[#e6f4ea] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#137333] text-[12px] top-[3px] whitespace-nowrap">已成交</p>
    </div>
  );
}

function TableCell104() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[757.5px] top-[620.5px] w-[88px]" data-name="Table Cell">
      <Text35 />
    </div>
  );
}

function Text36() {
  return (
    <div className="absolute bg-[#e6f4ea] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#137333] text-[12px] top-[3px] whitespace-nowrap">执行中</p>
    </div>
  );
}

function TableCell105() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[845.5px] top-[620.5px] w-[88px]" data-name="Table Cell">
      <Text36 />
    </div>
  );
}

function TableCell106() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[933.5px] top-[620.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">拍卖</p>
    </div>
  );
}

function TableCell107() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1021.5px] top-[620.5px] w-[93.359px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">¥165,000</p>
    </div>
  );
}

function TableCell108() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1114.86px] top-[620.5px] w-[93.555px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">¥175,000</p>
    </div>
  );
}

function TableCell109() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1208.41px] top-[620.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#34a853] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">+10,000</p>
    </div>
  );
}

function TableCell110() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1296.41px] top-[620.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[14.5px] tracking-[-0.1504px] w-[56px]">2026-04-12 14:30</p>
    </div>
  );
}

function Text37() {
  return (
    <div className="h-[47px] relative rounded-[4px] shrink-0 w-[47.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">查看详情</p>
      </div>
    </div>
  );
}

function Text38() {
  return (
    <div className="flex-[1_0_0] h-[47px] min-w-px relative rounded-[4px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">添加记录</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[47px] items-start left-[16px] top-[22.5px] w-[103px]" data-name="Container">
      <Text37 />
      <Text38 />
    </div>
  );
}

function TableCell111() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1384.41px] top-[620.5px] w-[135px]" data-name="Table Cell">
      <Container22 />
    </div>
  );
}

function Checkbox8() {
  return <div className="absolute left-[16px] size-[13px] top-[38px]" data-name="Checkbox" />;
}

function TableCell112() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-0 top-[712.5px] w-[45px]" data-name="Table Cell">
      <Checkbox8 />
    </div>
  );
}

function TableCell113() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[45px] top-[712.5px] w-[60px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">8</p>
    </div>
  );
}

function TableCell114() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[105px] top-[712.5px] w-[184.984px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#1a73e8] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">LVSHBFAD2GF402842</p>
    </div>
  );
}

function TableCell115() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[289.98px] top-[712.5px] w-[83.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[52px]">粤C8***S</p>
    </div>
  );
}

function TableCell116() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[373.24px] top-[712.5px] w-[92.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">奥迪/A4L</p>
    </div>
  );
}

function TableCell117() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[465.5px] top-[712.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[56px]">广州天河店</p>
    </div>
  );
}

function TableCell118() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[553.5px] top-[712.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">专电优拍</p>
    </div>
  );
}

function TableCell119() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[641.5px] top-[712.5px] w-[116px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell120() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[757.5px] top-[712.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function Text39() {
  return (
    <div className="absolute bg-[#e8f0fe] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#1a73e8] text-[12px] top-[3px] whitespace-nowrap">已取消</p>
    </div>
  );
}

function TableCell121() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[845.5px] top-[712.5px] w-[88px]" data-name="Table Cell">
      <Text39 />
    </div>
  );
}

function TableCell122() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[933.5px] top-[712.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell123() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1021.5px] top-[712.5px] w-[93.359px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">¥145,000</p>
    </div>
  );
}

function TableCell124() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1114.86px] top-[712.5px] w-[93.555px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell125() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1208.41px] top-[712.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#80868b] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell126() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1296.41px] top-[712.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[14.5px] tracking-[-0.1504px] w-[56px]">2026-04-13 10:15</p>
    </div>
  );
}

function Text40() {
  return (
    <div className="h-[47px] relative rounded-[4px] shrink-0 w-[47.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">查看详情</p>
      </div>
    </div>
  );
}

function Text41() {
  return (
    <div className="flex-[1_0_0] h-[47px] min-w-px relative rounded-[4px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">添加记录</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[47px] items-start left-[16px] top-[22.5px] w-[103px]" data-name="Container">
      <Text40 />
      <Text41 />
    </div>
  );
}

function TableCell127() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1384.41px] top-[712.5px] w-[135px]" data-name="Table Cell">
      <Container23 />
    </div>
  );
}

function Checkbox9() {
  return <div className="absolute left-[16px] size-[13px] top-[38px]" data-name="Checkbox" />;
}

function TableCell128() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-0 top-[804.5px] w-[45px]" data-name="Table Cell">
      <Checkbox9 />
    </div>
  );
}

function TableCell129() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[45px] top-[804.5px] w-[60px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">9</p>
    </div>
  );
}

function TableCell130() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[105px] top-[804.5px] w-[184.984px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#1a73e8] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">LVSHBFAD3GF402843</p>
    </div>
  );
}

function TableCell131() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[289.98px] top-[804.5px] w-[83.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[52px]">沪C9***R</p>
    </div>
  );
}

function TableCell132() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[373.24px] top-[804.5px] w-[92.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">别克/君威</p>
    </div>
  );
}

function TableCell133() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[465.5px] top-[804.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[56px]">上海浦东店</p>
    </div>
  );
}

function TableCell134() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[553.5px] top-[804.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">优加发拍</p>
    </div>
  );
}

function Text42() {
  return (
    <div className="absolute bg-[#e8f0fe] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#1a73e8] text-[12px] top-[3px] whitespace-nowrap">汽车街</p>
    </div>
  );
}

function TableCell135() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[641.5px] top-[804.5px] w-[116px]" data-name="Table Cell">
      <Text42 />
    </div>
  );
}

function Text43() {
  return (
    <div className="absolute bg-[#fce8e6] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[40px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#c5221f] text-[12px] top-[3px] whitespace-nowrap">流拍</p>
    </div>
  );
}

function TableCell136() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[757.5px] top-[804.5px] w-[88px]" data-name="Table Cell">
      <Text43 />
    </div>
  );
}

function Text44() {
  return (
    <div className="absolute bg-[#e6f4ea] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#137333] text-[12px] top-[3px] whitespace-nowrap">执行中</p>
    </div>
  );
}

function TableCell137() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[845.5px] top-[804.5px] w-[88px]" data-name="Table Cell">
      <Text44 />
    </div>
  );
}

function TableCell138() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[933.5px] top-[804.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">拍卖</p>
    </div>
  );
}

function TableCell139() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1021.5px] top-[804.5px] w-[93.359px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">¥68,000</p>
    </div>
  );
}

function TableCell140() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1114.86px] top-[804.5px] w-[93.555px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell141() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1208.41px] top-[804.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#80868b] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell142() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1296.41px] top-[804.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[14.5px] tracking-[-0.1504px] w-[56px]">2026-04-11 16:45</p>
    </div>
  );
}

function Text45() {
  return (
    <div className="h-[47px] relative rounded-[4px] shrink-0 w-[47.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">查看详情</p>
      </div>
    </div>
  );
}

function Text46() {
  return (
    <div className="flex-[1_0_0] h-[47px] min-w-px relative rounded-[4px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">添加记录</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[47px] items-start left-[16px] top-[22.5px] w-[103px]" data-name="Container">
      <Text45 />
      <Text46 />
    </div>
  );
}

function TableCell143() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1384.41px] top-[804.5px] w-[135px]" data-name="Table Cell">
      <Container24 />
    </div>
  );
}

function Checkbox10() {
  return <div className="absolute left-[16px] size-[13px] top-[38px]" data-name="Checkbox" />;
}

function TableCell144() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-0 top-[896.5px] w-[45px]" data-name="Table Cell">
      <Checkbox10 />
    </div>
  );
}

function TableCell145() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[45px] top-[896.5px] w-[60px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">10</p>
    </div>
  );
}

function TableCell146() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[105px] top-[896.5px] w-[184.984px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#1a73e8] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">LVSHBFAD4GF402844</p>
    </div>
  );
}

function TableCell147() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[289.98px] top-[896.5px] w-[83.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[52px]">京E5***Q</p>
    </div>
  );
}

function TableCell148() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[373.24px] top-[896.5px] w-[92.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[61px]">现代/索纳塔</p>
    </div>
  );
}

function TableCell149() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[465.5px] top-[896.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[56px]">北京朝阳店</p>
    </div>
  );
}

function TableCell150() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[553.5px] top-[896.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">专电优拍</p>
    </div>
  );
}

function TableCell151() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[641.5px] top-[896.5px] w-[116px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell152() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[757.5px] top-[896.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function Text47() {
  return (
    <div className="absolute bg-[#fef7e0] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#b06000] text-[12px] top-[3px] whitespace-nowrap">待执行</p>
    </div>
  );
}

function TableCell153() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[845.5px] top-[896.5px] w-[88px]" data-name="Table Cell">
      <Text47 />
    </div>
  );
}

function TableCell154() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[933.5px] top-[896.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">转售</p>
    </div>
  );
}

function TableCell155() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1021.5px] top-[896.5px] w-[93.359px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">¥55,000</p>
    </div>
  );
}

function TableCell156() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1114.86px] top-[896.5px] w-[93.555px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell157() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1208.41px] top-[896.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#80868b] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell158() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1296.41px] top-[896.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[14.5px] tracking-[-0.1504px] w-[56px]">2026-04-19 08:20</p>
    </div>
  );
}

function Text48() {
  return (
    <div className="h-[47px] relative rounded-[4px] shrink-0 w-[47.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">查看详情</p>
      </div>
    </div>
  );
}

function Text49() {
  return (
    <div className="flex-[1_0_0] h-[47px] min-w-px relative rounded-[4px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">添加记录</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[47px] items-start left-[16px] top-[22.5px] w-[103px]" data-name="Container">
      <Text48 />
      <Text49 />
    </div>
  );
}

function TableCell159() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1384.41px] top-[896.5px] w-[135px]" data-name="Table Cell">
      <Container25 />
    </div>
  );
}

function Checkbox11() {
  return <div className="absolute left-[16px] size-[13px] top-[38px]" data-name="Checkbox" />;
}

function TableCell160() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-0 top-[988.5px] w-[45px]" data-name="Table Cell">
      <Checkbox11 />
    </div>
  );
}

function TableCell161() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[45px] top-[988.5px] w-[60px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">11</p>
    </div>
  );
}

function TableCell162() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[105px] top-[988.5px] w-[184.984px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#1a73e8] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">LVSHBFAD5GF402845</p>
    </div>
  );
}

function TableCell163() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[289.98px] top-[988.5px] w-[83.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[52px]">粤D1***P</p>
    </div>
  );
}

function TableCell164() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[373.24px] top-[988.5px] w-[92.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[61px]">雪佛兰/迈锐宝</p>
    </div>
  );
}

function TableCell165() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[465.5px] top-[988.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[56px]">广州天河店</p>
    </div>
  );
}

function TableCell166() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[553.5px] top-[988.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">优加发拍</p>
    </div>
  );
}

function Text50() {
  return (
    <div className="absolute bg-[#e8f0fe] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#1a73e8] text-[12px] top-[3px] whitespace-nowrap">优信拍</p>
    </div>
  );
}

function TableCell167() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[641.5px] top-[988.5px] w-[116px]" data-name="Table Cell">
      <Text50 />
    </div>
  );
}

function Text51() {
  return (
    <div className="absolute bg-[#e8f0fe] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#1a73e8] text-[12px] top-[3px] whitespace-nowrap">竞拍中</p>
    </div>
  );
}

function TableCell168() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[757.5px] top-[988.5px] w-[88px]" data-name="Table Cell">
      <Text51 />
    </div>
  );
}

function Text52() {
  return (
    <div className="absolute bg-[#e6f4ea] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#137333] text-[12px] top-[3px] whitespace-nowrap">执行中</p>
    </div>
  );
}

function TableCell169() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[845.5px] top-[988.5px] w-[88px]" data-name="Table Cell">
      <Text52 />
    </div>
  );
}

function TableCell170() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[933.5px] top-[988.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">拍卖</p>
    </div>
  );
}

function TableCell171() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1021.5px] top-[988.5px] w-[93.359px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">¥72,000</p>
    </div>
  );
}

function TableCell172() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1114.86px] top-[988.5px] w-[93.555px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell173() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1208.41px] top-[988.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#80868b] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell174() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1296.41px] top-[988.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[14.5px] tracking-[-0.1504px] w-[56px]">2026-04-17 11:00</p>
    </div>
  );
}

function Text53() {
  return (
    <div className="h-[47px] relative rounded-[4px] shrink-0 w-[47.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">查看详情</p>
      </div>
    </div>
  );
}

function Text54() {
  return (
    <div className="flex-[1_0_0] h-[47px] min-w-px relative rounded-[4px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">添加记录</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[47px] items-start left-[16px] top-[22.5px] w-[103px]" data-name="Container">
      <Text53 />
      <Text54 />
    </div>
  );
}

function TableCell175() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1384.41px] top-[988.5px] w-[135px]" data-name="Table Cell">
      <Container26 />
    </div>
  );
}

function Checkbox12() {
  return <div className="absolute left-[16px] size-[13px] top-[38px]" data-name="Checkbox" />;
}

function TableCell176() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-0 top-[1080.5px] w-[45px]" data-name="Table Cell">
      <Checkbox12 />
    </div>
  );
}

function TableCell177() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[45px] top-[1080.5px] w-[60px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">12</p>
    </div>
  );
}

function TableCell178() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[105px] top-[1080.5px] w-[184.984px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#1a73e8] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">LVSHBFAD6GF402846</p>
    </div>
  );
}

function TableCell179() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[289.98px] top-[1080.5px] w-[83.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[52px]">沪D2***O</p>
    </div>
  );
}

function TableCell180() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[373.24px] top-[1080.5px] w-[92.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[61px]">马自达/阿特兹</p>
    </div>
  );
}

function TableCell181() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[465.5px] top-[1080.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[56px]">上海浦东店</p>
    </div>
  );
}

function TableCell182() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[553.5px] top-[1080.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">专电优拍</p>
    </div>
  );
}

function Text55() {
  return (
    <div className="absolute bg-[#e8f0fe] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[64px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#1a73e8] text-[12px] top-[3px] whitespace-nowrap">专电优拍</p>
    </div>
  );
}

function TableCell183() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[641.5px] top-[1080.5px] w-[116px]" data-name="Table Cell">
      <Text55 />
    </div>
  );
}

function Text56() {
  return (
    <div className="absolute bg-[#fef7e0] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#b06000] text-[12px] top-[3px] whitespace-nowrap">待上架</p>
    </div>
  );
}

function TableCell184() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[757.5px] top-[1080.5px] w-[88px]" data-name="Table Cell">
      <Text56 />
    </div>
  );
}

function Text57() {
  return (
    <div className="absolute bg-[#fef7e0] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#b06000] text-[12px] top-[3px] whitespace-nowrap">待执行</p>
    </div>
  );
}

function TableCell185() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[845.5px] top-[1080.5px] w-[88px]" data-name="Table Cell">
      <Text57 />
    </div>
  );
}

function TableCell186() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[933.5px] top-[1080.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">拍卖</p>
    </div>
  );
}

function TableCell187() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1021.5px] top-[1080.5px] w-[93.359px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">¥82,000</p>
    </div>
  );
}

function TableCell188() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1114.86px] top-[1080.5px] w-[93.555px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell189() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1208.41px] top-[1080.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#80868b] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell190() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1296.41px] top-[1080.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[14.5px] tracking-[-0.1504px] w-[56px]">2026-04-18 15:30</p>
    </div>
  );
}

function Text58() {
  return (
    <div className="h-[47px] relative rounded-[4px] shrink-0 w-[47.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">查看详情</p>
      </div>
    </div>
  );
}

function Text59() {
  return (
    <div className="flex-[1_0_0] h-[47px] min-w-px relative rounded-[4px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">添加记录</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[47px] items-start left-[16px] top-[22.5px] w-[103px]" data-name="Container">
      <Text58 />
      <Text59 />
    </div>
  );
}

function TableCell191() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1384.41px] top-[1080.5px] w-[135px]" data-name="Table Cell">
      <Container27 />
    </div>
  );
}

function Checkbox13() {
  return <div className="absolute left-[16px] size-[13px] top-[49.5px]" data-name="Checkbox" />;
}

function TableCell192() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-0 top-[1172.5px] w-[45px]" data-name="Table Cell">
      <Checkbox13 />
    </div>
  );
}

function TableCell193() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[45px] top-[1172.5px] w-[60px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[47px] tracking-[-0.1504px] whitespace-nowrap">13</p>
    </div>
  );
}

function TableCell194() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[105px] top-[1172.5px] w-[184.984px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#1a73e8] text-[14px] top-[47px] tracking-[-0.1504px] whitespace-nowrap">LVSHBFAD7GF402847</p>
    </div>
  );
}

function TableCell195() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[289.98px] top-[1172.5px] w-[83.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[36.5px] tracking-[-0.1504px] w-[52px]">京F6***N</p>
    </div>
  );
}

function TableCell196() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[373.24px] top-[1172.5px] w-[92.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[47px] tracking-[-0.1504px] whitespace-nowrap">起亚/K5</p>
    </div>
  );
}

function TableCell197() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[465.5px] top-[1172.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[36.5px] tracking-[-0.1504px] w-[56px]">北京朝阳店</p>
    </div>
  );
}

function TableCell198() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[553.5px] top-[1172.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[47px] tracking-[-0.1504px] whitespace-nowrap">优加发拍</p>
    </div>
  );
}

function TableCell199() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[641.5px] top-[1172.5px] w-[116px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[47px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell200() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[757.5px] top-[1172.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[47px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function Text60() {
  return (
    <div className="absolute bg-[#fce8e6] h-[22px] left-[16px] rounded-[4px] top-[46.5px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#c5221f] text-[12px] top-[3px] whitespace-nowrap">未制定</p>
    </div>
  );
}

function TableCell201() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[845.5px] top-[1172.5px] w-[88px]" data-name="Table Cell">
      <Text60 />
    </div>
  );
}

function TableCell202() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[933.5px] top-[1172.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[47px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell203() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[1021.5px] top-[1172.5px] w-[93.359px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[47px] tracking-[-0.1504px] whitespace-nowrap">¥62,000</p>
    </div>
  );
}

function TableCell204() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[1114.86px] top-[1172.5px] w-[93.555px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[47px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell205() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[1208.41px] top-[1172.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#80868b] text-[14px] top-[47px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell206() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[1296.41px] top-[1172.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[26px] tracking-[-0.1504px] w-[56px]">2026-04-19 09:45</p>
    </div>
  );
}

function Text61() {
  return (
    <div className="h-[86px] relative rounded-[4px] shrink-0 w-[29px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[13px]">查看详情</p>
      </div>
    </div>
  );
}

function Text62() {
  return (
    <div className="h-[86px] relative rounded-[4px] shrink-0 w-[29px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[13px]">制定策略</p>
      </div>
    </div>
  );
}

function Text63() {
  return (
    <div className="flex-[1_0_0] h-[86px] min-w-px relative rounded-[4px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[13px]">添加记录</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[86px] items-start left-[16px] top-[14.5px] w-[103px]" data-name="Container">
      <Text61 />
      <Text62 />
      <Text63 />
    </div>
  );
}

function TableCell207() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[1384.41px] top-[1172.5px] w-[135px]" data-name="Table Cell">
      <Container28 />
    </div>
  );
}

function Checkbox14() {
  return <div className="absolute left-[16px] size-[13px] top-[38px]" data-name="Checkbox" />;
}

function TableCell208() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-0 top-[1287.5px] w-[45px]" data-name="Table Cell">
      <Checkbox14 />
    </div>
  );
}

function TableCell209() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[45px] top-[1287.5px] w-[60px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">14</p>
    </div>
  );
}

function TableCell210() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[105px] top-[1287.5px] w-[184.984px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#1a73e8] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">LVSHBFAD8GF402848</p>
    </div>
  );
}

function TableCell211() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[289.98px] top-[1287.5px] w-[83.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[52px]">粤E3***M</p>
    </div>
  );
}

function TableCell212() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[373.24px] top-[1287.5px] w-[92.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[61px]">标致/508L</p>
    </div>
  );
}

function TableCell213() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[465.5px] top-[1287.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[56px]">广州天河店</p>
    </div>
  );
}

function TableCell214() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[553.5px] top-[1287.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">专电优拍</p>
    </div>
  );
}

function Text64() {
  return (
    <div className="absolute bg-[#e8f0fe] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[40px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#1a73e8] text-[12px] top-[3px] whitespace-nowrap">有辆</p>
    </div>
  );
}

function TableCell215() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[641.5px] top-[1287.5px] w-[116px]" data-name="Table Cell">
      <Text64 />
    </div>
  );
}

function Text65() {
  return (
    <div className="absolute bg-[#e6f4ea] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#137333] text-[12px] top-[3px] whitespace-nowrap">已成交</p>
    </div>
  );
}

function TableCell216() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[757.5px] top-[1287.5px] w-[88px]" data-name="Table Cell">
      <Text65 />
    </div>
  );
}

function Text66() {
  return (
    <div className="absolute bg-[#e8f0fe] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#1a73e8] text-[12px] top-[3px] whitespace-nowrap">已完成</p>
    </div>
  );
}

function TableCell217() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[845.5px] top-[1287.5px] w-[88px]" data-name="Table Cell">
      <Text66 />
    </div>
  );
}

function TableCell218() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[933.5px] top-[1287.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">拍卖</p>
    </div>
  );
}

function TableCell219() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1021.5px] top-[1287.5px] w-[93.359px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">¥78,000</p>
    </div>
  );
}

function TableCell220() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1114.86px] top-[1287.5px] w-[93.555px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">¥85,000</p>
    </div>
  );
}

function TableCell221() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1208.41px] top-[1287.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#34a853] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">+7,000</p>
    </div>
  );
}

function TableCell222() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1296.41px] top-[1287.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[14.5px] tracking-[-0.1504px] w-[56px]">2026-04-08 10:00</p>
    </div>
  );
}

function Text67() {
  return (
    <div className="h-[47px] relative rounded-[4px] shrink-0 w-[47.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">查看详情</p>
      </div>
    </div>
  );
}

function Text68() {
  return (
    <div className="flex-[1_0_0] h-[47px] min-w-px relative rounded-[4px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">添加记录</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[47px] items-start left-[16px] top-[22.5px] w-[103px]" data-name="Container">
      <Text67 />
      <Text68 />
    </div>
  );
}

function TableCell223() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1384.41px] top-[1287.5px] w-[135px]" data-name="Table Cell">
      <Container29 />
    </div>
  );
}

function Checkbox15() {
  return <div className="absolute left-[16px] size-[13px] top-[49.5px]" data-name="Checkbox" />;
}

function TableCell224() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-0 top-[1379.5px] w-[45px]" data-name="Table Cell">
      <Checkbox15 />
    </div>
  );
}

function TableCell225() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[45px] top-[1379.5px] w-[60px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[47px] tracking-[-0.1504px] whitespace-nowrap">15</p>
    </div>
  );
}

function TableCell226() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[105px] top-[1379.5px] w-[184.984px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#1a73e8] text-[14px] top-[47px] tracking-[-0.1504px] whitespace-nowrap">LVSHBFAD9GF402849</p>
    </div>
  );
}

function TableCell227() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[289.98px] top-[1379.5px] w-[83.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[36.5px] tracking-[-0.1504px] w-[52px]">沪E4***L</p>
    </div>
  );
}

function TableCell228() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[373.24px] top-[1379.5px] w-[92.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[36.5px] tracking-[-0.1504px] w-[61px]">雪铁龙/C5</p>
    </div>
  );
}

function TableCell229() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[465.5px] top-[1379.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[36.5px] tracking-[-0.1504px] w-[56px]">上海浦东店</p>
    </div>
  );
}

function TableCell230() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[553.5px] top-[1379.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[47px] tracking-[-0.1504px] whitespace-nowrap">优加发拍</p>
    </div>
  );
}

function TableCell231() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[641.5px] top-[1379.5px] w-[116px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[47px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell232() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[757.5px] top-[1379.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[47px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function Text69() {
  return (
    <div className="absolute bg-[#fce8e6] h-[22px] left-[16px] rounded-[4px] top-[46.5px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#c5221f] text-[12px] top-[3px] whitespace-nowrap">未制定</p>
    </div>
  );
}

function TableCell233() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[845.5px] top-[1379.5px] w-[88px]" data-name="Table Cell">
      <Text69 />
    </div>
  );
}

function TableCell234() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[933.5px] top-[1379.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[47px] tracking-[-0.1504px] whitespace-nowrap">报废</p>
    </div>
  );
}

function TableCell235() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[1021.5px] top-[1379.5px] w-[93.359px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[47px] tracking-[-0.1504px] whitespace-nowrap">¥35,000</p>
    </div>
  );
}

function TableCell236() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[1114.86px] top-[1379.5px] w-[93.555px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[47px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell237() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[1208.41px] top-[1379.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#80868b] text-[14px] top-[47px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell238() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[1296.41px] top-[1379.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[26px] tracking-[-0.1504px] w-[56px]">2026-04-16 13:20</p>
    </div>
  );
}

function Text70() {
  return (
    <div className="h-[86px] relative rounded-[4px] shrink-0 w-[29px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[13px]">查看详情</p>
      </div>
    </div>
  );
}

function Text71() {
  return (
    <div className="h-[86px] relative rounded-[4px] shrink-0 w-[29px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[13px]">制定策略</p>
      </div>
    </div>
  );
}

function Text72() {
  return (
    <div className="flex-[1_0_0] h-[86px] min-w-px relative rounded-[4px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[13px]">添加记录</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[86px] items-start left-[16px] top-[14.5px] w-[103px]" data-name="Container">
      <Text70 />
      <Text71 />
      <Text72 />
    </div>
  );
}

function TableCell239() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[115px] left-[1384.41px] top-[1379.5px] w-[135px]" data-name="Table Cell">
      <Container30 />
    </div>
  );
}

function Checkbox16() {
  return <div className="absolute left-[16px] size-[13px] top-[38px]" data-name="Checkbox" />;
}

function TableCell240() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-0 top-[1494.5px] w-[45px]" data-name="Table Cell">
      <Checkbox16 />
    </div>
  );
}

function TableCell241() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[45px] top-[1494.5px] w-[60px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">16</p>
    </div>
  );
}

function TableCell242() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[105px] top-[1494.5px] w-[184.984px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#1a73e8] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">LVSHBFAD0GF402850</p>
    </div>
  );
}

function TableCell243() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[289.98px] top-[1494.5px] w-[83.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[52px]">京G7***K</p>
    </div>
  );
}

function TableCell244() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[373.24px] top-[1494.5px] w-[92.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">荣威/i6</p>
    </div>
  );
}

function TableCell245() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[465.5px] top-[1494.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[56px]">北京朝阳店</p>
    </div>
  );
}

function TableCell246() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[553.5px] top-[1494.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">专电优拍</p>
    </div>
  );
}

function Text73() {
  return (
    <div className="absolute bg-[#e8f0fe] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#1a73e8] text-[12px] top-[3px] whitespace-nowrap">汽车街</p>
    </div>
  );
}

function TableCell247() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[641.5px] top-[1494.5px] w-[116px]" data-name="Table Cell">
      <Text73 />
    </div>
  );
}

function Text74() {
  return (
    <div className="absolute bg-[#fce8e6] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[40px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#c5221f] text-[12px] top-[3px] whitespace-nowrap">流拍</p>
    </div>
  );
}

function TableCell248() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[757.5px] top-[1494.5px] w-[88px]" data-name="Table Cell">
      <Text74 />
    </div>
  );
}

function Text75() {
  return (
    <div className="absolute bg-[#fef7e0] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#b06000] text-[12px] top-[3px] whitespace-nowrap">待执行</p>
    </div>
  );
}

function TableCell249() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[845.5px] top-[1494.5px] w-[88px]" data-name="Table Cell">
      <Text75 />
    </div>
  );
}

function TableCell250() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[933.5px] top-[1494.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">拍卖</p>
    </div>
  );
}

function TableCell251() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1021.5px] top-[1494.5px] w-[93.359px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">¥58,000</p>
    </div>
  );
}

function TableCell252() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1114.86px] top-[1494.5px] w-[93.555px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell253() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1208.41px] top-[1494.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#80868b] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell254() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1296.41px] top-[1494.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[14.5px] tracking-[-0.1504px] w-[56px]">2026-04-15 14:00</p>
    </div>
  );
}

function Text76() {
  return (
    <div className="h-[47px] relative rounded-[4px] shrink-0 w-[47.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">查看详情</p>
      </div>
    </div>
  );
}

function Text77() {
  return (
    <div className="flex-[1_0_0] h-[47px] min-w-px relative rounded-[4px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">添加记录</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[47px] items-start left-[16px] top-[22.5px] w-[103px]" data-name="Container">
      <Text76 />
      <Text77 />
    </div>
  );
}

function TableCell255() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1384.41px] top-[1494.5px] w-[135px]" data-name="Table Cell">
      <Container31 />
    </div>
  );
}

function Checkbox17() {
  return <div className="absolute left-[16px] size-[13px] top-[38px]" data-name="Checkbox" />;
}

function TableCell256() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-0 top-[1586.5px] w-[45px]" data-name="Table Cell">
      <Checkbox17 />
    </div>
  );
}

function TableCell257() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[45px] top-[1586.5px] w-[60px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">17</p>
    </div>
  );
}

function TableCell258() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[105px] top-[1586.5px] w-[184.984px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#1a73e8] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">LVSHBFAD1GF402851</p>
    </div>
  );
}

function TableCell259() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[289.98px] top-[1586.5px] w-[83.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[52px]">粤F5***J</p>
    </div>
  );
}

function TableCell260() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[373.24px] top-[1586.5px] w-[92.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">名爵/6</p>
    </div>
  );
}

function TableCell261() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[465.5px] top-[1586.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[56px]">广州天河店</p>
    </div>
  );
}

function TableCell262() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[553.5px] top-[1586.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">优加发拍</p>
    </div>
  );
}

function Text78() {
  return (
    <div className="absolute bg-[#e8f0fe] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#1a73e8] text-[12px] top-[3px] whitespace-nowrap">优信拍</p>
    </div>
  );
}

function TableCell263() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[641.5px] top-[1586.5px] w-[116px]" data-name="Table Cell">
      <Text78 />
    </div>
  );
}

function Text79() {
  return (
    <div className="absolute bg-[#f1f3f4] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#5f6368] text-[12px] top-[3px] whitespace-nowrap">已交付</p>
    </div>
  );
}

function TableCell264() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[757.5px] top-[1586.5px] w-[88px]" data-name="Table Cell">
      <Text79 />
    </div>
  );
}

function Text80() {
  return (
    <div className="absolute bg-[#e8f0fe] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#1a73e8] text-[12px] top-[3px] whitespace-nowrap">已完成</p>
    </div>
  );
}

function TableCell265() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[845.5px] top-[1586.5px] w-[88px]" data-name="Table Cell">
      <Text80 />
    </div>
  );
}

function TableCell266() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[933.5px] top-[1586.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">拍卖</p>
    </div>
  );
}

function TableCell267() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1021.5px] top-[1586.5px] w-[93.359px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">¥65,000</p>
    </div>
  );
}

function TableCell268() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1114.86px] top-[1586.5px] w-[93.555px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">¥72,000</p>
    </div>
  );
}

function TableCell269() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1208.41px] top-[1586.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#34a853] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">+7,000</p>
    </div>
  );
}

function TableCell270() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1296.41px] top-[1586.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[14.5px] tracking-[-0.1504px] w-[56px]">2026-04-09 09:30</p>
    </div>
  );
}

function Text81() {
  return (
    <div className="h-[47px] relative rounded-[4px] shrink-0 w-[47.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">查看详情</p>
      </div>
    </div>
  );
}

function Text82() {
  return (
    <div className="flex-[1_0_0] h-[47px] min-w-px relative rounded-[4px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">添加记录</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[47px] items-start left-[16px] top-[22.5px] w-[103px]" data-name="Container">
      <Text81 />
      <Text82 />
    </div>
  );
}

function TableCell271() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1384.41px] top-[1586.5px] w-[135px]" data-name="Table Cell">
      <Container32 />
    </div>
  );
}

function Checkbox18() {
  return <div className="absolute left-[16px] size-[13px] top-[38px]" data-name="Checkbox" />;
}

function TableCell272() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-0 top-[1678.5px] w-[45px]" data-name="Table Cell">
      <Checkbox18 />
    </div>
  );
}

function TableCell273() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[45px] top-[1678.5px] w-[60px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">18</p>
    </div>
  );
}

function TableCell274() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[105px] top-[1678.5px] w-[184.984px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#1a73e8] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">LVSHBFAD2GF402852</p>
    </div>
  );
}

function TableCell275() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[289.98px] top-[1678.5px] w-[83.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[52px]">沪F6***I</p>
    </div>
  );
}

function TableCell276() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[373.24px] top-[1678.5px] w-[92.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">领克/03</p>
    </div>
  );
}

function TableCell277() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[465.5px] top-[1678.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[56px]">上海浦东店</p>
    </div>
  );
}

function TableCell278() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[553.5px] top-[1678.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">专电优拍</p>
    </div>
  );
}

function Text83() {
  return (
    <div className="absolute bg-[#e8f0fe] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[64px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#1a73e8] text-[12px] top-[3px] whitespace-nowrap">专电优拍</p>
    </div>
  );
}

function TableCell279() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[641.5px] top-[1678.5px] w-[116px]" data-name="Table Cell">
      <Text83 />
    </div>
  );
}

function Text84() {
  return (
    <div className="absolute bg-[#e8f0fe] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#1a73e8] text-[12px] top-[3px] whitespace-nowrap">竞拍中</p>
    </div>
  );
}

function TableCell280() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[757.5px] top-[1678.5px] w-[88px]" data-name="Table Cell">
      <Text84 />
    </div>
  );
}

function Text85() {
  return (
    <div className="absolute bg-[#e6f4ea] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#137333] text-[12px] top-[3px] whitespace-nowrap">执行中</p>
    </div>
  );
}

function TableCell281() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[845.5px] top-[1678.5px] w-[88px]" data-name="Table Cell">
      <Text85 />
    </div>
  );
}

function TableCell282() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[933.5px] top-[1678.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">拍卖</p>
    </div>
  );
}

function TableCell283() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1021.5px] top-[1678.5px] w-[93.359px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">¥95,000</p>
    </div>
  );
}

function TableCell284() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1114.86px] top-[1678.5px] w-[93.555px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell285() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1208.41px] top-[1678.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#80868b] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell286() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1296.41px] top-[1678.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[14.5px] tracking-[-0.1504px] w-[56px]">2026-04-18 10:45</p>
    </div>
  );
}

function Text86() {
  return (
    <div className="h-[47px] relative rounded-[4px] shrink-0 w-[47.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">查看详情</p>
      </div>
    </div>
  );
}

function Text87() {
  return (
    <div className="flex-[1_0_0] h-[47px] min-w-px relative rounded-[4px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">添加记录</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[47px] items-start left-[16px] top-[22.5px] w-[103px]" data-name="Container">
      <Text86 />
      <Text87 />
    </div>
  );
}

function TableCell287() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1384.41px] top-[1678.5px] w-[135px]" data-name="Table Cell">
      <Container33 />
    </div>
  );
}

function Checkbox19() {
  return <div className="absolute left-[16px] size-[13px] top-[38px]" data-name="Checkbox" />;
}

function TableCell288() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-0 top-[1770.5px] w-[45px]" data-name="Table Cell">
      <Checkbox19 />
    </div>
  );
}

function TableCell289() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[45px] top-[1770.5px] w-[60px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">19</p>
    </div>
  );
}

function TableCell290() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[105px] top-[1770.5px] w-[184.984px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#1a73e8] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">LVSHBFAD3GF402853</p>
    </div>
  );
}

function TableCell291() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[289.98px] top-[1770.5px] w-[83.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[52px]">京H8***H</p>
    </div>
  );
}

function TableCell292() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[373.24px] top-[1770.5px] w-[92.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">WEY/VV7</p>
    </div>
  );
}

function TableCell293() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[465.5px] top-[1770.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[56px]">北京朝阳店</p>
    </div>
  );
}

function TableCell294() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[553.5px] top-[1770.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">优加发拍</p>
    </div>
  );
}

function TableCell295() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[641.5px] top-[1770.5px] w-[116px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell296() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[757.5px] top-[1770.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function Text88() {
  return (
    <div className="absolute bg-[#e8f0fe] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#1a73e8] text-[12px] top-[3px] whitespace-nowrap">已取消</p>
    </div>
  );
}

function TableCell297() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[845.5px] top-[1770.5px] w-[88px]" data-name="Table Cell">
      <Text88 />
    </div>
  );
}

function TableCell298() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[933.5px] top-[1770.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell299() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1021.5px] top-[1770.5px] w-[93.359px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">¥105,000</p>
    </div>
  );
}

function TableCell300() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1114.86px] top-[1770.5px] w-[93.555px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell301() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1208.41px] top-[1770.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#80868b] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell302() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1296.41px] top-[1770.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[14.5px] tracking-[-0.1504px] w-[56px]">2026-04-14 16:00</p>
    </div>
  );
}

function Text89() {
  return (
    <div className="h-[47px] relative rounded-[4px] shrink-0 w-[47.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">查看详情</p>
      </div>
    </div>
  );
}

function Text90() {
  return (
    <div className="flex-[1_0_0] h-[47px] min-w-px relative rounded-[4px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">添加记录</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[47px] items-start left-[16px] top-[22.5px] w-[103px]" data-name="Container">
      <Text89 />
      <Text90 />
    </div>
  );
}

function TableCell303() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1384.41px] top-[1770.5px] w-[135px]" data-name="Table Cell">
      <Container34 />
    </div>
  );
}

function Checkbox20() {
  return <div className="absolute left-[16px] size-[13px] top-[38px]" data-name="Checkbox" />;
}

function TableCell304() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-0 top-[1862.5px] w-[45px]" data-name="Table Cell">
      <Checkbox20 />
    </div>
  );
}

function TableCell305() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[45px] top-[1862.5px] w-[60px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">20</p>
    </div>
  );
}

function TableCell306() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[105px] top-[1862.5px] w-[184.984px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[16px] not-italic text-[#1a73e8] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">LVSHBFAD4GF402854</p>
    </div>
  );
}

function TableCell307() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[289.98px] top-[1862.5px] w-[83.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[52px]">粤G7***G</p>
    </div>
  );
}

function TableCell308() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[373.24px] top-[1862.5px] w-[92.258px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">比亚迪/汉</p>
    </div>
  );
}

function TableCell309() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[465.5px] top-[1862.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[25px] tracking-[-0.1504px] w-[56px]">广州天河店</p>
    </div>
  );
}

function TableCell310() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[553.5px] top-[1862.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">专电优拍</p>
    </div>
  );
}

function Text91() {
  return (
    <div className="absolute bg-[#e8f0fe] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[40px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#1a73e8] text-[12px] top-[3px] whitespace-nowrap">有辆</p>
    </div>
  );
}

function TableCell311() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[641.5px] top-[1862.5px] w-[116px]" data-name="Table Cell">
      <Text91 />
    </div>
  );
}

function Text92() {
  return (
    <div className="absolute bg-[#fef7e0] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#b06000] text-[12px] top-[3px] whitespace-nowrap">待上架</p>
    </div>
  );
}

function TableCell312() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[757.5px] top-[1862.5px] w-[88px]" data-name="Table Cell">
      <Text92 />
    </div>
  );
}

function Text93() {
  return (
    <div className="absolute bg-[#fef7e0] h-[22px] left-[16px] rounded-[4px] top-[35px] w-[52px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[18px] left-[8px] not-italic text-[#b06000] text-[12px] top-[3px] whitespace-nowrap">待执行</p>
    </div>
  );
}

function TableCell313() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[845.5px] top-[1862.5px] w-[88px]" data-name="Table Cell">
      <Text93 />
    </div>
  );
}

function TableCell314() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[933.5px] top-[1862.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">拍卖</p>
    </div>
  );
}

function TableCell315() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1021.5px] top-[1862.5px] w-[93.359px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">¥135,000</p>
    </div>
  );
}

function TableCell316() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1114.86px] top-[1862.5px] w-[93.555px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell317() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1208.41px] top-[1862.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#80868b] text-[14px] top-[35.5px] tracking-[-0.1504px] whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell318() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1296.41px] top-[1862.5px] w-[88px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[16px] not-italic text-[#202124] text-[14px] top-[14.5px] tracking-[-0.1504px] w-[56px]">2026-04-19 11:15</p>
    </div>
  );
}

function Text94() {
  return (
    <div className="h-[47px] relative rounded-[4px] shrink-0 w-[47.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">查看详情</p>
      </div>
    </div>
  );
}

function Text95() {
  return (
    <div className="flex-[1_0_0] h-[47px] min-w-px relative rounded-[4px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.5px] left-[8px] not-italic text-[#1a73e8] text-[13px] top-[5px] tracking-[-0.0762px] w-[32px]">添加记录</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[47px] items-start left-[16px] top-[22.5px] w-[103px]" data-name="Container">
      <Text94 />
      <Text95 />
    </div>
  );
}

function TableCell319() {
  return (
    <div className="absolute border-[#f1f3f4] border-b border-solid h-[92px] left-[1384.41px] top-[1862.5px] w-[135px]" data-name="Table Cell">
      <Container35 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[1955px] relative shrink-0 w-full" data-name="Table">
      <TableHeader />
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
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col h-[1970px] items-start overflow-clip pr-[-127.414px] relative shrink-0 w-full" data-name="Container">
      <Table />
    </div>
  );
}

function Dropdown6() {
  return <div className="absolute bg-white border border-[#767676] border-solid h-[19px] left-[127.66px] top-[1.5px] w-[37px]" data-name="Dropdown" />;
}

function Container37() {
  return (
    <div className="h-[21px] relative shrink-0 w-[182.445px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#80868b] text-[0px] top-0 tracking-[-0.1504px] whitespace-nowrap">
          <span className="leading-[21px] text-[14px]">{`共 `}</span>
          <span className="font-['Inter:Bold','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-bold leading-[21px] text-[14px]">20</span>
          <span className="leading-[21px] text-[14px]">{` 条记录，每页 `}</span>
        </p>
        <Dropdown6 />
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-[164.66px] not-italic text-[#80868b] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">{` 条`}</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dadce0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">‹</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#1a73e8] relative rounded-[6px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#1a73e8] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dadce0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dadce0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">3</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-white flex-[1_0_0] h-[32px] min-w-px relative rounded-[6px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dadce0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">›</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[32px] relative shrink-0 w-[192px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Button4 />
        <Button5 />
        <Button6 />
        <Button7 />
        <Button8 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-white h-[65px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8eaed] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[16px] pt-[17px] px-[20px] relative size-full">
          <Container37 />
          <Container38 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[2035px] items-start left-[576.5px] overflow-clip rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[534px] w-[1392px]" data-name="Container">
      <Container15 />
      <Container36 />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[27px] relative shrink-0 w-[72px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#1a73e8] text-[18px] top-[0.5px] tracking-[-0.4395px] whitespace-nowrap">优加车拍</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[21px] relative shrink-0 w-[28px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#80868b] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">首页</p>
      </div>
    </div>
  );
}

function Text96() {
  return (
    <div className="h-[21px] relative shrink-0 w-[4.117px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#80868b] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">/</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[21px] relative shrink-0 w-[56px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#80868b] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">处置中心</p>
      </div>
    </div>
  );
}

function Text97() {
  return (
    <div className="h-[21px] relative shrink-0 w-[4.117px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#80868b] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">/</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-w-px relative" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Link />
        <Text96 />
        <Link1 />
        <Text97 />
        <p className="flex-[1_0_0] font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[21px] min-w-px not-italic relative text-[#202124] text-[14px] tracking-[-0.1504px] whitespace-nowrap">车辆全生命周期</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[27px] relative shrink-0 w-[310.234px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container40 />
        <Navigation />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-[#1a73e8] relative rounded-[16px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.1504px] whitespace-nowrap">张</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex h-[56px] items-center justify-between left-0 pb-px px-[24px] top-0 w-[2545px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e8eaed] border-b border-solid inset-0 pointer-events-none" />
      <Container39 />
      <Container41 />
    </div>
  );
}

function Container42() {
  return <div className="absolute bg-[#202124] h-[24px] left-[2529px] rounded-[8px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1)] top-[80px] w-[40px]" data-name="Container" />;
}

export default function Component() {
  return (
    <div className="bg-[#f8f9fa] relative size-full" data-name="处置中心原型">
      <Body />
      <Container />
      <Container12 />
      <Container14 />
      <Header />
      <Container42 />
    </div>
  );
}