// 策略状态类型
export type StrategyStatus = 'pending_disposal' | 'executing' | 'completed' | 'cancelled';
export type RecordResult = 'sold' | 'unsold' | 'bidding' | 'suspended';
export type DisposalMethod = 'wholesale' | 'retail';
export type DisposalType = 'wholesale' | 'retail';
export type Platform = 'youjia' | 'zhuandian' | 'youliang' | 'qichejie' | 'youxinpai';
export type VehicleGrade = 'S' | 'A' | 'B' | 'C' | 'D';
export type VehicleSource = '收购' | '置换' | '寄售';
export type VehicleCategory = '置换车' | '报废车' | '试驾车' | '厂家资源车';
export type VehicleStatusType = '待拍卖' | '流拍' | '成交' | '寄售中' | '已成交' | '已取消';

// 策略数据接口
export interface Strategy {
  id: string;
  strategyNo: string; // 策略ID
  vin: string; // VIN码
  licensePlate: string; // 车牌号
  brandModel: string; // 品牌车型
  brand: string; // 品牌
  model: string; // 车型
  color: string; // 车身颜色
  year: number; // 车辆年份
  mileage: number; // 行驶里程

  // 处置信息
  disposalType: DisposalType; // 处置方式: 批发/零售
  vehicleCategory?: VehicleCategory; // 车辆类别(仅批发)
  retailVehicleType?: string; // 零售车辆类型(仅零售)
  platform: Platform; // 处置渠道平台
  channelName: string; // 处置渠道名称

  // 财务指标
  purchasePrice: number; // 收购价格
  currentReservePrice: number; // 当前保留价/底价(批发:建议保留价,零售:寄售底价)
  standardReservePrice: number; // 公司标准保留价
  marketPriceMin?: number; // 市场价格区间-最起价(仅批发)
  marketPriceMax?: number; // 市场价格区间-最高价(仅批发)
  auctionMaxPrice: number | null; // 拍卖最高价(仅批发)
  retailPrice: number | null; // 零售价格(仅零售)
  reservePriceReason?: string; // 保留价异常说明

  // 状态信息
  status: StrategyStatus; // 策略状态
  vehicleStatus: VehicleStatusType; // 车辆状态
  disposalCount: number; // 处置次数

  // 基础信息
  location: string; // 车辆所在地(省-市)
  store: string; // 所属门店
  purchaseTime: string; // 收车时间
  inventoryDays: number; // 库存时长
  creator: string; // 创建人
  createdTime: string; // 创建时间
  updatedTime: string; // 更新时间
  source: VehicleSource; // 车辆来源

  // 批发特有字段
  transferDays?: number; // 过户天数(仅批发)
  transferNote?: string; // 过户时效说明(仅批发)
  vehicleConditionDesc?: string; // 车况信息特别描述

  // 其他信息
  grade: VehicleGrade;
  assessor: string;
  assessTime: string;
  paintRepair: number;
  frameRepair: number;
  majorDamage: string;
  assessorNote: string;
  autoDispatch: boolean;
  remarks: string; // 策略备注
  cancelReason?: string; // 取消原因
  ownerType: string;
  useType: string;
  keeper: string;
  keeperPhone?: string; // 保管人电话
  inboundTime: string;
}

// 处置记录接口
export interface DisposalRecord {
  id: string;
  recordNo: string;
  strategyNo: string;
  strategyId: string;
  vin: string;
  licensePlate: string;
  brandModel: string;
  platform: Platform;
  startTime: string;
  endTime: string;
  startPrice: number;
  reservePrice: number;
  increment: number;
  viewCount: number;
  bidderCount: number;
  bidCount: number;
  maxBid: number | null;
  result: RecordResult;
  buyer: string | null;
  buyerPhone: string | null;
  orderNo: string | null;
}

// 出价历史接口
export interface BidHistory {
  id: string;
  recordId: string;
  bidder: string;
  amount: number;
  time: string;
  rank: number;
}

// 操作日志接口
export interface OperationLog {
  id: string;
  relatedId: string;
  operator: string;
  action: string;
  time: string;
  details?: string;
  type: 'strategy' | 'record';
}

