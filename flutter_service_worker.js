'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/config": "ace3287d9c7db98fea4ea7c7f3af623d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c5004e15a4c46ec6f7170ee3453013f5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5baa792ff7a77c3ab218bbc309a14b7f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bbfef49b4f1c619985ae6e254895b3f0",
".git/logs/refs/heads/main": "bbfef49b4f1c619985ae6e254895b3f0",
".git/logs/refs/remotes/origin/HEAD": "dbdda351f6d55af7a8e0b9b11b38eb83",
".git/logs/refs/remotes/origin/main": "68d0350be3058083fdeff70610ec0f5e",
".git/objects/00/605c6958fa1e7b311bba6929788cbbab2c76a4": "3374469e9f8ddf1820dd1111c1648f51",
".git/objects/01/290d8f36b03727431c4af6723ffbe1a4469d58": "493921faafb26fca42202c49a007080c",
".git/objects/02/80cbfc2f2b8376fb5516f4dfaf1d1e867cb417": "1998933ddbab45c4473e7cc2c898c08c",
".git/objects/02/a64812a8a535a343803ea648c0e48e4dc59e69": "de8a33feacad1113899b48a833ef0f37",
".git/objects/03/0fed8a6f111453a61f2cefbf3aca5bcb87f507": "bb7d008098d72acca1f90a7f337946ad",
".git/objects/03/3f45e6f5db5534c64083e03ef0d9635fafbb22": "3a63085d79a66bc9de8ec177964bd6de",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "e105e618ebe72cd32bb8ffbede8c4bf6",
".git/objects/03/ef01ebc399f5f499acdc06fe6898f5439ea22f": "a1686219eece48ea21c89b73c773e039",
".git/objects/04/bc46fdf21e9f91d362fed2c923baae40bfebd7": "2bed50d6f2003e6d80eace19e83b2719",
".git/objects/04/eb3ee65cdf1c5e6f518f0f86cebacae55fe185": "7219d3aed08541d945affdd7100b8695",
".git/objects/07/9aa32d6f6f020ba9742b6956f1812be7a0938f": "b4ba6f184de5940b674b713a6f071f75",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "6ba60eff6a71de7a55ea52c6181fc6b8",
".git/objects/09/cd782fe11aaa9f9e58cf20a0a03ad4b8c413e9": "4d06ffe7488abf9130967233bcef27b7",
".git/objects/0d/abbc003e0ef12e48459ce70ba92df62ba2100d": "e4824ee5ffd4f1c1585d150eed5ec6b2",
".git/objects/10/4577c3529f3f54172b2e0d4e3e4dc868594b3d": "51e37d74bf1e18e4d0e03b59003dc8dc",
".git/objects/15/a15b218a29e09c9190992732698d646e4d659a": "5466b764e3628741545b8bd1e1b16bbc",
".git/objects/15/e8fd35d21a0931c7a82a8d2972b6e85b439945": "a27ce601c703ec3f4a4ad088d12af446",
".git/objects/17/c10425e102460805fa3667d7a9ec7fca96df2c": "18c7e6e22bcb93e0517798821c9bd607",
".git/objects/19/f62cb92e80ec4bb4c2b76c5d2ecd2a1dcb313e": "0f84d815bc8be4352a708a61bcf04ed2",
".git/objects/1c/e190209bf397afe42b00dd2c9d2c68ea11fdec": "162a74e906a4803febd99a1489a56426",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "baf057c4b90805f732d24ac22cb10345",
".git/objects/21/7ae0f5f1cc32d52b34ce46f5e36c1367f3aae6": "ea68740635062ae550f938a4634fa008",
".git/objects/24/643cc37449b4bde54411a80b8ed61258225e34": "be18fb2933244bf8a8bd2190a6447be0",
".git/objects/24/d71d99d70bcc7dae9edf29fc9541a77d93ef9a": "f2c7a2221343cdc395ffa11681eb4425",
".git/objects/25/3cf22c526be126f394249993bf61dba8690d85": "ae03459f33a3339a8a641ecf9928e20a",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "96e3285980ba51fe6eaf0295fd60ff80",
".git/objects/26/31a877a1b1b39badd683d5ac07c912469be329": "4eac0f2a1c54641c590ba57bb026eabb",
".git/objects/28/a804d8932aba40f168fd757a74cb718a955a1a": "b6562769232ad5ab1b1ccdd06db11163",
".git/objects/29/4812b31d67d0efa39b12c8f2291884300208fe": "8d7e74ab6ac91d0bbb6f0fe631cc5b65",
".git/objects/2b/be29bba6efd39e493944a077dc00ab69c7ed5b": "19ab1d036c457c6fb21d13e8a958a5dc",
".git/objects/2d/9d84fbb7e464f05258409a71b586edcba4ea9e": "5c9a3232513469900650e60123761393",
".git/objects/2d/d551173a4200216397f50c0c29e8a26ffe7323": "8a7e3b5e8c9c4c577061ec7826b27d2e",
".git/objects/2f/4d74c61ef953f0754bf4a20a5b3514c5e4d809": "ac4b0a6283f45b11b959e61b336984ca",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "a5ab4a345a37d6f24f2325aa56fbd1ef",
".git/objects/33/245dd0450036f110f0ead7354eda3f2fe39a9a": "2ce90873bc6bb5dc427c5991a97f6e6c",
".git/objects/39/1fca007d07abb5f2ccdc9afe842a5a4fb27b27": "8c7827b8a39a4816503b7928e85a363b",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "3ae74c50121a252af7b735f48bed9193",
".git/objects/3c/0cba6cad3213072634f291161f9f420d4ef2ee": "a5dbe911e5f09741f1255897c6fa7771",
".git/objects/3d/c2d4c993577ef181101c4289c3fed055be29a2": "07eeaf9e8902810aae543f083fe0010e",
".git/objects/3d/cc7d56c75c8773dd5db1c8f5c9c0ce7109e410": "d47a7aa3955ae4918e9d966bc8f7bc57",
".git/objects/3f/17a554e89125bba2a3e11efc83a0886a6e66d6": "6aa2d07a8449610405a2732bee81f948",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f4bd21272233e9cbbf4112d6f064a4ae",
".git/objects/42/6b1e9f2c2803c5589add5437ee578e5c121d8b": "672afec39bef836e4b2050e805e9cfe0",
".git/objects/43/eb3d8f36a6877c36a76cb88bb0cd208023dff6": "9882d99b634cb467bd76f343df751ddf",
".git/objects/44/a3b4e755ce53ed626d74b7c9b9ae0f7dc0f582": "f41ef426c7d42232f0564ce9b567794e",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "7dc6862ccf9cf08361bcdcaa506b8cab",
".git/objects/45/7812b8db1722e9c3e96645cede7cc6167e87c2": "16d1d8f5ee43de0ed489993cfd03148a",
".git/objects/45/9627fa20f9dfe14a7ac29962baa52fee841ac0": "505890863e036bd7ff590decc303e9ad",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/46/957272e40001b8483f7fcccf6578aed78a9b44": "417abba4810cf58a403385508537c314",
".git/objects/48/90058fcb93dee1545bc2a4899cf6a5efc39614": "c2ec2db696cd81dba1480d8e76a575c2",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "c071319a7242e951039ba343446845d0",
".git/objects/4b/fe94c13b57f0b9fa5cc5b529fb913626c5e4b0": "ec496e7997b0d0d4df23c34f41f10e3c",
".git/objects/50/3c5114522256bb6cc6b1fb32de1d6bd1fd1f2f": "cad52931834640dc24eff22f8e6377bf",
".git/objects/50/46dcfbe90fddca40cfbb3e8f22ed6a36fe5c63": "41ceede9697b4f9f9dd9e73cca28b51a",
".git/objects/51/acc112998ef4e894a9a274de15e302b1f60e33": "5dba44dddf4a659e988253afc04541d5",
".git/objects/57/b9393d6e88e5965a04b97b0c39933e7cd30062": "ede2ccad91c6fa24c5b465039a7c2221",
".git/objects/58/823647e0f7514f60e293e8264ea9a6a2eb988d": "fa5e0acc54ad1e76c4e0955d7884ab19",
".git/objects/5a/1a03081ed76b36109bc8d26ec05dcb97f51c3b": "f202ac6c242e15c08e6ce54f12a4dc0f",
".git/objects/66/7a95addf7703c1a49b29b1a5f40adc95477411": "bbe192aed6f67b8fd0afae728e52f27a",
".git/objects/67/88091be1d8fff8a8131b64fbcb49eb715c04dd": "ac9ec9daf24df80bb473d7c77294fc30",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "c04d0bcbee109da1b68573e9237d1b84",
".git/objects/6a/50d33e52aa47737d68d7df1cfebeed682b7dd8": "d28007a0c79cffe4b8e8571428f8f718",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "cedd036902896227217e1fe4c1f5af01",
".git/objects/6c/f52c43b2ab88a91a1fbd0dbc68852b1b327649": "62a23ec7b634434e14bdc49888fdb7f9",
".git/objects/71/c49f1c2f7db1b6ddba3fe6f1ef5aa705a3ad39": "138103b12d4e7378dbfaec1f59d8c677",
".git/objects/72/1ef9158417fbc4949196980bae4a6c24daf4a1": "25464980ab175ce4b1e1d0ce36629430",
".git/objects/72/5d47e67024530bdffe593407c719c730c87bb3": "499bd46f8ab0d610a268f782388b6bf2",
".git/objects/72/6bd04427e3f6b606606e7d8f11e7d16ff9f204": "57f759a8c10e8ff91ba108f109096418",
".git/objects/73/3a28e7921bdc76b14489f31530e989970e7146": "7b2e9a2333a285b2b70dbd8f3fa8654b",
".git/objects/75/ebd3adf1ed192931ff560ee08406509268ebe2": "fcce43a571676fb86ee87960944df4b7",
".git/objects/77/3a0f2d5a5da26de05b56b0e12a711be69ce507": "f6e6c153a56b42d0dfec6dceb25689b5",
".git/objects/7b/e84de8c62418f126ebdd4ee05452f025f90222": "7ef35d8d0468137179407c813722b04f",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "aa349e87e38ecb9e74631648723c84ec",
".git/objects/7d/9b9bd8c878fcfdbb3eca9a981d7377f551c214": "2e542f633bb185853c33bdcf7c589724",
".git/objects/7d/9e4402a502f6fb9eed553a98a5d557e2c279bf": "d90c4513cb0c8012346856e29a97851b",
".git/objects/80/d7a7287c520eb65428802dbb4d0bd7e39db98e": "de02a5b0ce67b49fbb17b545bff0f10b",
".git/objects/82/629a3464cc4fd9a11acef0975f75e066e1d89d": "69881b77107cbec3eaf3f41af0f50ab6",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "a1eb710863406c04c5e7b061f2e96af9",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "0a804c6a015be41c2f1307e32bf6b5bc",
".git/objects/87/bd7e2ab8b5089a4ca745dc0bc8ad3127d80d37": "da4a602c8fb5c5836cbb3bbb6fc47f1c",
".git/objects/87/bd9ed1fa36476ea5543722717a8387f9fb737d": "749271a68086860eb25df7c2ea297da7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/88/e20d1137a16e5460c2e39e9ff5d5d7bb8b9ce6": "e0cd044debfd3f7d962e91bd98e79205",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/8b/318f3137fe937e8448aab3e27f7422d9f4ffa1": "56026c92be49e581fb000b4ea00fa243",
".git/objects/8c/cd285b8f0751dfe5038d5ecfc5920a414569dc": "0765e57399d1eb5f24864ee9c383ba13",
".git/objects/8e/5a880a567827c56578203695fb5626b0aea273": "39e6a1e1299a4d8f3982f9cd39736a89",
".git/objects/8e/a336666eff1c52c52b6458cacd8767cff7fc3e": "c7a8ab3ba1453cbfb2083db08d97707e",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "6db9ef87f25d1bcf0e7bea48b7fdf817",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "541ccecb00d45c9fdc9852f95fcdad75",
".git/objects/94/a25f7f4cb416c083d265558da75d457237d671": "cf710852113d9774166335dadf20ec5c",
".git/objects/95/6cdd0d8efc6bc8b808ce59d168afdd12acfc20": "af3b6dd1006276af601c6fdcb1e83b56",
".git/objects/95/f9df6ff72024f680f8242a1a3612cb2e98c799": "4c2c6ea0c6604ff4d4c555df721a6737",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "8601fe5ad3c9535b9cb71142f3ee4c08",
".git/objects/9a/a13a07dd924d9644f6a02941557bfc6b214249": "3ada43da68d98c382f8f53ec4d2dbd95",
".git/objects/9e/bb5e350214d786af473186c6cef6a75427a354": "fe2ea8d4eccb6fb0a943bc978bf94817",
".git/objects/a0/93db095a8ba60df9eae8e6053a9887a48a1ec0": "01d455efba9adb3e2e38b0d96953e21f",
".git/objects/a1/708fc753527a78d417c7a9ba45db74a0832f33": "777bd7bb6474c0b6d04192030f5eef55",
".git/objects/a4/6ae56687091f11ed337188b80b60e9ed63337b": "0477ede1d6e8ba894c29cfd9391ddf05",
".git/objects/a5/38fcd80e639e3f6e0be2280d4e5d64331c1d87": "11929ed1546a50d38ec2b9aa41be9510",
".git/objects/a7/524a4196238270ee218ec63c0764c3c556f2ed": "4c5de6abfb808105ea62a7ed390f5a0d",
".git/objects/aa/cef3796c9afab36266808deeb0e90e77e14999": "4b6096be1c1971772b90932881f9e161",
".git/objects/ad/64476c149596747beb9fd52909e6da3b5d5823": "bfff245f19bd86c8ff6c7b4b036b2e00",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "05f6258e74434f94977ac333a3891eeb",
".git/objects/b3/5cdab5df04030ab573408092dd8ea0401b17e7": "e2400e66ed594d11d93a8d2519199122",
".git/objects/b3/c8684185b50bd0ae1976888385df96617e4504": "8048d63ac076e18c2ba4cf5684366111",
".git/objects/b3/ca3524b07cd4ed74e306fc24a4aedc86c1b972": "adebed0c3dc8ef64f00e16331212570b",
".git/objects/b3/d9f2af34f512d5a65b122d7b212e0d6adbebce": "5b92285e6d1f97481409267493c357d8",
".git/objects/b4/a469eef334252bad4198ef62aae88ef0588497": "126f9f06f223e27b2e20cee105c9e3b8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b8/38b667530d04b31382f32615188be15610f6ae": "d5df07fd9825ee6b74c0010489d78ed8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "5523d4e8db4b01938143b79a2a707ffd",
".git/objects/bb/9e89ec47b9371cc5f900f1de3310ccbef71e55": "b463888e10bcb890e7d6fb4470c61e69",
".git/objects/bb/ae1f869ada47fdf35b8de0449d3b191ee894f3": "248d1cbfc87790acacd3bb98f380b742",
".git/objects/bd/68cd64430a56b2db4ce1acdc897ffd2fee9f3a": "b29a53f4c3e5675ba91ba94ccbfde231",
".git/objects/bd/d4496223ae40f855ead4e432f36384800ef8e6": "0f73ae3350a8afcb0e60a9ff170d05cd",
".git/objects/c2/33c966ae6eb691df35d6ecb45d01c175845f9b": "19bfc6c38fdd6c8b9149871142270f1b",
".git/objects/c2/cdd226a6633d6beb65923bb97949a5822511be": "a6b221141fed478f35fb2965649a4375",
".git/objects/c4/1e8c518fd0d6677421704731bec9462af13212": "72eef0228494f21af30f907b71364008",
".git/objects/c5/e48b22ac0e97efbf2356bbecd1f3fb673df0f6": "fadbd2ad51f70f9d7fd551698f762bb6",
".git/objects/c6/42d6ebeee1b834218559c4dfa427f81ffb00b8": "e630d2fc3d63974d19446a923afafe77",
".git/objects/c6/7f21f3357182747d4e5862b9865b9b8e4e70a9": "c9c9014f3a5764f3f680b3da29449af4",
".git/objects/c7/567d8bd1c76ad9a0826c50e83ab333477fc17d": "3c0ac0d6a7a55cb09ccd37a58be8f97b",
".git/objects/c7/808c110b1b8d95b3e5ac647f6ff9858cd3dceb": "4cfa897d5f48c224e5c9073330f85258",
".git/objects/c8/e666b05627f4bd50c9ede6cbaf21deea52e9f1": "a0bc9d71c9a6670af7dc81e99fa0d3f5",
".git/objects/c9/6dfe5128f26efa857981bb57f63799fd20d304": "93d2489669a11c721a771be2b4560183",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "bd87a7cf5ea05252e5a8b745c0877738",
".git/objects/cb/2535d8c602554b865bb92941d41713613adf68": "78c9c170b1da5681c4c76a0e5dff5329",
".git/objects/cc/911e3513bf1e56204774ffad307cf2c9d730db": "64d5a273318e64f1006f8b0b162a3e17",
".git/objects/cf/21e8e1e1bf89e4d49077abe50c69e1298ccb37": "682036c8fb134b240677478ed49abd83",
".git/objects/cf/26a5b6aa1b46c48ca7862ae975b3a6dd3e5acb": "3a00779ef76c140ae7f6cb109eda1c8f",
".git/objects/cf/eae5a351d51ffbf61e387192273f8345b0302a": "4404a197898b08f57e1f88522644db3f",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "6dd3aa7909b7bea70e523e4a9c9861cc",
".git/objects/d1/7419af50bef426082f533c3fd9073c2da546eb": "4439eb09022cc5a695b0b79f9a1b716e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "6cf3aab7645fb18478693de335133497",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/d8/834b8c7301dc1fb3ba84bd4478db8640a26e2c": "9e098dfe7046414653629ef914353895",
".git/objects/d8/ffaee6267bd6db5dfe80d32e1370eb34b0fbbe": "dd7d5aeec9c807a9f86c736c282c99d8",
".git/objects/d9/300a72660a47657fc783c912c8677fd671112c": "261af64a4d9c59ebe7e92f483d05bbf5",
".git/objects/d9/9902e5cd7ca096de85d4bb71a75e974a56473f": "228887671a8355bce9fc1dd18522d678",
".git/objects/da/2595b5622d42a07fafd2c41c25af6dd738137d": "7308f989eb62737c963b0874bce523fe",
".git/objects/da/f6121d407e7b6fe292fafd49c86900afe14a20": "66ca67ede33d43f70bbea91e73c6fdc7",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "4f6d7d5a9dcde6a00e4fa30f4bc76179",
".git/objects/df/34a98b02c14694459ceb9db0b9347051518bbd": "b81fa8fbeb2bf7f6114052aa98dceba8",
".git/objects/e2/78293cb41151c62aca91b8f751a9bac589c2e8": "6739741b15787525684ba67a4be40d13",
".git/objects/e2/cbfe4cfa7f92b586e382f8cc31226305819d0e": "f8ecfce2c65c3585a2777a72b9195ab5",
".git/objects/e3/9c92340a9a1c34a33973e3bb4198bcdeea9ece": "eebf70d375972977eb0ec09f0e47f216",
".git/objects/e5/67bcca9adc27b0e3120d247f75e4864f713ef7": "5256d90cceadbd21fae9da566fa41231",
".git/objects/e7/41b177eea55a7d98d878271ba575bf0a0d8f76": "e3b234eb9569b69c4d6bb9d70f100934",
".git/objects/e9/d2e4ad59bdfa24a368d6dcec97a050e7b9f59f": "c94747fdfae71e358d6b9f0375429a54",
".git/objects/ea/471f2f4ba9e2e33e373e403fac58387e4a17dd": "edb9a7cabdb51e6f668d9d933057cb12",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/ef/b7f8dac2bdbf334e7bf8ac4d66f7baf298edb8": "93cd75bc5f39c2b4dc3c5cd5f9fb8069",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f2/71a74d19d77327b3bd8ad9df49739959fc7d56": "c15fa12840adc996b7195cd5a1553786",
".git/objects/f4/17480f85dcb40268d5aa0b399f05ff81af5d17": "4a32a0dcb0b86196ce9c16d550bc6632",
".git/objects/f4/926c71c281b922876d3eca54e77a3721304921": "c173c71e592bc7f4aad89205e46dcec3",
".git/objects/f4/944ae437654b5fc133ffce32b07fc75fe93133": "49b14d3438115979b62417bfb71f44a1",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "341dff10df6725d444832c934b9f27b9",
".git/objects/f6/a976652ac803103397d9fcfb00d04a8e3a5ba9": "4a14de5a8303e59cf8fc5f2e4d055cea",
".git/objects/f7/d024c6b27a0f4fce88704c6361e114afa729a6": "2ca027f56d3cdebffb047b7d4a3a7b36",
".git/objects/f8/3c618a19c7911b2405da23103d93afcbc037fb": "d512f1db86ca1263bfd3c0d8ebb1ba6c",
".git/objects/fb/66c1d46952cf80ebff08f8baad1eb52e0268f4": "8d2d071208b4c9461fea8d1a0c98dcaf",
".git/objects/fe/8384d04fdded201237717cafc4faf6a57668a2": "af2d9964f82127dfa7c2a2514301b973",
".git/objects/fe/fd55aa5dbc19fa49b4a65ec7066e3e668e53c3": "319a24cca1bd335ebe788f7d63b55db4",
".git/objects/ff/52b55ab44100ff7fd3fc3c5d4d91239f25a291": "4265873e785c6ec671ebf05a65246650",
".git/refs/heads/main": "926f5b36560939698639f7c1292d5f26",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "926f5b36560939698639f7c1292d5f26",
".idea/encodings.xml": "2b73a41f305a1d00fed308299f057f8a",
".idea/misc.xml": "fe04a1fa1b2574a989fe20786811310f",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/vcs.xml": "a8b625cb090fe904fb7338f6447f50ac",
".idea/web.iml": "52309cb9c39acd18405af3f5b894551e",
".idea/workspace.xml": "9e9d3e495499fb210965dbf34a68055b",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "42f5a0b7f8a7d1cca8812ee77ea7f0c5",
"assets/NOTICES": "b259380f8c5d3348205930a13cc40796",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "02e0b27215c3ffda0a82b421463ab223",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c06d5b70baa9f12cf3835b73294b3f86",
"/": "c06d5b70baa9f12cf3835b73294b3f86",
"main.dart.js": "3c12c55116ad0b8c6941b3e0a6198c67",
"manifest.json": "11a95927d470c9dce2307600834e73c2",
"version.json": "24afb3e460d44534f8afb08e094bd5aa"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
