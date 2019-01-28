import React from "react";
import Card from "./Card";
import "./ListNewsCard.scss";

class ListNewsCard extends React.Component {
    render() {
        const listItems = cardData.map((newsItem) => <Card cardData = {newsItem} />);
        return (<div id="flex-container" className={"center"}>
            {listItems}
        </div>)
    }
}

export default ListNewsCard;

const cardData =  [
    {
        "feed": {
            "language": "vi",
            "title": "Dân Trí: Sports",
            "url": "dantri.com.vn",
            "country": "vn",
            "popularity": 1.5113,
            "icons": [
                [
                    "apple-touch-icon",
                    152,
                    152,
                    "6d9257f8b97fec843879f85080641ee6",
                    1
                ],
                [
                    "shortcut-icon",
                    48,
                    48,
                    "2e5f0809f99610c6228200c0b11fa9e0",
                    0.6
                ]
            ],
            "id": 8467
        },
        "image": {
            "url": "https://dantricdn.com/thumb_w/640/2018/12/23/man-city-10-1545559220270558737143.jpg",
            "width": 640,
            "height": 427
        },
        "id": "acd65d01bc4dad78c128f50265add2a1ae24e0d9",
        "category": "sp",
        "title": "Nhìn lại thất bại gây sốc của Man City trước Crystal Palace",
        "type": "feed",
        "full_text_length": 100,
        "date_published": "2018-12-23T10:59:01Z",
        "url": "https://dantri.com.vn/the-thao/nhin-lai-that-bai-gay-soc-cua-man-city-truoc-crystal-palace-20181223174637904.htm",
        "summary": "Mãi về cuối trận, Man City mới có bàn thắng rút ngắn tỉ số xuống 2-3, nhưng đã quá muộn, họ vẫn thua",
        "lsh_dupes": [
            "995151833409aacb8ed83f268007831e394f791c"
        ]
    },
    {
        "feed": {
            "language": "vi",
            "title": "Kenh14: Sport",
            "url": "kenh14.vn",
            "country": "vn",
            "popularity": 1.14376,
            "icons": [
                [
                    "apple-touch-icon",
                    72,
                    72,
                    "a700704415cf847004b63e5c419b3319",
                    0.8
                ]
            ],
            "id": 8470
        },
        "image": {
            "url": "https://kenh14cdn.com/2018/12/23/1131670-copy-15455597173801907702074.jpg",
            "width": 1920,
            "height": 1920
        },
        "id": "78d823e58ce31e80e0fb35157b995b1379643679",
        "category": "sp",
        "title": "Chưa đi Hàn Quốc, Đình Trọng ở nhà phụ mẹ bán bưởi",
        "type": "feed",
        "full_text_length": 2054,
        "date_published": "2018-12-23T10:53:07Z",
        "url": "http://kenh14.vn/chua-di-han-quoc-dinh-trong-o-nha-phu-me-ban-buoi-2018122317122459.chn",
        "summary": "Ít ai biết rằng gia đình trung vệ Trần Đình Trọng có nghề trồng và kinh doanh bưởi. Mảnh vườn nhỏ với những gốc bưởi trĩu quả lần đầu tiên được biết đến qua lời giới thiệu hài hước của cầu thủ tài năng đang thu hút mọi ánh nhìn của truyền thông."
    },
    {
        "feed": {
            "language": "vi",
            "title": "24h: Football",
            "url": "24h.com.vn",
            "country": "vn",
            "popularity": 2,
            "icons": [
                [
                    "shortcut-icon",
                    100,
                    100,
                    "77bad23652c98f496e57feb3d084f2bb",
                    0.9
                ],
                [
                    "icon",
                    19,
                    19,
                    "8643acb11b7ca5cf157d7c6fd86df17a",
                    0.5
                ],
                [
                    "default-favicon",
                    19,
                    19,
                    "e7cbb8da90b3b8443e922cf5f1fe78fe",
                    0.5
                ]
            ],
            "id": 8466
        },
        "image": {
            "url": "https://image-us.24h.com.vn/upload/4-2018/images/2018-12-23/1_68209-1545557642-136-width1200height628-watermark.jpg",
            "width": 1200,
            "height": 628
        },
        "id": "f17dbc6edeb09b2c7de3579cb126cb2ad9200f67",
        "category": "sp",
        "title": "ĐT Việt Nam đấu Asian Cup: “Kẻ đóng thế” tự tin khỏa lấp Đình Trọng",
        "type": "feed",
        "date_published": "2018-12-23T09:41:28Z",
        "url": "https://www.24h.com.vn/bong-da/dt-viet-nam-dau-asian-cup-ke-dong-the-tu-tin-khoa-lap-dinh-trong-c48a1015591.html",
        "summary": "ĐT Việt Nam đang gấp rút chuẩn bị cho Asian Cup 2019 - giải đấu vốn đã cận kề. Vào lúc này, câu hỏi ai thay thế Đình Trọng có lẽ được quan tâm hơn cả."
    },
    {
        "feed": {
            "language": "vi",
            "title": "Việt Báo: Sports",
            "url": "vietbao.vn",
            "country": "vn",
            "popularity": 1,
            "icons": [
                [
                    "shortcut-icon",
                    32,
                    32,
                    "433ee30a0eb9d20ce56569ae6f5658e5",
                    0.6
                ],
                [
                    "default-favicon",
                    16,
                    16,
                    "84bed2f802b15c12d131d31bcfe65a72",
                    0.5
                ]
            ],
            "id": 8479
        },
        "image": {
            "url": "http://a9.vietbao.vn/images/vn899/209/2018/12/20181223-hlv-park-hang-seo-asian-cup-nhieu-doi-thu-manh-nen-muc-tieu-thap-hon-aff-cup-2.jpg",
            "width": 825,
            "height": 741
        },
        "id": "ec43c6412b844566af3868c19d095ede7877755c",
        "category": "sp",
        "title": "HLV Park Hang-seo: \"Asian Cup nhiều đối thủ mạnh nên mục tiêu thấp hơn...",
        "type": "feed",
        "full_text_length": 2572,
        "date_published": "2018-12-23T07:54:03Z",
        "url": "http://vietbao.vn/The-thao/HLV-Park-Hangseo-Asian-Cup-nhieu-doi-thu-manh-nen-muc-tieu-thap-hon-AFF-Cup/209794239/134/",
        "author": "Việt Báo",
        "summary": "\"Asian Cup có nhiều đội mạnh, vì vậy mục tiêu sẽ thấp hơn một chút so với AFF Cup. Tôi nghĩ vượt qua vòng bảng để vào tới tứ kết là một thành công lớn\", HLV Park Hangseo chia sẻ."
    },
    {
        "feed": {
            "language": "vi",
            "title": "Tiền Phong: Sports",
            "url": "tienphong.vn",
            "country": "vn",
            "popularity": 1.07781,
            "icons": [
                [
                    "og-image",
                    300,
                    96,
                    "21bf20b8f07e86f716338c8e35f71d67",
                    0.6
                ],
                [
                    "shortcut-icon",
                    48,
                    48,
                    "dbbd75000dfb32c2ec6724a488b385d3",
                    0.6
                ]
            ],
            "id": 8475
        },
        "image": {
            "url": "https://image.tienphong.vn/Uploaded/ctv_danganh/2018_12_23/tien_phong_the_thao_ole_solskjaer_FZOC.jpg",
            "width": 634,
            "height": 403
        },
        "id": "c9735fb791cce779396b235fe31a6c831e4f0172",
        "category": "sp",
        "title": "Solskjaer làm được điều mà Mourinho, Van Gaal bất lực ở M.U",
        "type": "feed",
        "popularity_score": 1.01883,
        "is_popular": false,
        "full_text_length": 1240,
        "date_published": "2018-12-23T07:47:00Z",
        "url": "https://www.tienphong.vn/the-thao/solskjaer-lam-duoc-dieu-ma-mourinho-van-gaal-bat-luc-o-mu-1359626.tpo",
        "summary": "Ngay trong trận ra mắt M.U, Ole Solskjaer đã làm được điều mà các HLV tiền nhiệm không thể làm được trong suốt 5 năm qua.Paul Pogba tỏa sáng ngay sau khi M.U sa thải MourinhoMục kích chiến thắng 5 sao của M.U trong ngày HLV Solskjaer ra mắt‘Bom tấn’ tỏa sáng, Arsenal áp sát top 4Man City thua sốc trước Crystal PalaceM.U bùng nổ trong ngày tân HLV Solskjaer ra mắt"
    },
    {
        "feed": {
            "language": "vi",
            "title": "24h: Sports",
            "url": "24h.com.vn",
            "country": "vn",
            "popularity": 1,
            "icons": [
                [
                    "shortcut-icon",
                    100,
                    100,
                    "77bad23652c98f496e57feb3d084f2bb",
                    0.9
                ],
                [
                    "icon",
                    19,
                    19,
                    "8643acb11b7ca5cf157d7c6fd86df17a",
                    0.5
                ],
                [
                    "default-favicon",
                    19,
                    19,
                    "e7cbb8da90b3b8443e922cf5f1fe78fe",
                    0.5
                ]
            ],
            "id": 2977
        },
        "image": {
            "url": "https://image-us.24h.com.vn/upload/4-2018/images/2018-12-22/anh-bia-quyet-chien-newwww-1545440640-825-width640height480-auto-crop-watermark.jpg",
            "width": 640,
            "height": 335
        },
        "id": "c5498f03c74d21d4e70803d07cb59029c964b18d",
        "category": "sp",
        "title": "“Vua bi-a Việt” kiếm tiền “cực khủng”, châu Á ngả mũ chào thua",
        "type": "feed",
        "popularity_score": 1.18395,
        "is_popular": true,
        "date_published": "2018-12-23T05:39:06Z",
        "url": "https://www.24h.com.vn/the-thao/vua-bi-a-viet-kiem-tien-cuc-khung-chau-a-nga-mu-chao-thua-c101a1015262.html",
        "summary": "Trần Quyết Chiến đã kết thúc năm 2018 đại thành công bằng thứ hạng bất ngờ trong danh sách các cơ thủ kiếm tiền tốt nhất năm nay."
    },
    {
        "feed": {
            "language": "vi",
            "title": "Bóng Đá",
            "url": "bongda.com.vn",
            "country": "vn",
            "popularity": 2.84194,
            "icons": [
                [
                    "shortcut-icon",
                    16,
                    16,
                    "74fad8f66f19803dee28567ef9a77537",
                    0.5
                ]
            ],
            "id": 2973
        },
        "image": {
            "url": "http://media.bongda.com.vn/resize/534x280/files/huy.phandang/2018/12/23/dd-1047.jpg",
            "width": 534,
            "height": 280
        },
        "id": "c68ad2319e1818e14043b6ec0d092cc5d9418728",
        "category": "sp",
        "title": "Báo Trung Quốc: Quang Hải là truyền nhân của Messi, sẽ khuấy đảo Asian Cup",
        "type": "feed",
        "popularity_score": 1.0792,
        "is_popular": true,
        "date_published": "2018-12-23T04:46:23Z",
        "url": "http://www.bongda.com.vn/bao-trung-quoc-quang-hai-la-truyen-nhan-cua-messi-se-khuay-dao-asian-cup-d478306.html",
        "summary": "Trang tin Sina (Trung Quốc) so sánh tài năng của Nguyễn Quang Hải như Lionel Messi và tin rằng anh sẽ giúp ĐT Việt Nam làm nên cơn địa chấn ở Asian Cup 2019."
    },
    {
        "feed": {
            "language": "vi",
            "title": "Nhan Dan: Sports",
            "url": "nhandan.com.vn",
            "country": "vn",
            "popularity": 1,
            "icons": [
                [
                    "og-image",
                    817,
                    654,
                    "285ce5a6e2cf95535185308127217378",
                    0.6
                ],
                [
                    "shortcut-icon",
                    16,
                    16,
                    "a3ec847cacb21a58f5f53dd56f62bdbe",
                    0.5
                ]
            ],
            "id": 8473
        },
        "image": {
            "url": "http://www.nhandan.com.vn/cdn/vn/media/k2/items/src/3865/befc4ed7a57d46aa61f72bf683c8c723.jpg",
            "width": 640,
            "height": 427
        },
        "id": "f515af5b8d9b4e972a58f80352ff828c811b257f",
        "category": "sp",
        "title": "Thắng Wolverhampton 2-0, Liverpool vững vàng ngôi đầu bảng",
        "type": "feed",
        "full_text_length": 1426,
        "date_published": "2018-12-23T03:04:38Z",
        "url": "http://www.nhandan.com.vn/thethao/bong-da-quoc-te/item/38657202-thang-wolverhampton-2-0-liverpool-vung-vang-ngoi-dau-bang.html",
        "summary": "NDĐT - Liverpool tiếp tục thể hiện phong độ cực cao, thắng đội bóng từng khiến Chelsea và Man City mất điểm Wolverhampton 2-0 trận đấu sớm vòng 18 trên sân khách vừa diễn ra. M. Salah lập công giúp Liverpool giữ vững ngôi đầu bảng và cá nhân anh vươn lên dẫn đầu danh sách “vua” phá lưới.",
        "lsh_dupes": [
            "09159a1b6a814b943b79a9d4c41d6338474d6c90",
            "5d47b23aff28aa438e6dbabeb0d2b9448341fab6"
        ]
    },
    {
        "feed": {
            "language": "vi",
            "title": "Người Lao Động: Sports",
            "url": "nld.com.vn",
            "country": "vn",
            "popularity": 1,
            "icons": [
                [
                    "shortcut-icon",
                    64,
                    64,
                    "0aa48ba1d8ffd54774045932eaeb0c8a",
                    0.8
                ]
            ],
            "id": 8472
        },
        "image": {
            "url": "https://nld.mediacdn.vn/zoom/600_315/2018/12/23/ole-v-pogba-15455247945761778326417.jpg",
            "width": 600,
            "height": 315
        },
        "id": "ed8ed712fb85a4df6d4121f4ddec1e015e0bf5ce",
        "category": "sp",
        "title": "Tướng mới Solskjaer ra tay, Man United hồi sinh cực kỳ ấn tượng",
        "type": "feed",
        "popularity_score": 1.01887,
        "is_popular": false,
        "full_text_length": 2830,
        "date_published": "2018-12-23T01:13:23Z",
        "url": "https://nld.com.vn/the-thao/tuong-moi-solskjaer-ra-tay-man-united-hoi-sinh-cuc-ky-an-tuong-20181223073735392.htm",
        "summary": "(NLĐO) – Trận đấu ra mắt của HLV tạm quyền Ole Gunnar Solskjaer diễn ra tận Xứ Wales nhưng lại làm cho hàng chục triệu CĐV Man United nức lòng với màn trình diễn tuyệt vời của \"Quỷ đỏ\".",
        "lsh_dupes": [
            "9e2af5415019d80d05d80b4422e9ebd1bac4304d"
        ]
    },
    {
        "feed": {
            "language": "vi",
            "title": "Tiền Phong: Sports",
            "url": "tienphong.vn",
            "country": "vn",
            "popularity": 1.07781,
            "icons": [
                [
                    "og-image",
                    300,
                    96,
                    "21bf20b8f07e86f716338c8e35f71d67",
                    0.6
                ],
                [
                    "shortcut-icon",
                    48,
                    48,
                    "dbbd75000dfb32c2ec6724a488b385d3",
                    0.6
                ]
            ],
            "id": 8475
        },
        "image": {
            "url": "https://image.tienphong.vn/Uploaded/ctv_tuansandro/2018_12_23/tien_phong_the_thao_hana_giang_anh_0_BQWA.jpg",
            "width": 640,
            "height": 427
        },
        "id": "ca0266c0b299386c6076e6726ab354c6172aaf40",
        "category": "sp",
        "title": "Đường cong hút mắt của ‘Nữ hoàng phòng gym’ Hà thành",
        "type": "feed",
        "full_text_length": 263,
        "date_published": "2018-12-23T10:54:00Z",
        "url": "https://www.tienphong.vn/the-thao/duong-cong-hut-mat-cua-nu-hoang-phong-gym-ha-thanh-1359577.tpo",
        "summary": "Hana Giang Anh chắc hẳn là cái tên không còn xa lạ với cộng đồng người yêu gym Việt Nam. Cô nàng 9x còn được mệnh danh là Nữ hoàng phòng gym bởi body nóng bỏng và xinh đẹp.Ngắm siêu mẫu nóng bỏng bạn gái FellainiNgắm vòng 1 quá khổ của nữ phóng viên thể thao cuồng đội tuyển Italia"
    },
    {
        "feed": {
            "language": "vi",
            "title": "Tiền Phong: Sports",
            "url": "tienphong.vn",
            "country": "vn",
            "popularity": 1.07781,
            "icons": [
                [
                    "og-image",
                    300,
                    96,
                    "21bf20b8f07e86f716338c8e35f71d67",
                    0.6
                ],
                [
                    "shortcut-icon",
                    48,
                    48,
                    "dbbd75000dfb32c2ec6724a488b385d3",
                    0.6
                ]
            ],
            "id": 8475
        },
        "image": {
            "url": "https://image.tienphong.vn/Uploaded/toantoan/2018_12_23/khanh_thi_chi_anh_HIGE.jpg",
            "width": 665,
            "height": 449
        },
        "id": "e28886812aa70122f14a956b0f0ea315fd347a82",
        "category": "sp",
        "title": "Khánh Thi tố gian lận kết quả, BTC nói có sơ xuất nhưng không sai",
        "type": "feed",
        "full_text_length": 2332,
        "date_published": "2018-12-23T10:16:00Z",
        "url": "https://www.tienphong.vn/giai-tri/khanh-thi-to-gian-lan-ket-qua-btc-noi-co-so-xuat-nhung-khong-sai-1359688.tpo",
        "summary": "Những ngày qua Khánh Thi-Chí Anh lên tiếng về nghi ấn đánh tráo kết quả thi của hai học trò tại Đại hội Thể thao toàn quốc lần thứ 8. Ban tổ chức có công văn trả lời chính thức đơn kiến nghị của hai vận động viên, cũng như gửi Tổng cục Thể dục Thể thao và Thanh tra Bộ VHTTDL.Khánh Thi-Chí Anh: Chúng tôi sẵn sàng chịu trách nhiệm trước pháp luậtLùm xùm trao giải nhầm cho học trò Khánh Thi, Chí Anh nói gì?"
    },
    {
        "feed": {
            "language": "vi",
            "title": "Dân Trí: Sports",
            "url": "dantri.com.vn",
            "country": "vn",
            "popularity": 1.5113,
            "icons": [
                [
                    "apple-touch-icon",
                    152,
                    152,
                    "6d9257f8b97fec843879f85080641ee6",
                    1
                ],
                [
                    "shortcut-icon",
                    48,
                    48,
                    "2e5f0809f99610c6228200c0b11fa9e0",
                    0.6
                ]
            ],
            "id": 8467
        },
        "image": {
            "url": "https://dantricdn.com/2018/12/23/danh-tung--1545539100154191862269.jpg",
            "width": 1920,
            "height": 1279
        },
        "id": "8a340e1a2b892a1f20acf5edee6d60671f9598fb",
        "category": "sp",
        "title": "Phim do MC Danh Tùng, Lương Nguyệt Anh đóng đoạt giải Vàng",
        "type": "feed",
        "full_text_length": 2570,
        "date_published": "2018-12-23T10:07:15Z",
        "url": "https://dantri.com.vn/dien-anh/phim-do-mc-danh-tung-luong-nguyet-anh-dong-doat-giai-vang-20181223170345141.htm",
        "summary": "Tối qua (22/12), Lễ bế mạc và trao giải Liên hoan Truyền hình toàn quốc lần thứ 38 đã chính thức diễn ra tại TP Đà Lạt, tỉnh Lâm Đồng. Ban tổ chức đã trao 30 giải Vàng, 56 giải Bạc, 128 Bằng khen cho các tác phẩm dự thi ở 9 thể loại.\n\nTrong đó, bên cạnh hai bộ phim truyện truyền hình “Ngày ấy mình đã yêu” và “Gạo nếp gạo tẻ” (phần 1) đã xuất sắc giành giải Vàng thì bộ phim ca nhạc “Bình minh cuối con đường” mà nữ ca sĩ Lương Nguyệt Anh thủ vai chính cùng MC Danh Tùng do VTV thực hiện cũng được vinh danh giải Vàng trong hạng mục Phim ca nhạc."
    },
    {
        "feed": {
            "language": "vi",
            "title": "Dân Trí: Sports",
            "url": "dantri.com.vn",
            "country": "vn",
            "popularity": 1.5113,
            "icons": [
                [
                    "apple-touch-icon",
                    152,
                    152,
                    "6d9257f8b97fec843879f85080641ee6",
                    1
                ],
                [
                    "shortcut-icon",
                    48,
                    48,
                    "2e5f0809f99610c6228200c0b11fa9e0",
                    0.6
                ]
            ],
            "id": 8467
        },
        "image": {
            "url": "https://dantricdn.com/thumb_w/640/2018/12/23/chelsea-10-1545557749243335454905.jpg",
            "width": 640,
            "height": 360
        },
        "id": "0016e7842349f16967e59a3fcca446f2a6c21dbb",
        "category": "sp",
        "title": "Nhìn lại thất bại cay đắng trên sân nhà của Chelsea trước Leicester",
        "type": "feed",
        "full_text_length": 132,
        "date_published": "2018-12-23T09:59:07Z",
        "url": "https://dantri.com.vn/the-thao/nhin-lai-that-bai-cay-dang-tren-san-nha-cua-chelsea-truoc-leicester-20181223165230705.htm",
        "summary": "Pha tranh bóng giữa Ndidi và Kante, khi Kante rời Leicester chuyển sang thi đấu cho Chelsea, \"Bày cáo\" đã chiêu mộ Ndidi về thay thế"
    },
    {
        "feed": {
            "language": "vi",
            "title": "Bóng Đá",
            "url": "bongda.com.vn",
            "country": "vn",
            "popularity": 2.84194,
            "icons": [
                [
                    "shortcut-icon",
                    16,
                    16,
                    "74fad8f66f19803dee28567ef9a77537",
                    0.5
                ]
            ],
            "id": 2973
        },
        "image": {
            "url": "http://media.bongda.com.vn/resize/534x280/files/news/2018/12/23/solskjaer-da-pha-tan-xieng-xich-duoi-thoi-mourinho-150124.jpg",
            "width": 534,
            "height": 280
        },
        "id": "71f360bfb6f39541291883982bd348725ae988eb",
        "category": "sp",
        "title": "Rooney: Solskjaer đã phá tan \"xiềng xích\" dưới thời Mourinho",
        "type": "feed",
        "popularity_score": 1.01005,
        "is_popular": false,
        "date_published": "2018-12-23T09:17:55Z",
        "url": "http://www.bongda.com.vn/rooney-solskjaer-da-pha-tan-xieng-xich-duoi-thoi-mourinho-d478337.html",
        "summary": "Những gì ngăn cản Manchester United đến với chiến thắng đã được Ole Gunnar Solskjaer phá bỏ, theo lời Wayne Rooney."
    },
    {
        "feed": {
            "language": "vi",
            "title": "Bóng Đá",
            "url": "bongda.com.vn",
            "country": "vn",
            "popularity": 2.84194,
            "icons": [
                [
                    "shortcut-icon",
                    16,
                    16,
                    "74fad8f66f19803dee28567ef9a77537",
                    0.5
                ]
            ],
            "id": 2973
        },
        "image": {
            "url": "http://media.bongda.com.vn/resize/534x280/files/huy.phandang/2018/12/23/vuvanthanh-1513.jpg",
            "width": 534,
            "height": 280
        },
        "id": "8586e07ef6abccfbc86ed075a1583a1a8057a31d",
        "category": "sp",
        "title": "Vũ Văn Thanh: \"Nếu được quyền, tôi sẽ trao Quả bóng Bạc cho cậu ấy\"",
        "type": "feed",
        "popularity_score": 1.05472,
        "is_popular": true,
        "date_published": "2018-12-23T09:17:27Z",
        "url": "http://www.bongda.com.vn/vu-van-thanh-neu-duoc-quyen-toi-se-trao-qua-bong-bac-cho-cau-ay-d478341.html",
        "summary": "Hậu vệ Vũ Văn Thanh đã có những nhận định xung quanh kết quả giải Quả bóng Vàng Việt Nam 2018."
    },
    {
        "feed": {
            "language": "vi",
            "title": "Dân Trí: Sports",
            "url": "dantri.com.vn",
            "country": "vn",
            "popularity": 1.5113,
            "icons": [
                [
                    "apple-touch-icon",
                    152,
                    152,
                    "6d9257f8b97fec843879f85080641ee6",
                    1
                ],
                [
                    "shortcut-icon",
                    48,
                    48,
                    "2e5f0809f99610c6228200c0b11fa9e0",
                    0.6
                ]
            ],
            "id": 8467
        },
        "image": {
            "url": "https://dantricdn.com/2018/12/23/bat-cho-4-1543455133375194465271-15455447534161022830020.jpg",
            "width": 640,
            "height": 484
        },
        "id": "ad8abda2d47988cb8674334a838e904afcf0abe4",
        "category": "sp",
        "title": "Hà Nội dự kiến gắn chip để quản gần 500 nghìn con chó nuôi",
        "type": "feed",
        "popularity_score": 1.02904,
        "is_popular": false,
        "full_text_length": 1524,
        "date_published": "2018-12-23T09:02:16Z",
        "url": "https://dantri.com.vn/xa-hoi/ha-noi-du-kien-gan-chip-de-quan-gan-500-nghin-con-cho-nuoi-201812231527153.htm",
        "summary": "Chi cục Thú y Hà Nội đang phối hợp với các tổ chức bảo vệ chó xây dựng đề án quản lý chó nuôi bằng phần mềm.\n\nÔng Nguyễn Ngọc Sơn - Chi cục trưởng Thú y Hà Nội cho biết, mỗi con chó sẽ được gắn chip định vị vào tai hoặc vào vòng cổ.",
        "lsh_dupes": [
            "d8a806bce9fe38d077d0d5b2b16c8c90d103c896",
            "7f8e6a6899e68662f0bc9cffc3c44aa65ccc4aec",
            "f101f8f5f62ac3b8923bccadc35d981ff3b31a22",
            "61c955da6d5cfc5785f6afad6832175a392e2a23",
            "11c17fe11f64c1dc5ba358e632dec1e7eb2c625e"
        ]
    },
    {
        "feed": {
            "language": "vi",
            "title": "24h: Football",
            "url": "24h.com.vn",
            "country": "vn",
            "popularity": 2,
            "icons": [
                [
                    "shortcut-icon",
                    100,
                    100,
                    "77bad23652c98f496e57feb3d084f2bb",
                    0.9
                ],
                [
                    "icon",
                    19,
                    19,
                    "8643acb11b7ca5cf157d7c6fd86df17a",
                    0.5
                ],
                [
                    "default-favicon",
                    19,
                    19,
                    "e7cbb8da90b3b8443e922cf5f1fe78fe",
                    0.5
                ]
            ],
            "id": 8466
        },
        "image": {
            "url": "https://image-us.24h.com.vn/upload/4-2018/images/2018-12-23/12-23-2018-9-58-47-am-1545534215-612-width640height480-auto-crop-watermark.jpg",
            "width": 640,
            "height": 335
        },
        "id": "2da4f904e1c1487bc9077e15a17b8e573d362546",
        "category": "sp",
        "title": "SAO U21 sáng nhất Asian Cup: Báo châu Á vinh danh Văn Hậu, \"Messi Nhật\"",
        "type": "feed",
        "popularity_score": 1.02322,
        "is_popular": false,
        "date_published": "2018-12-23T09:01:00Z",
        "url": "https://www.24h.com.vn/bong-da/sao-u21-sang-nhat-asian-cup-bao-chau-a-vinh-danh-van-hau-messi-nhat-c48a1015527.html",
        "summary": "Đoàn Văn Hậu là đại diện duy nhất của Việt Nam góp mặt trong top 5 tài năng U21 hứa hẹn nhất vòng chung kết Asian Cup 2019."
    },
    {
        "feed": {
            "language": "vi",
            "title": "Dân Trí: Sports",
            "url": "dantri.com.vn",
            "country": "vn",
            "popularity": 1.5113,
            "icons": [
                [
                    "apple-touch-icon",
                    152,
                    152,
                    "6d9257f8b97fec843879f85080641ee6",
                    1
                ],
                [
                    "shortcut-icon",
                    48,
                    48,
                    "2e5f0809f99610c6228200c0b11fa9e0",
                    0.6
                ]
            ],
            "id": 8467
        },
        "image": {
            "url": "https://dantricdn.com/2018/12/23/1-15455510025341330256570.jpg",
            "width": 1920,
            "height": 2795
        },
        "id": "13aa6d879af2334522b705af0a1b257b0c4b5c83",
        "category": "sp",
        "title": "Hàng loạt người \"sập bẫy\" lớp học bán thực phẩm đa chức năng",
        "type": "feed",
        "popularity_score": 1.02762,
        "is_popular": false,
        "full_text_length": 3451,
        "date_published": "2018-12-23T08:20:26Z",
        "url": "https://dantri.com.vn/xa-hoi/hang-loat-nguoi-sap-bay-lop-hoc-ban-thuc-pham-da-chuc-nang-20181223150003623.htm",
        "summary": "Theo báo cáo của UBND xã Phước Năng (huyện Phước Sơn), thời gian qua, một số người dân trên địa bàn xã đã đăng ký theo học nghề bán thực phẩm chức năng với các Công ty ở TP Huế (tỉnh Thừa Thiên Huế) và TP Đà Nẵng. Tuy nhiên, sau khi đóng học phí từ 20-30 triệu đồng/học sinh thì không được giải quyết việc làm như đã hứa nên phải trở về quê hương.\n\nBáo cáo của xã Phước Năng về các trường hợp bị lừa đi học",
        "lsh_dupes": [
            "7e11f91b004901cc87054163d84e61672dc4eebe",
            "93bd2822eac8d91fd18d0bf9164fa0e50472f75e",
            "8760441a0ca3bdb81ab514f39bb08baf48c1766a"
        ]
    },
    {
        "feed": {
            "language": "vi",
            "title": "Dân Trí: Sports",
            "url": "dantri.com.vn",
            "country": "vn",
            "popularity": 1.5113,
            "icons": [
                [
                    "apple-touch-icon",
                    152,
                    152,
                    "6d9257f8b97fec843879f85080641ee6",
                    1
                ],
                [
                    "shortcut-icon",
                    48,
                    48,
                    "2e5f0809f99610c6228200c0b11fa9e0",
                    0.6
                ]
            ],
            "id": 8467
        },
        "image": {
            "url": "https://dantricdn.com/2018/12/22/img81202-1545453745861224262233.jpg",
            "width": 1920,
            "height": 2880
        },
        "id": "c94e7da1e7904eb1674e7906b9589a7903e971b6",
        "category": "sp",
        "title": "“Cả đoàn phim lặng đi khi biết “bố” Mai Ngọc Căn ung thư giai đoạn cuối”",
        "type": "feed",
        "full_text_length": 7850,
        "date_published": "2018-12-23T07:44:51Z",
        "url": "https://dantri.com.vn/van-hoa/ca-doan-phim-lang-di-khi-biet-bo-mai-ngoc-can-ung-thu-giai-doan-cuoi-201812221433096.htm",
        "summary": "Mới đây, thông tin nghệ sĩ Mai Ngọc Căn bị ung thư thận giai đoạn cuối vẫn trốn viện đi đóng hài tết “Cưới đi kẻo ế” (phần 3) đã khiến đồng nghiệp lẫn người hâm mộ hết sức bất ngờ và khâm phục. Nghệ sĩ này bảo rằng, nếu có chết, ông cũng mong được chết trước ống kính máy quay hơn là nằm ở nhà ngồi chờ tử thần tới gọi vì cả đời ông đã dành trọn cho nghiệp diễn.\n\nTrong phim hài tết này, nghệ sĩ Mai Ngọc Căn đóng vai bố của ông Cẩm (Nghệ sĩ Công Vượng đóng). Vì sức ép và quá sốt ruột, nên ông bố này đã ép vợ chồng ông Cẩm và bà Lẩm (NSƯT Minh Hằng đóng) phải cho con gái “xuất chuồng” sớm để ông được chứng kiến ngày vui đó.",
        "lsh_dupes": [
            "642b9659526c13445092f0d48bdf5a0d34cdfd7d",
            "8ddf435efce32842fc9820807edaccd00f4127d3",
            "72a29d2a9cdbc1ade4aa169ef3623b578c660441",
            "5ccb627bc8cd75e24e0d61936d008d94ca31054b"
        ]
    },
    {
        "feed": {
            "language": "vi",
            "title": "Kenh14: Sport",
            "url": "kenh14.vn",
            "country": "vn",
            "popularity": 1.14376,
            "icons": [
                [
                    "apple-touch-icon",
                    72,
                    72,
                    "a700704415cf847004b63e5c419b3319",
                    0.8
                ]
            ],
            "id": 8470
        },
        "image": {
            "url": "https://kenh14cdn.com/2018/12/23/484092913165273124055086445882043048919040o-15455217028311683153855.jpg",
            "width": 1920,
            "height": 1342
        },
        "id": "5f2c96b45ba43b252365a82873a9ad6d6940981c",
        "category": "sp",
        "title": "Ngôi sao vừa làm khó Ronaldo tại World Cup cẩn trọng trước khi đối đầu với tuyển Việt Nam",
        "type": "feed",
        "popularity_score": 1.27301,
        "is_popular": true,
        "full_text_length": 1809,
        "date_published": "2018-12-23T07:19:47Z",
        "url": "http://kenh14.vn/ngoi-sao-vua-lam-kho-ronaldo-tai-world-cup-can-trong-truoc-khi-doi-dau-voi-tuyen-viet-nam-20181223063605106.chn",
        "summary": "Mới đây, trả lời phỏng vấn trên trang chủ của Liên đoàn bóng đá châu Á (AFC), đội phó của đội tuyển Iran, hậu vệ Ehsan Hajsafi đã có những chia sẻ về các đối thủ nằm cùng bảng tại Asian Cup sắp tới.\n\n\"Đội tuyển Iraq là đối thủ mạnh nhất của chúng tôi tại vòng bảng. Tuy nhiên, nếu muốn vô địch chúng tôi cũng cần phải hết sức cẩn trọng và không được đánh giá thấp Việt Nam và Yemen. Đó đều là những đội bóng tốt\"."
    },
    {
        "feed": {
            "language": "vi",
            "title": "Dân Trí: Sports",
            "url": "dantri.com.vn",
            "country": "vn",
            "popularity": 1.5113,
            "icons": [
                [
                    "apple-touch-icon",
                    152,
                    152,
                    "6d9257f8b97fec843879f85080641ee6",
                    1
                ],
                [
                    "shortcut-icon",
                    48,
                    48,
                    "2e5f0809f99610c6228200c0b11fa9e0",
                    0.6
                ]
            ],
            "id": 8467
        },
        "image": {
            "url": "https://dantricdn.com/2018/12/23/anh-4-1545545894769524180763.jpg",
            "width": 720,
            "height": 960
        },
        "id": "292014c3831900728978bf230d4ab0732e4c9a2c",
        "category": "sp",
        "title": "Vụ cháy quán beer club: Nạn nhân thứ 7 tử vong",
        "type": "feed",
        "popularity_score": 1.059,
        "is_popular": true,
        "full_text_length": 1551,
        "date_published": "2018-12-23T06:59:23Z",
        "url": "https://dantri.com.vn/xa-hoi/vu-chay-quan-beer-club-nan-nhan-thu-7-tu-vong-20181223133353517.htm",
        "summary": "Liên quan đến vụ cháy quán beer club Ruby (đường Nguyễn Trãi, phường Xuân Hòa, thị xã Long Khánh, tỉnh Đồng Nai), sáng 23/12, bác sĩ Ngô Đức Tuấn - Giám đốc Bệnh viện đa khoa Đồng Nai cho biết, nạn nhân thứ 7 trong vụ cháy đã tử vong sau gần 2 ngày cấp cứu.\n\nTheo bác sĩ Tuấn, mặc dù bệnh viện đã huy động đội ngũ y, bác sĩ và máy móc hiện đại để cấp cứu, nhưng do bị thương quá nặng trong vụ cháy, anh Nguyễn Văn Dũng (24 tuổi) đã tử vong vào lúc 10h30 sáng 23/12.",
        "lsh_dupes": [
            "737474ecfe3df0a348b7ae42605990e97c78d50a",
            "8851eeeb88002dfddf69be13de643772cacceba1",
            "592e81bcdd7be437a8638b2107ae06d2210de798",
            "0fc8032a2378efc3a70c0e34e3ac3a71f9b0882f"
        ]
    },
    {
        "feed": {
            "language": "vi",
            "title": "Dân Trí: Sports",
            "url": "dantri.com.vn",
            "country": "vn",
            "popularity": 1.5113,
            "icons": [
                [
                    "apple-touch-icon",
                    152,
                    152,
                    "6d9257f8b97fec843879f85080641ee6",
                    1
                ],
                [
                    "shortcut-icon",
                    48,
                    48,
                    "2e5f0809f99610c6228200c0b11fa9e0",
                    0.6
                ]
            ],
            "id": 8467
        },
        "image": {
            "url": "https://dantricdn.com/zoom/600_327/2018/12/23/anh-11-1545541046114925837980-crop-1545541473637208450549.jpg",
            "width": 600,
            "height": 327
        },
        "id": "f009e7ab4526bcd07defa072fc2ffc0e48e70af3",
        "category": "sp",
        "title": "“Đổi gió” cho ngày đông với kì nghỉ ngập nắng ở bãi biển nhiệt đới",
        "type": "feed",
        "full_text_length": 4495,
        "date_published": "2018-12-23T05:15:50Z",
        "url": "https://dulich.dantri.com.vn/du-lich/doi-gio-cho-ngay-dong-voi-ki-nghi-ngap-nang-o-bai-bien-nhiet-doi-2018122312060779.htm",
        "summary": "Thời điểm này, cái lạnh lẽo, chút mưa phùn ẩm ướt của xứ nhiệt đới gió mùa khiến bạn chỉ muốn cuộn tròn trong chăn ấm thay vì háo hức lên kế hoạch cho chuyến du lịch như mùa hè. Thế nhưng, luôn có những địa điểm đậm chất nhiệt đới với ánh nắng và gió nhẹ sẽ xua tan lạnh giá để chờ đợi bạn bằng những kì nghỉ đầy thú vị.\n\n1. Hawaii\"Thiên đường biển\" Hawaii luôn nhộn nhịp với các bữa tiệc diễn ra quanh năm. Không gian mát mẻ và sảng khoái tại các bãi biển được lấp đầy bởi âm thanh sôi nổi từ điệu nhảy \"Mele Kalikimaka\" truyền thống hay những ông già Noel cưỡi ca-nô lướt sóng dịp Giáng sinh.",
        "lsh_dupes": [
            "209f779bc72536ee80609201f113eeb54a60eab7",
            "87831c71b3331bd50dbae967ef4704dbd2abec10",
            "fde13b7e71d2331fbd1e6063cfac0b87c43e5c28"
        ]
    },
    {
        "feed": {
            "language": "vi",
            "title": "Bóng Đá",
            "url": "bongda.com.vn",
            "country": "vn",
            "popularity": 2.84194,
            "icons": [
                [
                    "shortcut-icon",
                    16,
                    16,
                    "74fad8f66f19803dee28567ef9a77537",
                    0.5
                ]
            ],
            "id": 2973
        },
        "image": {
            "url": "http://media.bongda.com.vn/resize/534x280/files/news/2018/12/23/lo-ke-hoach-tap-luyen-ngay-giang-sinh-cua-liverpool-105041.jpg",
            "width": 534,
            "height": 280
        },
        "id": "cca0c68070a7066a3d5c580d99473bd0dba8a0bc",
        "category": "sp",
        "title": "Lộ kế hoạch tập luyện ngày Giáng Sinh của Liverpool",
        "type": "feed",
        "popularity_score": 1.00913,
        "is_popular": false,
        "date_published": "2018-12-23T04:46:31Z",
        "url": "http://www.bongda.com.vn/lo-ke-hoach-tap-luyen-ngay-giang-sinh-cua-liverpool-d478311.html",
        "summary": "Dường như việc đang có được một khoảng cách khá thoải mái trước Manchester City, Jurgen Klopp cũng không muốn các học trò phải quá căng thẳng trong ngày Giáng Sinh này."
    },
    {
        "feed": {
            "language": "vi",
            "title": "Người Lao Động: Sports",
            "url": "nld.com.vn",
            "country": "vn",
            "popularity": 1,
            "icons": [
                [
                    "shortcut-icon",
                    64,
                    64,
                    "0aa48ba1d8ffd54774045932eaeb0c8a",
                    0.8
                ]
            ],
            "id": 8472
        },
        "image": {
            "url": "https://nld.mediacdn.vn/zoom/600_315/2018/12/23/pep-15455361152131384325680.jpg",
            "width": 600,
            "height": 315
        },
        "id": "19a204f4b330c43a0b178bd2d66f8de945102e00",
        "category": "sp",
        "title": "Guardiola nói gì khi Man City \"tặng quà\" Noel sớm cho Liverpool?",
        "type": "feed",
        "popularity_score": 1.08845,
        "is_popular": true,
        "full_text_length": 2859,
        "date_published": "2018-12-23T04:08:23Z",
        "url": "https://nld.com.vn/the-thao/guardiola-noi-gi-khi-man-city-tang-qua-noel-som-cho-liverpool-20181223104650988.htm",
        "summary": "(NLĐO) – Thống trị giải Ngoại hạng từ đầu mùa nhưng chỉ với hai trận thua trong vòng 2 tuần, Man City phải trả giá đắt khi mất luôn ngôi vô địch lượt đi vào tay kình địch Liverpool.",
        "lsh_dupes": [
            "7d48a6a03a651d30ad24bf71dbafccb5b72a01f1"
        ]
    },
    {
        "feed": {
            "language": "vi",
            "title": "Nhan Dan: Sports",
            "url": "nhandan.com.vn",
            "country": "vn",
            "popularity": 1,
            "icons": [
                [
                    "og-image",
                    817,
                    654,
                    "285ce5a6e2cf95535185308127217378",
                    0.6
                ],
                [
                    "shortcut-icon",
                    16,
                    16,
                    "a3ec847cacb21a58f5f53dd56f62bdbe",
                    0.5
                ]
            ],
            "id": 8473
        },
        "image": {
            "url": "http://www.nhandan.com.vn/cdn/vn/media/k2/items/src/3866/6654fedd9b997a9c7161536134c697df.jpg",
            "width": 640,
            "height": 367
        },
        "id": "4e5a2aa4e9bbce9cd4f23ebb534937a4213e7694",
        "category": "sp",
        "title": "Bóng đá Việt Nam khép lại năm 2018 với vị trí thứ 100 thế giới",
        "type": "feed",
        "popularity_score": 1.02204,
        "is_popular": false,
        "full_text_length": 1430,
        "date_published": "2018-12-23T03:10:17Z",
        "url": "http://www.nhandan.com.vn/thethao/bong-da-viet-nam/item/38664002-bong-da-viet-nam-khep-lai-nam-2018-voi-vi-tri-thu-100-the-gioi.html",
        "summary": "NDĐT - Theo bảng xếp hạng (BXH) tháng 12 của FIFA - lần cập nhật cuối cùng thứ hạng các đội tuyển thế giới trong năm 2018, đội tuyển Việt Nam vẫn giữ vững vị trí thứ 100, đứng đầu khu vực Đông - Nam Á.",
        "lsh_dupes": [
            "b4b7b30bea1ecc3741cbe7a4f02beef5b353b090"
        ]
    },
    {
        "feed": {
            "language": "vi",
            "title": "Việt Báo: Sports",
            "url": "vietbao.vn",
            "country": "vn",
            "popularity": 1,
            "icons": [
                [
                    "shortcut-icon",
                    32,
                    32,
                    "433ee30a0eb9d20ce56569ae6f5658e5",
                    0.6
                ],
                [
                    "default-favicon",
                    16,
                    16,
                    "84bed2f802b15c12d131d31bcfe65a72",
                    0.5
                ]
            ],
            "id": 8479
        },
        "image": {
            "url": "http://a9.vietbao.vn/images/vn899/410/2018/12/20181223-sea-games-30-2019-nhieu-noi-dung-the-manh-cua-dien-kinh-viet-nam-bi-cat-bo-1.jpg",
            "width": 800,
            "height": 534
        },
        "id": "6ba5b1e34eee08f9a1e3141c03ffe5c23819a3e8",
        "category": "sp",
        "title": "SEA Games 30 - 2019: Nhiều nội dung thế mạnh của điền kinh Việt Nam bị cắt bỏ",
        "type": "feed",
        "full_text_length": 3703,
        "date_published": "2018-12-23T00:33:03Z",
        "url": "http://vietbao.vn/The-thao/SEA-Games-30-2019-Nhieu-noi-dung-the-manh-cua-dien-kinh-Viet-Nam-bi-cat-bo/410922362/134/",
        "author": "Việt Báo",
        "summary": "Theo thông báo của Ban Tổ chức nước chủ nhà SEA Games 30 - 2019 (Philippines), hàng loạt nội dung thế mạnh của điền kinh Việt Nam bị loại khỏi chương trình thi đấu của đại hội."
    },
    {
        "feed": {
            "language": "vi",
            "title": "Người Lao Động: Sports",
            "url": "nld.com.vn",
            "country": "vn",
            "popularity": 1,
            "icons": [
                [
                    "shortcut-icon",
                    64,
                    64,
                    "0aa48ba1d8ffd54774045932eaeb0c8a",
                    0.8
                ]
            ],
            "id": 8472
        },
        "image": {
            "url": "https://nld.mediacdn.vn/zoom/600_315/2018/12/23/cac-vdv-nhan-giai-2-15455593922931472554344.jpg",
            "width": 600,
            "height": 315
        },
        "id": "d075bc0fdc856e69b2a895a04104575887769423",
        "category": "sp",
        "title": "242 tay vợt tham gia giải đấu từ thiện mùa Giáng sinh 2018",
        "type": "feed",
        "full_text_length": 1596,
        "date_published": "2018-12-23T10:51:29Z",
        "url": "https://nld.com.vn/the-thao/242-tay-vot-tham-gia-giai-dau-tu-thien-mua-giang-sinh-2018-20181223170507057.htm",
        "summary": "(NLĐO) – Giải quần vợt từ thiện tranh Cúp Phúc Hiền Hòa 2018 thu hút 242 tay vợt tham dự cùng số tiền quyên góp hơn 100 triệu đồng giúp đỡ những hoàn cảnh khó khăn",
        "lsh_dupes": [
            "8e2e15f452cf41171fa7d4844a89a31ce77c616a"
        ]
    },
    {
        "feed": {
            "language": "vi",
            "title": "Dân Trí: Sports",
            "url": "dantri.com.vn",
            "country": "vn",
            "popularity": 1.5113,
            "icons": [
                [
                    "apple-touch-icon",
                    152,
                    152,
                    "6d9257f8b97fec843879f85080641ee6",
                    1
                ],
                [
                    "shortcut-icon",
                    48,
                    48,
                    "2e5f0809f99610c6228200c0b11fa9e0",
                    0.6
                ]
            ],
            "id": 8467
        },
        "image": {
            "url": "https://dantricdn.com/2018/12/23/ong-hoang-nhu-cuong-15455584050822141136755.jpg",
            "width": 748,
            "height": 579
        },
        "id": "56bfbe18c4d1b2e5f6414b7fc71eb20d20beee50",
        "category": "sp",
        "title": "Lãnh đạo Ban Đường sắt đô thị TPHCM đi nước ngoài khi chưa được phép",
        "type": "feed",
        "full_text_length": 1228,
        "date_published": "2018-12-23T10:45:58Z",
        "url": "https://dantri.com.vn/xa-hoi/lanh-dao-ban-duong-sat-do-thi-tphcm-di-nuoc-ngoai-khi-chua-duoc-phep-20181223174055374.htm",
        "summary": "Theo nguồn tin của phóng viên Dân trí, các cơ quan chức năng của TPHCM đang xác minh, tìm hướng xử lý việc ông Hoàng Như Cương, Phó Trưởng Ban Quản lý đường sắt đô thị TPHCM đi nước ngoài nhưng chưa được sự cho phép của cấp thẩm quyền.\n\nPhó Trưởng Ban Quản lý đường sắt đô thị TPHCM Hoàng Như Cương đi nước ngoài khi chưa có sự cho phép của cấp thẩm quyền (ảnh: CTV)",
        "lsh_dupes": [
            "c95302fe862ee21cb7bee24c0bd7ce4c0b82a1c2",
            "a57d90c36886e6a17511f2646f5e23c42e0bd68d"
        ]
    },
    {
        "feed": {
            "language": "vi",
            "title": "Dân Trí: Sports",
            "url": "dantri.com.vn",
            "country": "vn",
            "popularity": 1.5113,
            "icons": [
                [
                    "apple-touch-icon",
                    152,
                    152,
                    "6d9257f8b97fec843879f85080641ee6",
                    1
                ],
                [
                    "shortcut-icon",
                    48,
                    48,
                    "2e5f0809f99610c6228200c0b11fa9e0",
                    0.6
                ]
            ],
            "id": 8467
        },
        "image": {
            "url": "https://dantricdn.com/2018/12/23/fbimg1545494359579-15455426162951876080193.jpg",
            "width": 1513,
            "height": 2015
        },
        "id": "59896ae8fe7e7139d5e338a20d5b4d4becfd5497",
        "category": "sp",
        "title": "NSND Lan Hương xúc động kể về giây phút cuối cùng của NSND Anh Tú",
        "type": "feed",
        "full_text_length": 5781,
        "date_published": "2018-12-23T10:07:26Z",
        "url": "https://dantri.com.vn/van-hoa/nsnd-lan-huong-xuc-dong-ke-ve-giay-phut-cuoi-cung-cua-nsnd-anh-tu-2018122317012499.htm",
        "summary": "Thậm chí, chị còn tụng kinh bằng hát, hát rất to để bạn mình cảm thấy ấm áp khi lắng nghe được tiếng hát mà quên đi cơn đau và trút bỏ thân giả tạm một cách nhẹ nhàng nhất. Tuy nhiên, do không kiềm chế được cơn xúc động nên NSND Lan Hương đã vừa hát vừa khóc. Tiếng hát vì thế mà cũng mênh mang trong muôn cảm xúc.\n\n“Chúc người bạn về nơi xa xôi ấy bắt đầu một hành trình cũng mới. Lan Hương sẽ giữ mãi những hình ảnh và những vai diễn cùng nhau. Người bạn học cùng chung trường cấp 3 (hồi đó chỉ biết thôi chứ chưa có duyên) rồi cùng chung mái ấm Nhà hát Tuổi trẻ."
    },
    {
        "feed": {
            "language": "vi",
            "title": "Bóng Đá",
            "url": "bongda.com.vn",
            "country": "vn",
            "popularity": 2.84194,
            "icons": [
                [
                    "shortcut-icon",
                    16,
                    16,
                    "74fad8f66f19803dee28567ef9a77537",
                    0.5
                ]
            ],
            "id": 2973
        },
        "image": {
            "url": "http://media.bongda.com.vn/resize/534x280/files/news/2018/12/23/man-utd-can-5-nam-de-duoi-kip-liverpool-va-man-city-163506.jpg",
            "width": 534,
            "height": 280
        },
        "id": "019577537d8d1a64d3c18d63eae52fcdd9c00c46",
        "category": "sp",
        "title": "Man Utd cần 5 năm để đuổi kịp Liverpool và Man City",
        "type": "feed",
        "date_published": "2018-12-23T09:59:48Z",
        "url": "http://www.bongda.com.vn/man-utd-can-5-nam-de-duoi-kip-liverpool-va-man-city-d478346.html",
        "summary": "Theo nhận định của cựu danh thủ Graeme Souness, Manchester United sẽ phải mất rất nhiều năm xây dựng đội hình để có thể đuổi kịp Liverpool và Manchester City."
    },
    {
        "feed": {
            "language": "vi",
            "title": "Dân Trí: Sports",
            "url": "dantri.com.vn",
            "country": "vn",
            "popularity": 1.5113,
            "icons": [
                [
                    "apple-touch-icon",
                    152,
                    152,
                    "6d9257f8b97fec843879f85080641ee6",
                    1
                ],
                [
                    "shortcut-icon",
                    48,
                    48,
                    "2e5f0809f99610c6228200c0b11fa9e0",
                    0.6
                ]
            ],
            "id": 8467
        },
        "image": {
            "url": "https://dantricdn.com/2018/12/23/pho-thu-tuong-truong-hoa-binh-tham-chuc-mung-giang-sinh-tong-giao-phan-hue-0-15455554405031169426947.jpg",
            "width": 1024,
            "height": 683
        },
        "id": "af40a5d2ca631fb8052dc35a61f974e3187e53fb",
        "category": "sp",
        "title": "Phó Thủ tướng Trương Hòa Bình chúc mừng Giáng sinh Tổng Giám mục Huế",
        "type": "feed",
        "full_text_length": 4864,
        "date_published": "2018-12-23T09:59:18Z",
        "url": "https://dantri.com.vn/chinh-tri/pho-thu-tuong-truong-hoa-binh-chuc-mung-giang-sinh-tong-giam-muc-hue-20181223163521226.htm",
        "summary": "Tham gia đoàn có đại diện lãnh đạo Ủy ban TƯ MTTQ Việt Nam, Ban Dân vận TƯ, Ban Tôn giáo Chính phủ, Văn phòng Chính phủ và lãnh đạo tỉnh Tỉnh ủy, UBND, MTTQ Việt Nam tỉnh Thừa Thiên Huế.\n\nTổng Giám mục Giáo phận Huế tặng hoa Phó Thủ tướng Trương Hòa Bình",
        "lsh_dupes": [
            "1fb76a160bfc1b0cba28e10f9aee1b8c86a027c5",
            "4844b1bb4cd6696ea3145374760a2b7dadba83d0"
        ]
    },
    {
        "feed": {
            "language": "vi",
            "title": "Dân Trí: Sports",
            "url": "dantri.com.vn",
            "country": "vn",
            "popularity": 1.5113,
            "icons": [
                [
                    "apple-touch-icon",
                    152,
                    152,
                    "6d9257f8b97fec843879f85080641ee6",
                    1
                ],
                [
                    "shortcut-icon",
                    48,
                    48,
                    "2e5f0809f99610c6228200c0b11fa9e0",
                    0.6
                ]
            ],
            "id": 8467
        },
        "image": {
            "url": "https://dantricdn.com/2018/12/23/1-15455544743611037270006.jpg",
            "width": 1136,
            "height": 639
        },
        "id": "88780f120f4ed51dd833e9d76ad1594d873d53a6",
        "category": "sp",
        "title": "Lạ mắt cây thông làm từ… ghế nhựa",
        "type": "feed",
        "popularity_score": 1.00725,
        "is_popular": false,
        "full_text_length": 1471,
        "date_published": "2018-12-23T09:44:47Z",
        "url": "https://dantri.com.vn/xa-hoi/la-mat-cay-thong-lam-tu-ghe-nhua-20181223162816968.htm",
        "summary": "Cây thông này được thi công gấp rút trong khoảng 3 ngày, sử dụng hàng chục chiếc ghế nhựa bao quanh khung sắt tạo hình. Phần tựa lưng của chiếc ghế khi úp xuống tạo ra dáng tán xòe như kiểu tán của cây thông Noel, khá lạ mắt.\n\nÔng Hoàng Tuấn Anh, chủ nhân của ý tưởng này cho biết, muốn mang đến một điều bất ngờ cho du khách khi đến vui chơi, giải trí tại khu chợ phiên Rubik và tạo một không gian chụp ảnh cho các bạn trẻ trong dịp noel.",
        "lsh_dupes": [
            "104957d58acecddf5fe92a6198f1a88893433bc8"
        ]
    },
    {
        "feed": {
            "language": "vi",
            "title": "Bóng Đá",
            "url": "bongda.com.vn",
            "country": "vn",
            "popularity": 2.84194,
            "icons": [
                [
                    "shortcut-icon",
                    16,
                    16,
                    "74fad8f66f19803dee28567ef9a77537",
                    0.5
                ]
            ],
            "id": 2973
        },
        "image": {
            "url": "http://media.bongda.com.vn/resize/534x280/files/news/2018/12/23/hlv-cardiff-ban-thua-truoc-man-utd-that-ngu-ngoc-145214.jpg",
            "width": 534,
            "height": 280
        },
        "id": "3b055efbe7573d12a4befe3fcd8ec01ab4080bd7",
        "category": "sp",
        "title": "HLV Cardiff: \"Bàn thua trước Man Utd thật ngu ngốc!\"",
        "type": "feed",
        "popularity_score": 1.00585,
        "is_popular": false,
        "date_published": "2018-12-23T09:18:08Z",
        "url": "http://www.bongda.com.vn/hlv-cardiff-ban-thua-truoc-man-utd-that-ngu-ngoc-d478338.html",
        "summary": "HLV Neil Warnock của Cardiff City đã thừa nhận, đội bóng của ông đã để thủng lưới đầy ngu ngốc trước Manchester United."
    },
    {
        "feed": {
            "language": "vi",
            "title": "Bóng Đá",
            "url": "bongda.com.vn",
            "country": "vn",
            "popularity": 2.84194,
            "icons": [
                [
                    "shortcut-icon",
                    16,
                    16,
                    "74fad8f66f19803dee28567ef9a77537",
                    0.5
                ]
            ],
            "id": 2973
        },
        "image": {
            "url": "http://media.bongda.com.vn/resize/534x280/files/news/2018/12/23/solari-tri-an-zidane-khi-real-vo-dich-fifa-club-world-cup-153728.jpg",
            "width": 500,
            "height": 280
        },
        "id": "db2e56145ff178fe815d2678eb4839e426b601d0",
        "category": "sp",
        "title": "Solari tri ân Zidane khi Real vô địch FIFA Club World Cup",
        "type": "feed",
        "date_published": "2018-12-23T09:17:20Z",
        "url": "http://www.bongda.com.vn/solari-tri-an-zidane-khi-real-vo-dich-fifa-club-world-cup-d478344.html",
        "summary": "Thắng 4-1 Al Ain trong trận chung kết FIFA Club World Cup 2018, HLV Santiago Solari có chức vô địch đầu tiên trong sự nghiệp huấn luyện."
    },
    {
        "feed": {
            "language": "vi",
            "title": "Dân Trí: Sports",
            "url": "dantri.com.vn",
            "country": "vn",
            "popularity": 1.5113,
            "icons": [
                [
                    "apple-touch-icon",
                    152,
                    152,
                    "6d9257f8b97fec843879f85080641ee6",
                    1
                ],
                [
                    "shortcut-icon",
                    48,
                    48,
                    "2e5f0809f99610c6228200c0b11fa9e0",
                    0.6
                ]
            ],
            "id": 8467
        },
        "image": {
            "url": "https://dantricdn.com/2018/12/23/images2273650-e8canh131487297693931-1545408203-1545530858453295182302.jpg",
            "width": 640,
            "height": 401
        },
        "id": "5c5f0c81bef5a936a56428c3a95dad291bf06aab",
        "category": "sp",
        "title": "Áp lực lạm phát giảm, lãi suất năm 2019 có nhiều yếu tố thuận lợi?",
        "type": "feed",
        "popularity_score": 1.01005,
        "is_popular": false,
        "full_text_length": 3355,
        "date_published": "2018-12-23T09:17:01Z",
        "url": "https://dantri.com.vn/kinh-doanh/ap-luc-lam-phat-giam-lai-suat-nam-2019-co-nhieu-yeu-to-thuan-loi-20181223105425216.htm",
        "summary": "Tín dụng bất động sản chiếm khoảng 16,6%. (Ảnh minh hoạ).\n\nBáo cáo về thị trường tài chính Việt Nam năm 2018 do Ủy ban Giám sát Tài chính Quốc gia (NFSC) thực hiện cho thấy, thanh khoản của hệ thống TCTD vẫn được đảm bảo mặc dù kém dồi dào hơn vào cuối năm. Nguồn vốn huy động toàn hệ thống ước tăng tương đương năm 2017.",
        "lsh_dupes": [
            "524c3e950bd710f029c79daf37b69ff5cd1c24d8",
            "2c71c9f69ca203c5ad505da40a7b013073df999f",
            "f1790f8393d6a7021754535bd6a89791cee3f987",
            "f520df203bee9994ca61e6953b5148a1fd8f7604",
            "34278cffbaeb2d4af5e392104aceabe8bf26a39c"
        ]
    },
    {
        "feed": {
            "language": "vi",
            "title": "Dân Trí: Sports",
            "url": "dantri.com.vn",
            "country": "vn",
            "popularity": 1.5113,
            "icons": [
                [
                    "apple-touch-icon",
                    152,
                    152,
                    "6d9257f8b97fec843879f85080641ee6",
                    1
                ],
                [
                    "shortcut-icon",
                    48,
                    48,
                    "2e5f0809f99610c6228200c0b11fa9e0",
                    0.6
                ]
            ],
            "id": 8467
        },
        "image": {
            "url": "https://dantricdn.com/thumb_w/640/2018/12/23/giamsatrcsj-15455552296831153642492.jpg",
            "width": 640,
            "height": 432
        },
        "id": "d394b5a06d87bd8a25a45462efbf2fd90d3a1487",
        "category": "sp",
        "title": "Lo ngại Trung Quốc xuất khẩu công nghệ giám sát từng người dân",
        "type": "feed",
        "popularity_score": 1.01151,
        "is_popular": false,
        "full_text_length": 4741,
        "date_published": "2018-12-23T09:01:42Z",
        "url": "https://dantri.com.vn/the-gioi/lo-ngai-trung-quoc-xuat-khau-cong-nghe-giam-sat-tung-nguoi-dan-20181223155517792.htm",
        "summary": "Công nghệ nhận diện khuôn mặt của Trung Quốc được trưng bày tại một triển lãm gần đây. (Ảnh: SCMP)\n\nTheo một báo cáo của Trung tâm Nghiên cứu quốc tế và chiến lược ở Washington, công nghệ này có thể trở thành công cụ mà “trước đây nhiều chính phủ chỉ có thể mơ đến: năng lực trừng phạt những người có hành động chính trị hay xã hội mà không được chính phủ cho phép”.",
        "lsh_dupes": [
            "f3c49a961298f0f28758d30030e71bdccdf80337",
            "238bee02015aa2c56d5df470eb1911c6e4a8ee91",
            "d109461c63b2d1ecfc2694dc8dde7046503154ff",
            "9508b681bc1fd4b03285c3fb11bcb366cede46a9"
        ]
    },
    {
        "feed": {
            "language": "vi",
            "title": "Bóng Đá",
            "url": "bongda.com.vn",
            "country": "vn",
            "popularity": 2.84194,
            "icons": [
                [
                    "shortcut-icon",
                    16,
                    16,
                    "74fad8f66f19803dee28567ef9a77537",
                    0.5
                ]
            ],
            "id": 2973
        },
        "image": {
            "url": "http://media.bongda.com.vn/resize/534x280/files/news/2018/12/23/solskjr-la-mot-thien-tai-huan-luyen-142630.jpg",
            "width": 534,
            "height": 280
        },
        "id": "4d57b8e9de81216b1c482d40605ffb9e8b0ff049",
        "category": "sp",
        "title": "'Solskjaer là một thiên tài huấn luyện'",
        "type": "feed",
        "popularity_score": 1.08589,
        "is_popular": true,
        "date_published": "2018-12-23T08:39:43Z",
        "url": "http://www.bongda.com.vn/solskjaer-la-mot-thien-tai-huan-luyen-d478329.html",
        "summary": "Huấn luyện viên người Na Uy đang khiến xứ sương mù dậy sóng sau khi dẫn dắt Man Utd đè bẹp chủ nhà Cardiff City với tỉ số 5-1 vào rạng sáng nay.",
        "lsh_dupes": [
            "d7005496922a65c4f86343e18ce00ab99d80e7a1"
        ]
    },
    {
        "feed": {
            "language": "vi",
            "title": "Người Lao Động: Sports",
            "url": "nld.com.vn",
            "country": "vn",
            "popularity": 1,
            "icons": [
                [
                    "shortcut-icon",
                    64,
                    64,
                    "0aa48ba1d8ffd54774045932eaeb0c8a",
                    0.8
                ]
            ],
            "id": 8472
        },
        "image": {
            "url": "https://nld.mediacdn.vn/zoom/600_315/2018/12/23/nguyen-van-phuong-becamex-binh-duong-1545548765332689628432.jpg",
            "width": 600,
            "height": 315
        },
        "id": "8e0af5875760f0b5ff88dff0016272d88b21f219",
        "category": "sp",
        "title": "Văn Phương ngược dòng lên ngôi vương Giải các tay vợt mạnh toàn quốc 2018",
        "type": "feed",
        "popularity_score": 1.01005,
        "is_popular": false,
        "full_text_length": 1563,
        "date_published": "2018-12-23T08:04:11Z",
        "url": "https://nld.com.vn/the-thao/van-phuong-nguoc-dong-len-ngoi-vuong-giai-cac-tay-vot-manh-toan-quoc-2018-20181223141025225.htm",
        "summary": "(NLĐO) – Thất bại chóng vánh ở ván 1 đã khiến Văn Phương bừng tỉnh, xuất sắc vượt qua đàn anh Trịnh Linh Giang sau 3 ván đấu để lên ngôi vương Giải Quần vợt Các tay vợt xuất sắc toàn quốc 2018",
        "lsh_dupes": [
            "7cbfffc451d26a01591a16410d37a5993708f19a"
        ]
    },
    {
        "feed": {
            "language": "vi",
            "title": "Bóng Đá",
            "url": "bongda.com.vn",
            "country": "vn",
            "popularity": 2.84194,
            "icons": [
                [
                    "shortcut-icon",
                    16,
                    16,
                    "74fad8f66f19803dee28567ef9a77537",
                    0.5
                ]
            ],
            "id": 2973
        },
        "image": {
            "url": "http://media.bongda.com.vn/resize/534x280/files/news/2018/12/23/chuan-bi-cho-cho-dong-chelsea-san-sang-de-tru-cot-roi-stamford-bridge-135432.jpg",
            "width": 534,
            "height": 280
        },
        "id": "7e8f856d12c928112670723317fc542d9db8bd76",
        "category": "sp",
        "title": "Chuẩn bị cho chợ Đông, Chelsea sẵn sàng để trụ cột rời Stamford Bridge",
        "type": "feed",
        "popularity_score": 1.00585,
        "is_popular": false,
        "date_published": "2018-12-23T08:00:22Z",
        "url": "http://www.bongda.com.vn/chuan-bi-cho-cho-dong-chelsea-san-sang-de-tru-cot-roi-stamford-bridge-d478323.html",
        "summary": "Trụ cột của Chelsea nhiều khả năng sẽ rời Stamford Bridge ngay ở kỳ chuyển nhượng mùa Đông sắp tới mở cửa."
    },
    {
        "feed": {
            "language": "vi",
            "title": "Bóng Đá",
            "url": "bongda.com.vn",
            "country": "vn",
            "popularity": 2.84194,
            "icons": [
                [
                    "shortcut-icon",
                    16,
                    16,
                    "74fad8f66f19803dee28567ef9a77537",
                    0.5
                ]
            ],
            "id": 2973
        },
        "image": {
            "url": "http://media.bongda.com.vn/resize/534x280/files/dinh.nguyen/2018/12/23/screenshot2018-12-22at64846pm_kckd-1220.png",
            "width": 534,
            "height": 280
        },
        "id": "c5c489ca8fd175c43ee0d5f9ef56f175c000e667",
        "category": "sp",
        "title": "CHDCND Triều Tiên đem \"sao\" trẻ được Serie A săn đón đấu ĐT Việt Nam",
        "type": "feed",
        "popularity_score": 1.78245,
        "is_popular": true,
        "date_published": "2018-12-23T06:43:11Z",
        "url": "http://www.bongda.com.vn/chdcnd-trieu-tien-dem-sao-tre-duoc-serie-a-san-don-dau-dt-viet-nam-d478315.html",
        "summary": "CHDCND Triều Tiên sẽ mang sang đội hình mạnh nhất khi có mặt tiền đạo đang nổi danh ở Serie A là Han Kwang-song để chạm trán ĐT Việt Nam."
    },
    {
        "feed": {
            "language": "vi",
            "title": "Bóng Đá",
            "url": "bongda.com.vn",
            "country": "vn",
            "popularity": 2.84194,
            "icons": [
                [
                    "shortcut-icon",
                    16,
                    16,
                    "74fad8f66f19803dee28567ef9a77537",
                    0.5
                ]
            ],
            "id": 2973
        },
        "image": {
            "url": "http://media.bongda.com.vn/resize/534x280/files/nhat.nguyen/2018/12/23/re-01-1253.jpg",
            "width": 534,
            "height": 280
        },
        "id": "c545224ded8b7adbcf54b4761fc66a3687cc6beb",
        "category": "sp",
        "title": "Thắng đậm Al Ain, Real Madrid lập siêu kỷ lục tại FIFA Club World Cup",
        "type": "feed",
        "popularity_score": 1.06751,
        "is_popular": true,
        "date_published": "2018-12-23T06:43:00Z",
        "url": "http://www.bongda.com.vn/thang-dam-al-ain-real-madrid-lap-sieu-ky-luc-tai-fifa-club-world-cup-d478317.html",
        "summary": "Không gặp quá nhiều khó khăn, Real Madrid đã đánh bại Al Ain trong trận chung kết FIFA Club World Cup 2018."
    },
    {
        "feed": {
            "language": "vi",
            "title": "24h: Sports",
            "url": "24h.com.vn",
            "country": "vn",
            "popularity": 1,
            "icons": [
                [
                    "shortcut-icon",
                    100,
                    100,
                    "77bad23652c98f496e57feb3d084f2bb",
                    0.9
                ],
                [
                    "icon",
                    19,
                    19,
                    "8643acb11b7ca5cf157d7c6fd86df17a",
                    0.5
                ],
                [
                    "default-favicon",
                    19,
                    19,
                    "e7cbb8da90b3b8443e922cf5f1fe78fe",
                    0.5
                ]
            ],
            "id": 2977
        },
        "image": {
            "url": "https://image-us.24h.com.vn/upload/4-2018/images/2018-12-21/1545378508-917-thumbnail-watermark.jpg",
            "width": 1200,
            "height": 628
        },
        "id": "acc8ee631152ec9c1bc3c11ee7d5cddcc055d840",
        "category": "sp",
        "title": "Gã trai ngông cuồng thách thức đả nữ UFC: 3 lần bị đá vào \"chỗ hiểm\"",
        "type": "feed",
        "popularity_score": 1.22301,
        "is_popular": true,
        "date_published": "2018-12-23T06:05:00Z",
        "url": "https://www.24h.com.vn/the-thao/ga-trai-ngong-cuong-thach-thuc-da-nu-ufc-3-lan-bi-da-vao-cho-hiem-c101a1015086.html",
        "summary": "(Tin thể thao, tin võ thuật) Chàng trai thách thức đả nữ UFC, chấp nhận chơi một &#34;canh bạc&#34; mạo hiểm."
    },
    {
        "feed": {
            "language": "vi",
            "title": "Bóng Đá",
            "url": "bongda.com.vn",
            "country": "vn",
            "popularity": 2.84194,
            "icons": [
                [
                    "shortcut-icon",
                    16,
                    16,
                    "74fad8f66f19803dee28567ef9a77537",
                    0.5
                ]
            ],
            "id": 2973
        },
        "image": {
            "url": "http://media.bongda.com.vn/resize/534x280/files/news/2018/12/23/tiet-lo-ly-do-bau-duc-khong-du-le-vinh-danh-dt-viet-nam-104142.jpg",
            "width": 500,
            "height": 261
        },
        "id": "0818f16fd80aa121452a52d84dbbec765e5d6f9f",
        "category": "sp",
        "title": "Tiết lộ lý do bầu Đức không dự lễ vinh danh ĐT Việt Nam",
        "type": "feed",
        "popularity_score": 1.20567,
        "is_popular": true,
        "date_published": "2018-12-23T04:46:41Z",
        "url": "http://www.bongda.com.vn/tiet-lo-ly-do-bau-duc-khong-du-le-vinh-danh-dt-viet-nam-d478310.html",
        "summary": "Tại buổi lễ vinh danh ĐT Việt Nam do Văn phòng Chính phủ tổ chức vào chiều ngày 21/12, khá bất ngờ khi bầu Đức lại vắng mặt."
    },
    {
        "feed": {
            "language": "vi",
            "title": "Bóng Đá",
            "url": "bongda.com.vn",
            "country": "vn",
            "popularity": 2.84194,
            "icons": [
                [
                    "shortcut-icon",
                    16,
                    16,
                    "74fad8f66f19803dee28567ef9a77537",
                    0.5
                ]
            ],
            "id": 2973
        },
        "image": {
            "url": "http://media.bongda.com.vn/resize/534x280/files/news/2018/12/23/khong-phai-anh-duc-cau-ay-moi-xung-dang-doat-qua-bong-bac-102018.jpg",
            "width": 534,
            "height": 280
        },
        "id": "74557d6409b99015d2a67df4c793534a5c13a704",
        "category": "sp",
        "title": "\"Không phải Anh Đức, cậu ấy mới xứng đáng đoạt Quả bóng Bạc\"",
        "type": "feed",
        "popularity_score": 1.12269,
        "is_popular": true,
        "date_published": "2018-12-23T04:01:27Z",
        "url": "http://www.bongda.com.vn/khong-phai-anh-duc-cau-ay-moi-xung-dang-doat-qua-bong-bac-d478305.html",
        "summary": "Đó là nhận định của cựu tuyển thủ Lê Quốc Vượng khi nói về những gương mặt đoạt giải trong đêm vinh danh QBV Việt Nam 2018."
    },
    {
        "feed": {
            "language": "vi",
            "title": "24h: Football",
            "url": "24h.com.vn",
            "country": "vn",
            "popularity": 2,
            "icons": [
                [
                    "shortcut-icon",
                    100,
                    100,
                    "77bad23652c98f496e57feb3d084f2bb",
                    0.9
                ],
                [
                    "icon",
                    19,
                    19,
                    "8643acb11b7ca5cf157d7c6fd86df17a",
                    0.5
                ],
                [
                    "default-favicon",
                    19,
                    19,
                    "e7cbb8da90b3b8443e922cf5f1fe78fe",
                    0.5
                ]
            ],
            "id": 8466
        },
        "image": {
            "url": "https://image-us.24h.com.vn/upload/4-2018/images/2018-12-23/tot1-1545534216-417-width640height480-auto-crop-watermark.jpg",
            "width": 640,
            "height": 335
        },
        "id": "2e3681fb5ce0bd4f13a5c94533b41678603a2a84",
        "category": "sp",
        "title": "Nhận định bóng đá Everton – Tottenham: “Đại náo” Goodison Park đua vô địch",
        "type": "feed",
        "popularity_score": 1.02821,
        "is_popular": false,
        "date_published": "2018-12-23T03:06:47Z",
        "url": "https://www.24h.com.vn/bong-da/nhan-dinh-bong-da-everton-tottenham-dai-nao-goodison-park-dua-vo-dich-c48a1015528.html",
        "summary": "(Nhận định bóng đá Everton – Tottenham, 23h00, 23/12, vòng 18 Ngoại hạng Anh) Nếu giành được 3 điểm trên sân Goodison Park, thầy trò Pochettino hoàn toàn có thể tiếp tục nuôi giấc mơ vô địch."
    },
    {
        "feed": {
            "language": "vi",
            "title": "24h: Sports",
            "url": "24h.com.vn",
            "country": "vn",
            "popularity": 1,
            "icons": [
                [
                    "shortcut-icon",
                    100,
                    100,
                    "77bad23652c98f496e57feb3d084f2bb",
                    0.9
                ],
                [
                    "icon",
                    19,
                    19,
                    "8643acb11b7ca5cf157d7c6fd86df17a",
                    0.5
                ],
                [
                    "default-favicon",
                    19,
                    19,
                    "e7cbb8da90b3b8443e922cf5f1fe78fe",
                    0.5
                ]
            ],
            "id": 2977
        },
        "image": {
            "url": "https://image-us.24h.com.vn/upload/4-2018/images/2018-12-22/1545474636-113-thumbnail-watermark.jpg",
            "width": 1200,
            "height": 628
        },
        "id": "d07ce38378f5e2531bdc26fac06e7a34db9eadf8",
        "category": "sp",
        "title": "Tiên nữ trượt băng Nga 19 tuổi \"vồ ếch\" đỏ mặt: Hậu quả khó lường",
        "type": "feed",
        "popularity_score": 1.15139,
        "is_popular": true,
        "date_published": "2018-12-23T03:04:00Z",
        "url": "https://www.24h.com.vn/the-thao/tien-nu-truot-bang-nga-19-tuoi-vo-ech-do-mat-hau-qua-kho-luong-c101a1015398.html",
        "summary": "(Tin thể thao, tin trượt băng) Cú &#34;vồ ếch&#34; tai hại khiến người đẹp 19 tuổi đứng trước nguy cơ không được tham dự các giải đấu lớn."
    },
    {
        "feed": {
            "language": "vi",
            "title": "Việt Báo: Sports",
            "url": "vietbao.vn",
            "country": "vn",
            "popularity": 1,
            "icons": [
                [
                    "shortcut-icon",
                    32,
                    32,
                    "433ee30a0eb9d20ce56569ae6f5658e5",
                    0.6
                ],
                [
                    "default-favicon",
                    16,
                    16,
                    "84bed2f802b15c12d131d31bcfe65a72",
                    0.5
                ]
            ],
            "id": 8479
        },
        "image": {
            "url": "http://a9.vietbao.vn/images/vn899/62/2018/12/20181223-c-225-c-tuyen-thu-chuy-234-n-nghiep-vff-cung-phai-chuy-234-n-nghiep-1.jpg",
            "width": 540,
            "height": 360
        },
        "id": "ddf54f9675d63eb084af03042f082cc622a9d08d",
        "category": "sp",
        "title": "Các tuyển thủ chuyên nghiệp, VFF cũng phải chuyên nghiệp",
        "type": "feed",
        "full_text_length": 2643,
        "date_published": "2018-12-23T02:06:03Z",
        "url": "http://vietbao.vn/The-thao/Cac-tuyen-thu-chuyen-nghiep-VFF-cung-phai-chuyen-nghiep/62343174/134/",
        "author": "Việt Báo",
        "summary": "1. Thủ môn Đặng Văn Lâm ôm cột khung thành bật khóc ngay sau khi đội tuyển bóng đá Việt Nam vô địch AFF Cup 2018 là hình ảnh gây xúc động mãnh liệt và đi vào lòng người hâm mộ."
    },
    {
        "feed": {
            "language": "vi",
            "title": "24h: Football",
            "url": "24h.com.vn",
            "country": "vn",
            "popularity": 2,
            "icons": [
                [
                    "shortcut-icon",
                    100,
                    100,
                    "77bad23652c98f496e57feb3d084f2bb",
                    0.9
                ],
                [
                    "icon",
                    19,
                    19,
                    "8643acb11b7ca5cf157d7c6fd86df17a",
                    0.5
                ],
                [
                    "default-favicon",
                    19,
                    19,
                    "e7cbb8da90b3b8443e922cf5f1fe78fe",
                    0.5
                ]
            ],
            "id": 8466
        },
        "image": {
            "url": "https://image-us.24h.com.vn/upload/4-2018/images/2018-12-23/c1-1545525768-819-width640height480-auto-crop-watermark.jpg",
            "width": 640,
            "height": 335
        },
        "id": "9af9ef6ea5c49ed9aa4ab307a92e250748010a6e",
        "category": "sp",
        "title": "Chelsea thua tức tưởi: HLV Sarri bất ngờ \"đầu hàng\" Liverpool, Man City",
        "type": "feed",
        "popularity_score": 1.01065,
        "is_popular": false,
        "date_published": "2018-12-23T00:58:05Z",
        "url": "https://www.24h.com.vn/bong-da/chelsea-thua-tuc-tuoi-hlv-sarri-bat-ngo-dau-hang-liverpool-man-city-c48a1015488.html",
        "summary": "Kém Liverpool tới 11 điểm trong cuộc đua đến ngôi vô địch, HLV Sarri bất ngờ nói lời cay đắng với các CĐV Chelsea."
    },
    {
        "feed": {
            "language": "vi",
            "title": "Người Lao Động: Sports",
            "url": "nld.com.vn",
            "country": "vn",
            "popularity": 1,
            "icons": [
                [
                    "shortcut-icon",
                    64,
                    64,
                    "0aa48ba1d8ffd54774045932eaeb0c8a",
                    0.8
                ]
            ],
            "id": 8472
        },
        "image": {
            "url": "https://nld.mediacdn.vn/zoom/600_315/2018/12/22/thu-mon-van-lam-va-ngoc-hai-mung-chien-thang-o-chung-ket-aff-cup-anh-hai-anh-1545490010996754537650.jpg",
            "width": 600,
            "height": 315
        },
        "id": "1cffed950cc0a77928dae329afba282a0bdcf4fb",
        "category": "sp",
        "title": "Các tuyển thủ chuyên nghiệp, VFF cũng phải chuyên nghiệp",
        "type": "feed",
        "popularity_score": 1.01653,
        "is_popular": false,
        "full_text_length": 2117,
        "date_published": "2018-12-23T00:49:42Z",
        "url": "https://nld.com.vn/the-thao/cac-tuyen-thu-chuyen-nghiep-vff-cung-phai-chuyen-nghiep-20181222225342496.htm",
        "summary": "1. Thủ môn Đặng Văn Lâm ôm cột khung thành bật khóc ngay sau khi đội tuyển bóng đá Việt Nam vô địch AFF Cup 2018 là hình ảnh gây xúc động mãnh liệt và đi vào lòng người hâm mộ. Thế nhưng, không mấy ai biết thủ môn Lâm đã từ chối khéo léo sự tiếp cận của nhiều thương hiệu muốn hợp tác với Lâm để quảng bá các sản phẩm trong suốt thời gian dự giải, đơn giản vì Lâm muốn tập trung thi đấu và hẹn mọi cuộc tiếp xúc sẽ diễn ra sau giải.",
        "lsh_dupes": [
            "264e657972a9ee11873ce9834629039863f86489"
        ]
    },
    {
        "feed": {
            "language": "vi",
            "title": "Tiền Phong: Sports",
            "url": "tienphong.vn",
            "country": "vn",
            "popularity": 1.07781,
            "icons": [
                [
                    "og-image",
                    300,
                    96,
                    "21bf20b8f07e86f716338c8e35f71d67",
                    0.6
                ],
                [
                    "shortcut-icon",
                    48,
                    48,
                    "dbbd75000dfb32c2ec6724a488b385d3",
                    0.6
                ]
            ],
            "id": 8475
        },
        "image": {
            "url": "https://image.tienphong.vn/Uploaded/ctv_danganh/2018_12_23/tien_phong_the_thao_ket_qua_arsenal_vs_burnley_VFLB.jpg",
            "width": 962,
            "height": 589
        },
        "id": "e54c0c53c30c8de915ed4683b5760593d11f5474",
        "category": "sp",
        "title": "‘Bom tấn’ tỏa sáng, Arsenal áp sát top 4",
        "type": "feed",
        "popularity_score": 1.00557,
        "is_popular": false,
        "full_text_length": 306,
        "date_published": "2018-12-23T00:31:06Z",
        "url": "https://www.tienphong.vn/the-thao/bom-tan-toa-sang-arsenal-ap-sat-top-4-1359524.tpo",
        "summary": "Tiền đạo đắt giá nhất lịch sử Arsenal, Pierre-Emerick Aubameyang đã lập cú đúp giúp họ đánh bại Burnley với tỉ số 3-1, qua đó cân bằng điểm số với đội hạng 4 ở Ngoại hạng Anh Chelsea và chỉ đứng dưới vì hiệu số bàn thắng thua.VIDEO: Shaqiri lập cú đúp, Liverpool ‘chôn vùi’ M.UVIDEO: Hàng thủ tệ hại, Arsenal đứt mạch 22 trận bất bạiVIDEO: Hazard tỏa sáng, Chelsea 'bỏ túi' 3 điểmVIDEO: Jesus lập cú đúp, Man City ‘vùi dập’ EvertonVIDEO: Khoảnh khắc ĐT Việt Nam nâng cao cúp vô địch AFF Cup"
    }
]