// 流转历史字段变更接口
export interface FieldChange {
  fieldName: string;
  fieldLabel: string;
  oldValue: string | number | null;
  newValue: string | number | null;
}

// 流转历史接口
export interface TransferHistory {
  id: string;
  relatedId: string;
  relatedType: 'strategy' | 'record';
  operator: string;
  operatorId: string;
  time: string;
  action: string;
  actionType: '创建' | '修改' | '状态变更' | '价格调整' | '平台切换' | '取消' | '完成';
  changes: FieldChange[];
  description?: string;
}

// 生成随机VIN码
const generateVIN = (index: number) => {
  const prefixes = ['LHGBM5G35EK', 'LSVAA4182E', 'LVHRFAAE8K', 'LSGJT54U9E'];
  return `${prefixes[index % 4]}${String(100000 + index).padStart(6, '0')}`;
};

// 生成车牌号
const generatePlate = (index: number) => {
  const provinces = ['豫', '京', '沪', '粤', '川', '浙', '苏'];
  const letters = ['A', 'B', 'C', 'D', 'E'];
  const province = provinces[index % 7];
  const letter = letters[index % 5];
  const number = String(10000 + index).slice(-4);
  return `${province}${letter}${number}Y`;
};

// 车型数据
const vehicles = [
  { brand: '宝马', model: '3系 320Li', year: 2020, color: '白色' },
  { brand: '奔驰', model: 'E级 E300L', year: 2021, color: '黑色' },
  { brand: '奥迪', model: 'A6L 45TFSI', year: 2019, color: '银色' },
  { brand: '五菱', model: '宏光MINIEV 2022款', year: 2022, color: '马卡龙粉' },
  { brand: '特斯拉', model: 'Model 3', year: 2021, color: '珍珠白' },
  { brand: '比亚迪', model: '汉EV', year: 2022, color: '天青蓝' },
  { brand: '理想', model: 'L9 Max', year: 2023, color: '深空灰' },
  { brand: '蔚来', model: 'ET5', year: 2023, color: '云雾灰' },
  { brand: '小鹏', model: 'P7', year: 2022, color: '鎏金灰' },
  { brand: '丰田', model: '凯美瑞 2.5L', year: 2020, color: '钻石银' },
  { brand: '本田', model: '雅阁 260TURBO', year: 2021, color: '极光蓝' },
  { brand: '大众', model: '帕萨特 380TSI', year: 2020, color: '摩卡棕' },
  { brand: '长城', model: '坦克300', year: 2022, color: '沙漠金' },
  { brand: '吉利', model: '星越L', year: 2023, color: '星际蓝' },
  { brand: '红旗', model: 'H9', year: 2022, color: '中国红' },
];

// 门店数据
const stores = ['中原门店', '金水门店', '二七门店', '管城门店', '惠济门店'];

// 评估师名字
const assessors = ['李评估', '王评估', '张评估', '刘评估', '陈评估'];

// 运营人员
const operators = ['张三', '李四', '王五', '赵六', '钱七'];

// 车商名字
const dealers = ['车商A', '车商B', '车商C', '车商D', '车商E', '车商F', '车商G', '车商H'];

// 生成策略数据
export const mockStrategies: Strategy[] = Array.from({ length: 60 }, (_, i) => {
  const vehicle = vehicles[i % vehicles.length];

  // 确保每个状态都有足够的数据
  const status: StrategyStatus =
    i < 10 ? 'pending_disposal' :  // 10条待处置
    i < 28 ? 'executing' :          // 18条执行中
    i < 48 ? 'completed' :          // 20条已完成
    'cancelled';                    // 12条已取消

  const disposalType: DisposalType = i % 3 === 0 ? 'retail' : 'wholesale';
  const platform: Platform = disposalType === 'wholesale'
    ? (['youjia', 'zhuandian', 'youliang', 'qichejie', 'youxinpai'][i % 5] as Platform)
    : 'youjia';

  const vehicleCategory: VehicleCategory = ['置换车', '报废车', '试驾车', '厂家资源车'][i % 4] as VehicleCategory;
  const source: VehicleSource = ['收购', '置换', '寄售'][i % 3] as VehicleSource;

  const purchasePrice = 50000 + (i * 3000);
  const standardReservePrice = purchasePrice < 10000 ? purchasePrice + 500 :
                               purchasePrice < 30000 ? purchasePrice + 800 :
                               purchasePrice + 1000;
  const currentReservePrice = standardReservePrice + (i % 3) * 500;
  const grade: VehicleGrade = ['S', 'A', 'A', 'B', 'C', 'D'][i % 6] as VehicleGrade;

  const createdDate = new Date(2026, 4, 8 - Math.floor(i / 3));
  const purchaseDate = new Date(createdDate.getTime() - (15 + i * 2) * 24 * 60 * 60 * 1000);
  const inboundDate = new Date(purchaseDate.getTime() + 24 * 60 * 60 * 1000);
  const assessDate = new Date(purchaseDate.getTime() + 12 * 60 * 60 * 1000);
  const updatedDate = new Date(createdDate.getTime() + (i % 5) * 24 * 60 * 60 * 1000);

  // 计算库存时长
  const today = new Date(2026, 4, 8);
  const inventoryDays = Math.floor((today.getTime() - inboundDate.getTime()) / (24 * 60 * 60 * 1000));

  // 根据状态确定车辆状态
  let vehicleStatus: VehicleStatusType;
  if (status === 'pending_disposal') {
    vehicleStatus = disposalType === 'wholesale' ? '待拍卖' : '寄售中';
  } else if (status === 'executing') {
    if (disposalType === 'wholesale') {
      vehicleStatus = i % 3 === 0 ? '待拍卖' : i % 3 === 1 ? '流拍' : '待拍卖';
    } else {
      vehicleStatus = '寄售中';
    }
  } else if (status === 'completed') {
    vehicleStatus = disposalType === 'wholesale' ? '成交' : '已成交';
  } else {
    vehicleStatus = '已取消';
  }

  // 拍卖最高价
  let auctionMaxPrice: number | null = null;
  if (disposalType === 'wholesale') {
    if (status === 'completed') {
      auctionMaxPrice = currentReservePrice + 2000 + (i % 10) * 500;
    } else if (status === 'executing' && vehicleStatus === '流拍') {
      auctionMaxPrice = currentReservePrice - 1000;
    } else if (status === 'executing' && i % 2 === 0) {
      auctionMaxPrice = currentReservePrice - 500;
    }
  }

  // 零售价格
  let retailPrice: number | null = null;
  if (disposalType === 'retail') {
    retailPrice = currentReservePrice + 3000 + (i % 5) * 1000;
  }

  // 零售车辆类型
  const retailVehicleTypes = ['精品车', '经济适用车', '豪华车', '新能源车', '特价车'];
  const retailVehicleType = disposalType === 'retail' ? retailVehicleTypes[i % 5] : undefined;

  // 渠道名称
  const platformNames = {
    youjia: '优加车拍',
    zhuandian: '专电优拍',
    youliang: '有辆',
    qichejie: '汽车街',
    youxinpai: '优信拍',
  };
  const retailChannels = ['线下门店', '自营电商平台', '合作经销商', '第三方平台'];
  const channelName = disposalType === 'wholesale'
    ? platformNames[platform]
    : retailChannels[i % 4];

  // 保留价异常说明
  const reservePriceReason = currentReservePrice < standardReservePrice
    ? `市场行情下滑，建议适当降低保留价以提高成交率。参考近期同类车型成交数据，此价格仍在合理范围内。`
    : undefined;

  // 批发特有字段
  const transferDays = disposalType === 'wholesale' ? (7 + (i % 3) * 7) : undefined;
  const transferNote = disposalType === 'wholesale' && i % 2 === 0
    ? '节假日顺延，逾期每日产生违约金500元'
    : undefined;
  const vehicleConditionDesc = i % 3 === 0
    ? '车辆后翼子板有补漆，更换了原厂轮胎，其他部位均为原版原漆。'
    : undefined;

  // 保管人电话
  const keeperPhone = `138${String(10000000 + i).slice(-8)}`;

  const cancelReasons = [
    '车辆已通过其他渠道处置',
    '车辆信息有误，需重新评估',
    '客户要求撤回',
    '市场行情变化，需重新定价',
  ];

  return {
    id: String(i + 1),
    strategyNo: `STR${createdDate.getFullYear()}${String(createdDate.getMonth() + 1).padStart(2, '0')}${String(createdDate.getDate()).padStart(2, '0')}${String(10000 + i).slice(-5)}`,
    vin: generateVIN(i),
    licensePlate: generatePlate(i),
    brandModel: `${vehicle.brand}-${vehicle.model}`,
    brand: vehicle.brand,
    model: vehicle.model,
    color: vehicle.color,
    year: vehicle.year,
    mileage: 10000 + (i * 3000),

    // 处置信息
    disposalType,
    vehicleCategory: disposalType === 'wholesale' ? vehicleCategory : undefined,
    retailVehicleType,
    platform,
    channelName,

    // 财务指标
    purchasePrice,
    currentReservePrice,
    standardReservePrice,
    marketPriceMin: disposalType === 'wholesale' ? Math.round((purchasePrice - 5000) / 10000 * 100) / 100 : undefined,
    marketPriceMax: disposalType === 'wholesale' ? Math.round((purchasePrice + 8000) / 10000 * 100) / 100 : undefined,
    auctionMaxPrice,
    retailPrice,
    reservePriceReason,

    // 状态信息
    status,
    vehicleStatus,
    disposalCount: status === 'executing' ? (1 + i % 2) : status === 'completed' ? (1 + i % 3) : status === 'cancelled' ? (i % 2) : 0,

    // 基础信息
    location: i % 5 === 0 ? '河南-郑州' : i % 5 === 1 ? '广东-深圳' : i % 5 === 2 ? '北京-北京' : i % 5 === 3 ? '上海-上海' : '浙江-杭州',
    store: stores[i % stores.length],
    purchaseTime: `${purchaseDate.getFullYear()}-${String(purchaseDate.getMonth() + 1).padStart(2, '0')}-${String(purchaseDate.getDate()).padStart(2, '0')}`,
    inventoryDays,
    creator: operators[i % operators.length],
    createdTime: `${createdDate.getFullYear()}-${String(createdDate.getMonth() + 1).padStart(2, '0')}-${String(createdDate.getDate()).padStart(2, '0')} ${String(10 + (i % 8)).padStart(2, '0')}:${String(i % 60).padStart(2, '0')}`,
    updatedTime: `${updatedDate.getFullYear()}-${String(updatedDate.getMonth() + 1).padStart(2, '0')}-${String(updatedDate.getDate()).padStart(2, '0')} ${String(14 + (i % 6)).padStart(2, '0')}:${String(i % 60).padStart(2, '0')}`,
    source,

    // 批发特有字段
    transferDays,
    transferNote,
    vehicleConditionDesc,

    // 其他信息
    grade,
    assessor: assessors[i % assessors.length],
    assessTime: `${assessDate.getFullYear()}-${String(assessDate.getMonth() + 1).padStart(2, '0')}-${String(assessDate.getDate()).padStart(2, '0')} ${String(10 + (i % 5)).padStart(2, '0')}:30`,
    paintRepair: i % 5,
    frameRepair: grade === 'D' ? (1 + i % 2) : grade === 'C' ? (i % 2) : 0,
    majorDamage: grade === 'D' ? '骨架受损,建议降价处置' : grade === 'C' ? '轻微事故' : '无',
    assessorNote: grade === 'S' ? '车况极佳,原版原漆,可快速处置' : grade === 'A' ? '车况良好,仅有轻微划痕' : grade === 'B' ? '车况一般,需适当降价' : grade === 'C' ? '有事故记录,建议谨慎定价' : '事故车,建议大幅降价',
    autoDispatch: i % 3 === 0,
    remarks: i % 4 === 0 ? `${vehicle.brand}${vehicle.model},车况${grade}级,建议快速处置` : '',
    cancelReason: status === 'cancelled' ? cancelReasons[i % cancelReasons.length] : undefined,
    ownerType: i % 2 === 0 ? '个人' : '单位',
    useType: i % 4 === 0 ? '营运' : '非营运',
    keeper: `保管员${String.fromCharCode(65 + (i % 5))}`,
    keeperPhone,
    inboundTime: `${inboundDate.getFullYear()}-${String(inboundDate.getMonth() + 1).padStart(2, '0')}-${String(inboundDate.getDate()).padStart(2, '0')} 09:15`,
  };
});

// 生成处置记录数据
export const mockRecords: DisposalRecord[] = [];
mockStrategies.forEach((strategy, strategyIndex) => {
  // 只有批发类型才有处置记录
  if (strategy.disposalType !== 'wholesale') return;

  const recordCount = strategy.disposalCount || (strategy.status === 'completed' ? 1 : 0);

  for (let i = 0; i < recordCount; i++) {
    const isLastRecord = i === recordCount - 1;
    const result: RecordResult =
      strategy.status === 'completed' && isLastRecord ? 'sold' :
      strategy.status === 'executing' && isLastRecord ? 'bidding' :
      strategy.status === 'cancelled' && isLastRecord ? 'suspended' :
      'unsold';

    const startDate = new Date(strategy.createdTime);
    startDate.setDate(startDate.getDate() + i);
    startDate.setHours(16, 0, 0, 0);

    const endDate = new Date(startDate);
    endDate.setHours(result === 'bidding' ? 23 : 16, 0, 0, 0);
    if (result === 'bidding') {
      endDate.setDate(endDate.getDate() + 1);
    }

    const viewCount = 100 + Math.floor(Math.random() * 300);
    const bidderCount = result === 'suspended' ? 0 : 3 + Math.floor(Math.random() * 15);
    const bidCount = result === 'suspended' ? 0 : bidderCount * (1 + Math.floor(Math.random() * 4));

    const priceAdjustment = i * 5000;
    const currentStartPrice = Math.round(strategy.currentReservePrice * 0.85) - priceAdjustment;
    const currentReservePrice = strategy.currentReservePrice - priceAdjustment;
    const increment = 500;

    let maxBid: number | null = null;
    if (result === 'sold') {
      maxBid = currentReservePrice + Math.floor(Math.random() * 20000);
    } else if (result === 'unsold') {
      maxBid = currentReservePrice - 5000 - Math.floor(Math.random() * 10000);
    } else if (result === 'bidding') {
      maxBid = currentStartPrice + Math.floor(Math.random() * (currentReservePrice - currentStartPrice));
    }

    const buyer = result === 'sold' ? dealers[Math.floor(Math.random() * dealers.length)] : null;

    mockRecords.push({
      id: `${strategyIndex + 1}-${i + 1}`,
      recordNo: `JL${startDate.getFullYear()}${String(startDate.getMonth() + 1).padStart(2, '0')}${String(startDate.getDate()).padStart(2, '0')}${String(100000 + strategyIndex * 10 + i).slice(-6)}`,
      strategyNo: strategy.strategyNo,
      strategyId: strategy.id,
      vin: strategy.vin,
      licensePlate: strategy.licensePlate,
      brandModel: strategy.brandModel,
      platform: strategy.platform,
      startTime: `${startDate.getFullYear()}-${String(startDate.getMonth() + 1).padStart(2, '0')}-${String(startDate.getDate()).padStart(2, '0')} ${String(startDate.getHours()).padStart(2, '0')}:00`,
      endTime: `${endDate.getFullYear()}-${String(endDate.getMonth() + 1).padStart(2, '0')}-${String(endDate.getDate()).padStart(2, '0')} ${String(endDate.getHours()).padStart(2, '0')}:00`,
      startPrice: currentStartPrice,
      reservePrice: currentReservePrice,
      increment,
      viewCount,
      bidderCount,
      bidCount,
      maxBid,
      result,
      buyer,
      buyerPhone: buyer ? `138****${String(1000 + Math.floor(Math.random() * 9000))}` : null,
      orderNo: result === 'sold' ? `DD${endDate.getFullYear()}${String(endDate.getMonth() + 1).padStart(2, '0')}${String(endDate.getDate()).padStart(2, '0')}${String(100000 + strategyIndex).slice(-6)}` : null,
    });
  }
});

// 生成出价历史
export const mockBidHistory: BidHistory[] = [];
mockRecords.forEach((record) => {
  if (record.result === 'suspended' || !record.maxBid) return;

  const bidHistoryCount = Math.min(record.bidCount, 20);
  const priceGap = record.maxBid - record.startPrice;
  const priceStep = priceGap / bidHistoryCount;

  for (let i = 0; i < bidHistoryCount; i++) {
    const bidTime = new Date(record.startTime);
    const totalMinutes = (new Date(record.endTime).getTime() - bidTime.getTime()) / 60000;
    bidTime.setMinutes(bidTime.getMinutes() + Math.floor((totalMinutes / bidHistoryCount) * (bidHistoryCount - i)));

    mockBidHistory.push({
      id: `${record.id}-bid-${i + 1}`,
      recordId: record.id,
      bidder: dealers[Math.floor(Math.random() * dealers.length)],
      amount: Math.round(record.startPrice + priceStep * (bidHistoryCount - i)),
      time: `${bidTime.getFullYear()}-${String(bidTime.getMonth() + 1).padStart(2, '0')}-${String(bidTime.getDate()).padStart(2, '0')} ${String(bidTime.getHours()).padStart(2, '0')}:${String(bidTime.getMinutes()).padStart(2, '0')}:${String(bidTime.getSeconds()).padStart(2, '0')}`,
      rank: i + 1,
    });
  }
});

// 生成操作日志
export const mockOperationLogs: OperationLog[] = [];
mockStrategies.forEach((strategy) => {
  const createdDate = new Date(strategy.createdTime);

  // 创建策略日志
  mockOperationLogs.push({
    id: `log-${strategy.id}-1`,
    relatedId: strategy.id,
    operator: strategy.creator,
    action: '创建了处置策略',
    time: strategy.createdTime,
    details: `处置方式: ${strategy.disposalType === 'wholesale' ? '批发' : '零售'}, 当前保留价: ¥${strategy.currentReservePrice.toLocaleString()}, 公司标准保留价: ¥${strategy.standardReservePrice.toLocaleString()}`,
    type: 'strategy',
  });

  // 状态变更日志
  if (strategy.status === 'executing' || strategy.status === 'completed') {
    const executeDate = new Date(createdDate.getTime() + 2 * 60 * 60 * 1000);
    const platformNames = {
      youjia: '优加车拍',
      zhuandian: '专电优拍',
      youliang: '有辆',
      qichejie: '汽车街',
      youxinpai: '优信拍',
    };
    mockOperationLogs.push({
      id: `log-${strategy.id}-2`,
      relatedId: strategy.id,
      operator: '系统',
      action: '策略状态变更',
      time: `${executeDate.getFullYear()}-${String(executeDate.getMonth() + 1).padStart(2, '0')}-${String(executeDate.getDate()).padStart(2, '0')} ${String(executeDate.getHours()).padStart(2, '0')}:${String(executeDate.getMinutes()).padStart(2, '0')}`,
      details: `待处置 → 执行中(车辆已上架至${platformNames[strategy.platform]}平台)`,
      type: 'strategy',
    });
  }

  if (strategy.disposalCount > 1) {
    const adjustDate = new Date(createdDate.getTime() + 24 * 60 * 60 * 1000);
    const oldPrice = strategy.currentReservePrice + 5000;
    mockOperationLogs.push({
      id: `log-${strategy.id}-3`,
      relatedId: strategy.id,
      operator: strategy.creator,
      action: '调整了处置策略',
      time: `${adjustDate.getFullYear()}-${String(adjustDate.getMonth() + 1).padStart(2, '0')}-${String(adjustDate.getDate()).padStart(2, '0')} 10:30`,
      details: `调整原因: 流拍-保留价过高, 当前保留价: ¥${oldPrice.toLocaleString()} → ¥${strategy.currentReservePrice.toLocaleString()}`,
      type: 'strategy',
    });
  }

  if (strategy.status === 'cancelled') {
    const cancelDate = new Date(createdDate.getTime() + 12 * 60 * 60 * 1000);
    mockOperationLogs.push({
      id: `log-${strategy.id}-cancel`,
      relatedId: strategy.id,
      operator: strategy.creator,
      action: '取消了处置策略',
      time: `${cancelDate.getFullYear()}-${String(cancelDate.getMonth() + 1).padStart(2, '0')}-${String(cancelDate.getDate()).padStart(2, '0')} ${String(cancelDate.getHours()).padStart(2, '0')}:${String(cancelDate.getMinutes()).padStart(2, '0')}`,
      details: strategy.cancelReason || '取消原因: 车辆已通过其他渠道售出',
      type: 'strategy',
    });
  }

  if (strategy.status === 'completed') {
    const completeDate = new Date(createdDate.getTime() + (strategy.disposalCount + 1) * 24 * 60 * 60 * 1000);
    mockOperationLogs.push({
      id: `log-${strategy.id}-complete`,
      relatedId: strategy.id,
      operator: '系统',
      action: '策略已完成',
      time: `${completeDate.getFullYear()}-${String(completeDate.getMonth() + 1).padStart(2, '0')}-${String(completeDate.getDate()).padStart(2, '0')} 16:00`,
      details: '处置记录成交,策略已完成',
      type: 'strategy',
    });
  }
});

// 生成流转历史数据
export const mockTransferHistory: TransferHistory[] = [];

// 为每个处置记录生成流转历史
mockRecords.forEach((record, index) => {
  const strategy = mockStrategies.find(s => s.id === record.strategyId);
  if (!strategy) return;

  const recordCreateDate = new Date(record.startTime);
  recordCreateDate.setDate(recordCreateDate.getDate() - 3);

  // 1. 创建记录
  mockTransferHistory.push({
    id: `th-record-${index}-1`,
    relatedId: record.id,
    relatedType: 'record',
    operator: '张小明',
    operatorId: 'user001',
    time: `${recordCreateDate.getFullYear()}-${String(recordCreateDate.getMonth() + 1).padStart(2, '0')}-${String(recordCreateDate.getDate()).padStart(2, '0')} 10:30:00`,
    action: '创建处置记录',
    actionType: '创建',
    changes: [
      { fieldName: 'recordNo', fieldLabel: '记录流水号', oldValue: null, newValue: record.recordNo },
      { fieldName: 'vin', fieldLabel: 'VIN码', oldValue: null, newValue: record.vin },
      { fieldName: 'platform', fieldLabel: '处置平台', oldValue: null, newValue: record.platform },
      { fieldName: 'startPrice', fieldLabel: '起拍价', oldValue: null, newValue: record.startPrice },
      { fieldName: 'reservePrice', fieldLabel: '保留价', oldValue: null, newValue: record.reservePrice },
    ],
    description: '系统根据策略自动创建处置记录',
  });

  // 2. 开拍
  const startDate = new Date(record.startTime);
  mockTransferHistory.push({
    id: `th-record-${index}-2`,
    relatedId: record.id,
    relatedType: 'record',
    operator: '系统',
    operatorId: 'system',
    time: record.startTime,
    action: '开始竞拍',
    actionType: '状态变更',
    changes: [
      { fieldName: 'result', fieldLabel: '处置结果', oldValue: null, newValue: 'bidding' },
    ],
    description: `在${record.platform}平台开始竞拍`,
  });

  // 3. 竞价过程中的关键事件
  if (record.bidCount > 0) {
    const midTime = new Date(startDate.getTime() + (new Date(record.endTime).getTime() - startDate.getTime()) / 2);
    mockTransferHistory.push({
      id: `th-record-${index}-3`,
      relatedId: record.id,
      relatedType: 'record',
      operator: '系统',
      operatorId: 'system',
      time: `${midTime.getFullYear()}-${String(midTime.getMonth() + 1).padStart(2, '0')}-${String(midTime.getDate()).padStart(2, '0')} ${String(midTime.getHours()).padStart(2, '0')}:${String(midTime.getMinutes()).padStart(2, '0')}:00`,
      action: '价格更新',
      actionType: '修改',
      changes: [
        { fieldName: 'maxBid', fieldLabel: '最高出价', oldValue: record.startPrice, newValue: record.maxBid },
        { fieldName: 'bidCount', fieldLabel: '出价次数', oldValue: Math.floor(record.bidCount / 2), newValue: record.bidCount },
      ],
      description: `当前有${record.bidderCount}人参与竞价，已出价${record.bidCount}次`,
    });
  }

  // 4. 结拍
  mockTransferHistory.push({
    id: `th-record-${index}-4`,
    relatedId: record.id,
    relatedType: 'record',
    operator: '系统',
    operatorId: 'system',
    time: record.endTime,
    action: record.result === 'sold' ? '成交' : '流拍',
    actionType: record.result === 'sold' ? '完成' : '状态变更',
    changes: [
      { fieldName: 'result', fieldLabel: '处置结果', oldValue: 'bidding', newValue: record.result },
      ...(record.result === 'sold' ? [
        { fieldName: 'buyer', fieldLabel: '买方', oldValue: null, newValue: record.buyer },
        { fieldName: 'maxBid', fieldLabel: '成交价', oldValue: null, newValue: record.maxBid },
      ] : []),
    ],
    description: record.result === 'sold'
      ? `成交价¥${record.maxBid?.toLocaleString()}，买方：${record.buyer}`
      : `最高出价¥${record.maxBid?.toLocaleString() || '无'}未达到保留价¥${record.reservePrice.toLocaleString()}`,
  });

  // 5. 如果成交，添加订单生成记录
  if (record.result === 'sold' && record.orderNo) {
    const orderDate = new Date(record.endTime);
    orderDate.setMinutes(orderDate.getMinutes() + 5);
    mockTransferHistory.push({
      id: `th-record-${index}-5`,
      relatedId: record.id,
      relatedType: 'record',
      operator: '系统',
      operatorId: 'system',
      time: `${orderDate.getFullYear()}-${String(orderDate.getMonth() + 1).padStart(2, '0')}-${String(orderDate.getDate()).padStart(2, '0')} ${String(orderDate.getHours()).padStart(2, '0')}:${String(orderDate.getMinutes()).padStart(2, '0')}:00`,
      action: '生成订单',
      actionType: '完成',
      changes: [
        { fieldName: 'orderNo', fieldLabel: '订单编号', oldValue: null, newValue: record.orderNo },
      ],
      description: '系统自动生成交易订单，等待交付',
    });
  }
});

// 辅助函数：根据ID获取策略
export const getStrategyById = (id: string): Strategy | undefined => {
  return mockStrategies.find(s => s.id === id);
};

// 辅助函数：根据策略ID获取记录
export const getRecordsByStrategyId = (strategyId: string): DisposalRecord[] => {
  return mockRecords.filter(r => r.strategyId === strategyId);
};

// 辅助函数：根据记录ID获取出价历史
export const getBidHistoryByRecordId = (recordId: string): BidHistory[] => {
  return mockBidHistory.filter(b => b.recordId === recordId).sort((a, b) => b.rank - a.rank);
};

// 辅助函数：根据相关ID获取操作日志
export const getOperationLogsByRelatedId = (relatedId: string, type: 'strategy' | 'record'): OperationLog[] => {
  return mockOperationLogs.filter(l => l.relatedId === relatedId && l.type === type).sort((a, b) =>
    new Date(b.time).getTime() - new Date(a.time).getTime()
  );
};

// 辅助函数：根据相关ID获取流转历史
export const getTransferHistoryByRelatedId = (relatedId: string, relatedType: 'strategy' | 'record'): TransferHistory[] => {
  return mockTransferHistory.filter(h => h.relatedId === relatedId && h.relatedType === relatedType).sort((a, b) =>
    new Date(b.time).getTime() - new Date(a.time).getTime()
  );
};
