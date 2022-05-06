    var p = window.document.getElementById('d')
    var des =window.document.getElementById('des')
    var lista = window.document.getElementById('total')
    var res = window.document.getElementById('res')
    //des.innerHTML = descri(a)
    var valores = []
    var cod = []
    document.addEventListener("keypress",function(e){
        if(e.key === "Enter"){
            let bress = document.getElementById('abc');
            bress.click();
        }
    });
    
    
    
    
    

    var a= [
        {Id:26052 ,	Descrição: 'BEBEDOURO ESMALTEC DE COLUNA GARRAFÃO ECG35B - BRANCO'	,Código:'214C34'	,Valor:0.10},
        {Id:2 ,	Descrição: 'BEBEDOURO ESMALTEC DE COLUNA GARRAFÃO ECG35B - BRANCO'	,Código:'767DB3'	,Valor:359},
        {Id:3 ,	Descrição: 'BEBEDOURO ESMALTEC DE COLUNA ECG35B - PRETO'	,Código:'EDB16F'	,Valor:479},
        {Id:4 ,	Descrição: 'BEBEDOURO ESMALTEC DE COLUNA ECG35B - PRETO'	,Código:'A65D55'	,Valor:479},
        {Id:5 ,	Descrição: 'BEBEDOURO ESMALTEC DE COLUNA ECG35B - PRETO'	,Código:'72057'	,Valor:479},
        {Id:6 ,	Descrição: 'BEBEDOURO ESMALTEC REFRIGERADO DE COLUNA EGC35B - BRANCO'	,Código:'2DEE01'	,Valor:419},
        {Id:7 ,	Descrição: 'BEBEDOURO ESMALTEC DE COLUNA GARRAFÃO ECG35B - PRETO'	,Código:'998912'	,Valor:439},
        {Id:8 ,	Descrição: 'BEBEDOURO ESMALTEC DE MESA REFRIGERADO EGM30 - BRANCO'	,Código:'AA8DE8'	,Valor:349},
        {Id:9 ,	Descrição: 'BEBEDOURO ESMALTEC DE MESA REFRIGERADO EGM30 - BRANCO'	,Código:'9D6DD3'	,Valor:349},
        {Id:10 ,	Descrição: 'BEBEDOURO ESMALTEC DE MESA REFRIGERADO EGM30 - BRANCO'	,Código:'84AB77'	,Valor:349},
        {Id:11 ,	Descrição: 'COIFA BRASTEMP 60CM PAREDE 60 HZ - INOX'	,Código:'d7515028-7806-f89f-b4f9-f78061a2ae04'	,Valor:0.01},
        {Id:12 ,	Descrição: 'COOKTOP BRASTEMP DE INDUCAO 4B 60HZ - PRETO'	,Código:'d77c920c-3383-8a7a-a9e4-a3383a513619'	,Valor:1619},
        {Id:13 ,	Descrição: 'COOKTOP CONSUL 75CM MESA DE VIDRO ACENDIMENTO SUPERAUTOMATICO - **NAO REALIZAMOS CONVERSAO DE GAS** - PRETO'	,Código:'80e792c1-66fc-3bfe-7558-e66fc061838b'	,Valor:439},
        {Id:14 ,	Descrição: 'COOKTOP BRASTEMP 85CM MESA DE VIDRO ACENDIMENTO SUPERAUTOMATICO - **NAO REALIZAMOS CONVERSAO DE GAS** - PRETO'	,Código:'ebea5f41-af2d-f1fd-07f0-daf2d9e0d082'	,Valor:539},
        {Id:15 ,	Descrição: 'COOKTOP BRASTEMP DE INDUCAO 4 BOCAS C/ ACENDIMENTO AUTOMATICO E TIMER TOUCH - PRETO'	,Código:'5441de52-3b99-7197-b39d-73b993a53294'	,Valor:2169},
        {Id:16 ,	Descrição: 'COOKTOP BRASTEMP A GAS 5 BOCAS C/ MESA DE VIDRO E ACENDIMENTO SUPERAUTOMATICO - **NAO REALIZAMOS CONVERSAO DE GAS** - PRETO'	,Código:'86c26e07-90d0-cea2-2671-290d0f823bd2'	,Valor:449},
        {Id:17 ,	Descrição: 'COOKTOP BRASTEMP DE INDUCAO 4 BOCAS C/ ACENDIMENTO AUTOMATICO E TIMER TOUCH - PRETO'	,Código:'2F0C9'	,Valor:2019},
        {Id:18 ,	Descrição: 'COOKTOP BRASTEMP DE INDUCAO 4B 60HZ - PRETO'	,Código:'AD85AD'	,Valor:1749},
        {Id:19 ,	Descrição: 'COOKTOP BRASTEMP A GAS 5 BOCAS C/ TOUCH TIMER E QUEIMADOR QUADRICHAMA - **NAO REALIZAMOS CONVERSAO DE GAS** - PRETO'	,Código:'6618AF'	,Valor:649},
        {Id:20 ,	Descrição: 'FOGAO BRASTEMP 04 BOCAS C/ BOTOES REMOVIVEIS E VIDRO PANORAMICO - **NAO REALIZAMOS CONVERSAO DE GAS** - BRANCO'	,Código:'6bb33a79-68a2-40eb-5b44-b68a2b604cd2'	,Valor:689},
        {Id:21 ,	Descrição: 'FOGAO BRASTEMP A GAS 5 BOCAS C/ MESA DE VIDRO E TURBO CHAMA - **NAO REALIZAMOS CONVERSAO DE GAS** - PRETO'	,Código:'42237ab8-60be-564e-71d2-e60be577088a'	,Valor:1429},
        {Id:22 ,	Descrição: 'FOGAO CONSUL A GAS 5 BOCAS C/ MESA DE VIDRO E TREMPE DE FERRO FUNDIDO - **NAO REALIZAMOS CONVERSAO DE GAS** - INOX'	,Código:'a7ddbc0b-4deb-6a27-7ade-74deba52dd9f'	,Valor:1139},
        {Id:23 ,	Descrição: 'FOGAO BRASTEMP A GAS 5 BOCAS C/ TURBO CHAMA - **NAO REALIZAMOS CONVERSAO DE GAS** - BRANCO'	,Código:'1a85707a-f76e-fc88-ee93-8f76e833b263'	,Valor:1069},
        {Id:24 ,	Descrição: 'FOGAO CONSUL A GAS 5 BOCAS C/ MESA DE VIDRO E TREMPE DE FERRO FUNDIDO - **NAO REALIZAMOS CONVERSAO DE GAS** - INOX'	,Código:'5bf7db9f-a810-084c-0f6c-ca810748a05e'	,Valor:1139},
        {Id:25 ,	Descrição: 'FOGAO BRASTEMP A GAS MESA DE VIDRO 05 BOCAS GRILL C/ DUPLO FORNO TOUCH TIMER E AUTODESLIGAMENTO - **NAO REALIZAMOS CONVERSAO DE GAS** - INOX'	,Código:'2d3e2f76-f5a9-732e-d8f0-ef5a98e68e81'	,Valor:2899},
        {Id:26 ,	Descrição: 'FOGAO BRASTEMP A GAS 6 BOCAS C/ BOTOES REMOVIVEIS E EXCLUSIVO ARO PROTETOR - **NAO REALIZAMOS CONVERSAO DE GAS** - BRANCO'	,Código:'12efef0c-dcd8-a748-ee4b-8dcd8e36afe4'	,Valor:1039},
        {Id:27 ,	Descrição: 'FOGAO CONSUL A GAS 5 BOCAS C/ ACENDIMENTO AUTOMATICO - **NAO REALIZAMOS CONVERSAO DE GAS** - BRANCO'	,Código:'36a96b28-f00c-ee0e-057f-ef00cd68cdc5'	,Valor:899},
        {Id:28 ,	Descrição: 'FOGAO CONSUL A GAS 5 BOCAS C/ MESA DE VIDRO E TREMPE DE FERRO FUNDIDO - **NAO REALIZAMOS CONVERSAO DE GAS** - INOX'	,Código:'0f7d1f58-b025-2af9-ee53-9b025a89b7af'	,Valor:1139},
        {Id:29 ,	Descrição: 'FOGAO CONSUL A GAS 5 BOCAS C/ ACENDIMENTO AUTOMATICO - **NAO REALIZAMOS CONVERSAO DE GAS** - INOX'	,Código:'25f73a9e-999f-f344-d487-4999fbff2731'	,Valor:1009},
        {Id:30 ,	Descrição: 'FOGAO BRASTEMP A GAS 6 BOCAS C/ BOTOES REMOVIVEIS E EXCLUSIVO ARO PROTETOR - **NAO REALIZAMOS CONVERSAO DE GAS** - BRANCO'	,Código:'31d55071-507a-302a-5b12-a507ac9ccadd'	,Valor:1039},
        {Id:31 ,	Descrição: 'FOGAO CONSUL A GAS 04 BOCAS C/ MESA DE VIDRO E TREMPE DE FERRO FUNDIDO - **NAO REALIZAMOS CONVERSAO DE GAS** - INOX'	,Código:'40287682-46cd-4df3-a216-346cd2ea4d54'	,Valor:1089},
        {Id:32 ,	Descrição: 'FOGAO BRASTEMP A GAS 4 BOCAS C/ ACENDIMENTO AUTOMATICO E BOTOES REMOVIVEIS - INOX'	,Código:'3446d6d9-6819-df8f-82e1-f68197009c17'	,Valor:879},
        {Id:33 ,	Descrição: 'FOGAO BRASTEMP DE EMBUTIR A GAS 5 BOCAS C/ TURBO CHAMA E TOUCH TIMER - **NAO REALIZAMOS CONVERSAO DE GAS** - INOX'	,Código:'6d56458c-09fd-b4da-f46f-a09fd1fc180e'	,Valor:1979},
        {Id:34 ,	Descrição: 'FOGAO BRASTEMP A GAS 6 BOCAS C/ BOTOES REMOVIVEIS E EXCLUSIVO ARO PROTETOR - **NAO REALIZAMOS CONVERSAO DE GAS** - BRANCO'	,Código:'11146d82-e93e-a310-db90-0e93e2397a4a'	,Valor:1189},
        {Id:35 ,	Descrição: 'FOGAO BRASTEMP 5 BOCAS C/ TURBO CHAMA E TOUCH TIMER - INOX'	,Código:'572d4475-e807-0224-8e6d-4e807b4e9dfd'	,Valor:1509},
        {Id:36 ,	Descrição: 'FOGAO BRASTEMP A GAS 4 BOCAS C/ ACENDIMENTO AUTOMATICO E BOTOES REMOVIVEIS - INOX'	,Código:'260eff6a-e243-f03f-95c6-fe243d67e70b'	,Valor:879},
        {Id:37 ,	Descrição: 'FOGAO BRASTEMP 04 BOCAS C/ FORNO DUPLO E BOTOES REMOVIVEIS - BRANCO'	,Código:'b87f4df7-8ae0-0baf-e2ec-f8ae0be27af4'	,Valor:1339},
        {Id:38 ,	Descrição: 'FOGAO BRASTEMP A GAS 5 BOCAS C/ TURBO CHAMA - **NAO REALIZAMOS CONVERSAO DE GAS** - BRANCO'	,Código:'3e6b9fe2-9533-4059-a8c4-99533aaa857d'	,Valor:1139},
        {Id:39 ,	Descrição: 'FOGAO BRASTEMP A GAS MESA DE VIDRO 05 BOCAS GRILL C/ DUPLO FORNO TOUCH TIMER E AUTODESLIGAMENTO - **NAO REALIZAMOS CONVERSAO DE GAS** - INOX'	,Código:'3f87c865-84b0-3e25-b650-584b0f27be71'	,Valor:3109},
        {Id:40 ,	Descrição: 'FOGAO BRASTEMP DE EMBUTIR A GAS 5 BOCAS C/ TURBO CHAMA E TOUCH TIMER - **NAO REALIZAMOS CONVERSAO DE GAS** - INOX'	,Código:'61e94060-ed9d-11d4-88d7-4ed9dc02c8a7'	,Valor:1849},
        {Id:41 ,	Descrição: 'FOGAO CONSUL A GAS 5 BOCAS C/ ACENDIMENTO AUTOMATICO - **NAO REALIZAMOS CONVERSAO DE GAS** - INOX'	,Código:'621EFA'	,Valor:1079},
        {Id:42 ,	Descrição: 'FOGAO ESMALTEC AGATA A GAS C/ ACENDIMENTO AUTOMATICO E SUPER CHAMA 4 BOCAS - INOX'	,Código:'18B352'	,Valor:579},
        {Id:43 ,	Descrição: 'FOGAO ESMALTEC AGATA A GAS C/ ACENDIMENTO AUTOMATICO SUPER E CHAMA 5 BOCAS - BRANCO'	,Código:'878EBA'	,Valor:739},
        {Id:44 ,	Descrição: 'FOGAO ESMALTEC AGATA A GAS C/ ACENDIMENTO AUTOMATICO SUPER E CHAMA 5 BOCAS - BRANCO'	,Código:'FF49A0'	,Valor:739},
        {Id:45 ,	Descrição: 'FOGAO ESMALTEC AGATA A GAS C/ ACENDIMENTO AUTOMATICO SUPER E CHAMA 5 BOCAS - BRANCO'	,Código:'18971B'	,Valor:739},
        {Id:46 ,	Descrição: 'FORNO BRASTEMP DE EMBUTIR ELETRICO 84L C/ CONVECCAO E TERMOMETRO MEAT CONTROL - INOX'	,Código:'92f08453-ce34-e57f-12c3-fce343586ab1'	,Valor:1929},
        {Id:47 ,	Descrição: 'FORNO CONSUL DE EMBUTIR ELÉTRICO C/ DOURADOR E TIMER AUTODESLIGAMENTO 47 - PRETO'	,Código:'ddfd6a12-0c43-00ad-d3b3-d0c43f76db94'	,Valor:759},
        {Id:48 ,	Descrição: 'FORNO BRASTEMP DE EMBUTIR ELETRICO 84L GRILL EASY CLEAN CONVECCAO TIMER - INOX'	,Código:'c3bf2c8b-e6a8-ecbc-48f5-ce6a8a7f8385'	,Valor:1239},
        {Id:49 ,	Descrição: 'FORNO BRASTEMP DE EMBUTIR A GAS 78L GRILL ROTISSERIE CONVECCAO - **NAO REALIZAMOS CONVERSAO DE GAS** - PRETO'	,Código:'3105bbe9-5172-981b-1c7f-b5172af26dc6'	,Valor:1169},
        {Id:50 ,	Descrição: 'FORNO BRASTEMP DE EMBUTIR 78L A GAS C/ CONVECCAO E TERMOMETRO MEAT CONTROL - **NAO REALIZAMOS CONVERSAO DE GAS** - INOX'	,Código:'72294554-0111-5bae-2108-e0111d769ff9'	,Valor:1929},
        {Id:51 ,	Descrição: 'FORNO BRASTEMP DE EMBUTIR ELETRICO 84L C/ CONVECCAO E TERMOMETRO MEAT CONTROL - INOX'	,Código:'0a63dd03-1861-5771-f1e8-11861b9e7f4f'	,Valor:1929},
        {Id:52 ,	Descrição: 'FREEZER BRASTEMP 228L VERTICAL FROST FREE 1 PORTA - BRANCO'	,Código:'76DF90DB-7D04-DF71-E4DA-17D047F3414A'	,Valor:1989},
        {Id:53 ,	Descrição: 'LAVADORA CONSUL 12KG CESTO INOX 16 PROGRAMAS DE LAVAGEM - BRANCO'	,Código:'000a681f-b7dc-0eca-4397-ab7dc4443ba5'	,Valor:1109},
        {Id:54 ,	Descrição: 'LAVADORA CONSUL 9KG C/ DOSAGEM EXTRA ECONÔMICA E CICLO EDREDOM - BRANCO'	,Código:'edbd272a-a8f7-265f-4841-fa8f76739f38'	,Valor:909},
        {Id:55 ,	Descrição: 'LAVADORA CONSUL 12KG CESTO INOX 16 PROGRAMAS DE LAVAGEM - BRANCO'	,Código:'a15cc4e5-4991-6530-03da-04991c2100ca'	,Valor:1109},
        {Id:56 ,	Descrição: 'LAVADORA CONSUL 14KG - BRANCO'	,Código:'bd5efdb5-7feb-5232-c39e-27feb7b699d4'	,Valor:1199},
        {Id:57 ,	Descrição: 'LAVADORA BRASTEMP 12KG C/ SUPERFILTRO E ENXAGUE ANTIALÉRGICO - BRANCO'	,Código:'9488f0f3-c5f2-4092-6f2f-2c5f2860ef89'	,Valor:1179},
        {Id:58 ,	Descrição: 'LAVADORA BRASTEMP 14KG C/ CICLO TIRA MANCHAS ADVANCED E ANTIBOLINHA - BRANCO'	,Código:'fb0691bd-914d-140f-7db8-f914dfd74874'	,Valor:1319},
        {Id:59 ,	Descrição: 'LAVADORA BRASTEMP 14KG C/ CICLO TIRA MANCHAS ADVANCED E ANTIBOLINHA - BRANCO'	,Código:'b25d13e1-e324-7f2e-04bf-ee3246d11e06'	,Valor:1319},
        {Id:60 ,	Descrição: 'LAVADORA BRASTEMP 14KG C/ CICLO TIRA MANCHAS ADVANCED E ANTIBOLINHA - BRANCO'	,Código:'014429ed-11be-02a9-0a91-911bef5c0673'	,Valor:1319},
        {Id:61 ,	Descrição: 'LAVADORA BRASTEMP 14KG C/ CICLO TIRA MANCHAS ADVANCED E ANTIBOLINHA - BRANCO'	,Código:'a8bb605d-cf86-f8f7-c6f2-7cf86928a097'	,Valor:1319},
        {Id:62 ,	Descrição: 'LAVADORA CONSUL 9KG C/ DOSAGEM EXTRA ECONÔMICA E CICLO EDREDOM - BRANCO'	,Código:'b6ce391f-4c19-3af1-9f7b-14c19cb4c605'	,Valor:909},
        {Id:63 ,	Descrição: 'LAVADORA CONSUL 12KG CESTO INOX 16 PROGRAMAS DE LAVAGEM - BRANCO'	,Código:'bad421bf-dd63-e2b0-9f57-0dd639def307'	,Valor:1109},
        {Id:64 ,	Descrição: 'LAVADORA BRASTEMP 15KG C/ CICLO EDREDOM ESPECIAL ENXAGUE ANTIALÉRGICO E CICLO MAIS BRANCO - BRANCO'	,Código:'313f4203-b5a1-021e-da1e-eb5a1fcb5647'	,Valor:1419},
        {Id:65 ,	Descrição: 'LAVADORA BRASTEMP 12KG C/ CICLO TIRA MANCHAS ADVANCED E ANTIBOLINHA - BRANCO'	,Código:'d2de6a49-8675-1877-199e-7867518a880e'	,Valor:1199},
        {Id:66 ,	Descrição: 'LAVADORA CONSUL 12KG CESTO INOX 16 PROGRAMAS DE LAVAGEM - BRANCO'	,Código:'991bf8a8-8165-e50f-ea72-f8165d651686'	,Valor:1109},
        {Id:67 ,	Descrição: 'LAVADORA CONSUL 12KG CESTO INOX 16 PROGRAMAS DE LAVAGEM - BRANCO'	,Código:'f6312653-1b82-cae4-62d2-41b8292ee87c'	,Valor:1109},
        {Id:68 ,	Descrição: 'LAVADORA BRASTEMP 9KG C/ CICLO TIRA MANCHAS E ENXAGUE DUPLO - BRANCO'	,Código:'2145d583-3718-9e85-83cf-5371860fef42'	,Valor:1109},
        {Id:69 ,	Descrição: 'LAVADORA CONSUL 12KG CESTO INOX 16 PROGRAMAS DE LAVAGEM - BRANCO'	,Código:'068b63ff-742c-cae8-157b-8742cd88480f'	,Valor:1109},
        {Id:70 ,	Descrição: 'LAVADORA CONSUL 11KG C/ LAVAGEM ECONOMICA - BRANCO'	,Código:'4d8fafc9-249e-b02a-b0d4-a249e39d241f'	,Valor:969},
        {Id:71 ,	Descrição: 'LAVADORA BRASTEMP 12KG C/ CICLO TIRA MANCHAS ADVANCED E ANTIBOLINHA - BRANCO'	,Código:'6598e8ec-aa02-b94a-d6e0-aaa02db63f31'	,Valor:1199},
        {Id:72 ,	Descrição: 'LAVADORA BRASTEMP 15KG C/ CICLO EDREDOM ESPECIAL ENXAGUE ANTIALÉRGICO E CICLO MAIS BRANCO - BRANCO'	,Código:'81b634c2-a090-1225-1b4f-5a090beb50ef'	,Valor:1419},
        {Id:73 ,	Descrição: 'LAVADORA CONSUL 12KG CESTO INOX 16 PROGRAMAS DE LAVAGEM - BRANCO'	,Código:'61ddc145-39bb-b70f-d911-f39bb31e5787'	,Valor:1109},
        {Id:74 ,	Descrição: 'LAVADORA CONSUL 14KG DOSAGEM EXTRA ECONOMICA E CICLO EDREDOM - BRANCO'	,Código:'51fc3f6c-1822-5c96-22be-618227ccf0a4'	,Valor:1199},
        {Id:75 ,	Descrição: 'LAVADORA CONSUL 14KG DOSAGEM EXTRA ECONOMICA E CICLO EDREDOM - BRANCO'	,Código:'58768223-dc4d-01f6-0ef0-6dc4de4c6108'	,Valor:1199},
        {Id:76 ,	Descrição: 'LAVADORA CONSUL 12KG CESTO INOX 16 PROGRAMAS DE LAVAGEM - BRANCO'	,Código:'d0b805de-05f5-d8eb-9e7f-b05f573088b6'	,Valor:1109},
        {Id:77 ,	Descrição: 'LAVADORA BRASTEMP 12KG C/ CICLO TIRA MANCHAS ADVANCED E ANTIBOLINHA - BRANCO'	,Código:'02cb67e1-a986-cbd4-f4c2-4a986b53d7a9'	,Valor:1199},
        {Id:78 ,	Descrição: 'LAVADORA CONSUL 14KG DOSAGEM EXTRA ECONOMICA E CICLO EDREDOM - BRANCO'	,Código:'fd0097a2-cace-b7af-9c78-fcace7c4242e'	,Valor:1199},
        {Id:79 ,	Descrição: 'LAVADORA CONSUL 12KG CESTO INOX 16 PROGRAMAS DE LAVAGEM - BRANCO'	,Código:'31101e87-19d3-adc5-0ae4-519d3de74e13'	,Valor:1109},
        {Id:80 ,	Descrição: 'LAVADORA BRASTEMP 14KG C/ CICLO TIRA MANCHAS ADVANCED E ANTIBOLINHA - BRANCO'	,Código:'9beddbc8-bb3f-d076-d536-6bb3f0a09b07'	,Valor:1319},
        {Id:81 ,	Descrição: 'LAVADORA BRASTEMP 15KG c/ 8 PROGRAMAS DE LAVAGEM E CESTO INOX - ALU'	,Código:'c253a26d-a9d8-ae65-7917-5a9d8dad73fc'	,Valor:1729},
        {Id:82 ,	Descrição: 'LAVADORA CONSUL 12KG CESTO INOX 16 PROGRAMAS DE LAVAGEM - BRANCO'	,Código:'6b5f4852-ad64-4acd-d024-dad6470f1aaa'	,Valor:1109},
        {Id:83 ,	Descrição: 'LAVADORA CONSUL 14KG - BRANCO'	,Código:'baf3bb05-a2fc-f229-44f1-9a2fcf7512f1'	,Valor:1199},
        {Id:84 ,	Descrição: 'LAVADORA CONSUL 12KG CESTO INOX 16 PROGRAMAS DE LAVAGEM - BRANCO'	,Código:'3b4c21dd-8172-d6be-0a8a-e8172d11e0ae'	,Valor:1109},
        {Id:85 ,	Descrição: 'LAVADORA CONSUL 12KG CESTO INOX 16 PROGRAMAS DE LAVAGEM - BRANCO'	,Código:'772f178b-063d-51e5-21d2-5063d3357644'	,Valor:1109},
        {Id:86 ,	Descrição: 'LAVADORA BRASTEMP 12KG C/ CICLO TIRA MANCHAS ADVANCED E ANTIBOLINHA - BRANCO'	,Código:'ea57374d-4d2f-f0b0-4fcf-04d2fac4935c'	,Valor:1199},
        {Id:87 ,	Descrição: 'LAVADORA CONSUL 12KG CESTO INOX 16 PROGRAMAS DE LAVAGEM - BRANCO'	,Código:'721ca109-e97a-f615-939e-5e97a6c4e42b'	,Valor:1109},
        {Id:88 ,	Descrição: 'LAVADORA CONSUL 12KG CESTO INOX 16 PROGRAMAS DE LAVAGEM - BRANCO'	,Código:'72712260-9055-4f0c-e8c1-c9055312c695'	,Valor:1109},
        {Id:89 ,	Descrição: 'LAVADORA CONSUL 16KG C/ DOSAGEM EXTRA ECONOMICA E CICLO EDREDOM - BRANCO'	,Código:'c7ed6383-b637-4d25-85ed-5b637304d034'	,Valor:1319},
        {Id:90 ,	Descrição: 'LAVADORA CONSUL 14KG DOSAGEM EXTRA ECONOMICA E CICLO EDREDOM - BRANCO'	,Código:'220e3900-0209-fd3e-3e51-e02091a8530d'	,Valor:1199},
        {Id:91 ,	Descrição: 'LAVADORA CONSUL 16KG C/ DOSAGEM EXTRA ECONOMICA E CICLO EDREDOM - BRANCO'	,Código:'e3f88428-5793-2932-717b-25793c8751b6'	,Valor:1319},
        {Id:92 ,	Descrição: 'LAVADORA CONSUL 12KG CESTO INOX 16 PROGRAMAS DE LAVAGEM - BRANCO'	,Código:'4750335d-1016-e710-603e-010163cc5090'	,Valor:1109},
        {Id:93 ,	Descrição: 'LAVADORA CONSUL 9KG C/ DOSAGEM EXTRA ECONÔMICA E CICLO EDREDOM - BRANCO'	,Código:'f7c47443-fa2e-6831-f11f-1fa2e381d52f'	,Valor:1039},
        {Id:94 ,	Descrição: 'LAVADORA BRASTEMP 12KG C/ CICLO TIRA MANCHAS ADVANCED E ANTIBOLINHA - BRANCO'	,Código:'7f17e1d3-f7e9-b671-78f9-1f7e915a3110'	,Valor:1369},
        {Id:95 ,	Descrição: 'LAVADORA BRASTEMP 12KG C/ CICLO TIRA MANCHAS ADVANCED E ANTIBOLINHA - BRANCO'	,Código:'94f11468-c2cd-08e8-e1f9-8c2cdf15ecda'	,Valor:1369},
        {Id:96 ,	Descrição: 'LAVADORA BRASTEMP 12KG C/ CICLO TIRA MANCHAS ADVANCED E ANTIBOLINHA - BRANCO'	,Código:'ff20e554-b146-f3ee-1f64-eb146d886641'	,Valor:1369},
        {Id:97 ,	Descrição: 'LAVADORA CONSUL 12KG CESTO INOX 16 PROGRAMAS DE LAVAGEM - BRANCO'	,Código:'52c6c8e7-7faa-7f73-4b10-37faa4129f46'	,Valor:1269},
        {Id:98 ,	Descrição: 'LAVADORA CONSUL 16KG C/ DOSAGEM EXTRA ECONOMICA E CICLO EDREDOM - BRANCO'	,Código:'7a1bf257-33c7-2e18-33ea-833c75ca3755'	,Valor:1509},
        {Id:99 ,	Descrição: 'LAVADORA BRASTEMP 12KG C/ CICLO TIRA MANCHAS ADVANCED - TITANIUM'	,Código:'2c19fec5-4167-fe42-2633-24167302c534'	,Valor:1629},
        {Id:100 ,	Descrição: 'LAVADORA CONSUL 12KG CESTO INOX 16 PROGRAMAS DE LAVAGEM - BRANCO'	,Código:'4573c051-a59d-a436-b3a3-6a59d9f9f67e'	,Valor:1269},
        {Id:101 ,	Descrição: 'LAVADORA BRASTEMP 12KG C/ CICLO TIRA MANCHAS ADVANCED E ANTIBOLINHA - BRANCO'	,Código:'7a8866e1-440c-111c-0183-c440c5d92a62'	,Valor:1369},
        {Id:102 ,	Descrição: 'MICRO-ONDAS BRASTEMP 32L C/ PAINEL INTEGRADO E FUNCAO GRILL - PRETO'	,Código:'ED13FC'	,Valor:769},
        {Id:103 ,	Descrição: 'MICRO-ONDAS BRASTEMP 32L C/ PAINEL INTEGRADO E FUNCAO GRILL - PRETO'	,Código:'6D143F'	,Valor:769},
        {Id:104 ,	Descrição: 'MICRO-ONDAS BRASTEMP DE EMBUTIR 40L COM GRILL - INOX'	,Código:'0E8BFA'	,Valor:3499},
        {Id:105 ,	Descrição: 'MICRO-ONDAS BRASTEMP DE EMBUTIR 40L COM GRILL - INOX'	,Código:'71537A'	,Valor:3499},
        {Id:106 ,	Descrição: 'MICRO-ONDAS BRASTEMP 32L C/ PAINEL INTEGRADO - BRANCO'	,Código:'FB3AD4'	,Valor:489},
        {Id:107 ,	Descrição: 'MICRO-ONDAS BRASTEMP 32L C/ PAINEL INTEGRADO - BRANCO'	,Código:'B52959'	,Valor:489},
        {Id:108 ,	Descrição: 'MICRO-ONDAS BRASTEMP 32L C/ PAINEL INTEGRADO - BRANCO'	,Código:'B26350'	,Valor:489},
        {Id:109 ,	Descrição: 'MICRO-ONDAS BRASTEMP 32L C/ PAINEL INTEGRADO - INOX'	,Código:'6C5375'	,Valor:629},
        {Id:110 ,	Descrição: 'MICRO-ONDAS BRASTEMP 32L C/ PAINEL INTEGRADO - INOX'	,Código:'113027'	,Valor:629},
        {Id:111 ,	Descrição: 'MICRO-ONDAS BRASTEMP 32L C/ PAINEL INTEGRADO - INOX'	,Código:'E3AC40'	,Valor:629},
        {Id:112 ,	Descrição: 'MICRO-ONDAS BRASTEMP 32L C/ PAINEL INTEGRADO - INOX'	,Código:'400A7D'	,Valor:629},
        {Id:113 ,	Descrição: 'MICRO-ONDAS BRASTEMP 32L C/ PAINEL INTEGRADO - INOX'	,Código:'247BC4'	,Valor:629},
        {Id:114 ,	Descrição: 'MICRO-ONDAS BRASTEMP 32L C/ PAINEL INTEGRADO - INOX'	,Código:'723DBE'	,Valor:629},
        {Id:115 ,	Descrição: 'MICRO-ONDAS BRASTEMP 32L C/ PAINEL INTEGRADO - INOX'	,Código:'65411C'	,Valor:629},
        {Id:116 ,	Descrição: 'MICRO-ONDAS BRASTEMP 32L C/ PAINEL INTEGRADO - INOX'	,Código:'AD77AD'	,Valor:629},
        {Id:117 ,	Descrição: 'MICRO-ONDAS BRASTEMP 32L - INOX'	,Código:'9AC7C9'	,Valor:629},
        {Id:118 ,	Descrição: 'MICRO-ONDAS BRASTEMP 32L - INOX'	,Código:'3ED11E'	,Valor:629},
        {Id:119 ,	Descrição: 'MICRO-ONDAS CONSUL 20L - CINZA'	,Código:'8C7AF4'	,Valor:379},
        {Id:120 ,	Descrição: 'MICRO-ONDAS CONSUL 32L - BRANCO'	,Código:'7BF762'	,Valor:489},
        {Id:121 ,	Descrição: 'MICRO-ONDAS CONSUL 32L - BRANCO'	,Código:'9AF407'	,Valor:489},
        {Id:122 ,	Descrição: 'MICRO-ONDAS CONSUL 32L - INOX'	,Código:'EE739B'	,Valor:529},
        {Id:123 ,	Descrição: 'MICRO-ONDAS CONSUL 32L - INOX'	,Código:'0EA3C9'	,Valor:529},
        {Id:124 ,	Descrição: 'MICRO-ONDAS CONSUL 32L - INOX'	,Código:'4718A9'	,Valor:529},
        {Id:125 ,	Descrição: 'MICRO-ONDAS CONSUL 32L - INOX'	,Código:'420171'	,Valor:529},
        {Id:126 ,	Descrição: 'PURIFICADOR ESMALTEC REFRIGERADO ACQUA7 - BRANCO'	,Código:'2AEB28'	,Valor:539},
        {Id:127 ,	Descrição: 'PURIFICADOR ESMALTEC REFRIGERADO ACQUA7 - BRANCO'	,Código:'BC3291'	,Valor:539},
        {Id:128 ,	Descrição: 'PURIFICADOR ESMALTEC ACQUA7 - BRANCO'	,Código:'F4C3C8'	,Valor:479},
        {Id:129 ,	Descrição: 'PURIFICADOR ESMALTEC ACQUA7 - BRANCO'	,Código:'BAED88'	,Valor:479},
        {Id:130 ,	Descrição: 'REFRIGERADOR CONSUL 437L FROST FREE 2 PORTAS BEM ESTAR C/ INTERFACE TOUCH - BRANCO'	,Código:'f08488e8-6430-3ea4-2c0c-4643010280db'	,Valor:2069},
        {Id:131 ,	Descrição: 'REFRIGERADOR CONSUL 397L FROST FREE C/ TURBO FREEZER 2 PORTAS - INOX'	,Código:'b1fea53b-8c5b-bc8f-9377-f8c5b89b35e7'	,Valor:2629},
        {Id:132 ,	Descrição: 'REFRIGERADOR BRASTEMP 540L FROST FREE SIDE INVERSE C/ ICE MAKER 3 PORTAS - INOX'	,Código:'eeb32c74-4d7c-8d32-0056-24d7cf9fd9ef'	,Valor:4349},
        {Id:133 ,	Descrição: 'REFRIGERADOR BRASTEMP 375L 2 PORTAS - BRANCO'	,Código:'a7d88a22-dc51-01a9-83c9-9dc5170a6bf9'	,Valor:2109},
        {Id:134 ,	Descrição: 'REFRIGERADOR CONSUL 441L FROST FREE 2 PORTAS C/ PRATELEIRAS REMOVÍVEIS E FILTRO BEM ESTAR - BRANCO'	,Código:'965e1baa-fbfe-7ddb-8731-bfbfe08f2c60'	,Valor:2139},
        {Id:135 ,	Descrição: 'REFRIGERADOR CONSUL 397L FROST FREE C/ TURBO FREEZER 2 PORTAS - INOX'	,Código:'65022a33-1b19-1f81-4378-11b19722fbe2'	,Valor:2629},
        {Id:136 ,	Descrição: 'REFRIGERADOR CONSUL 437L FROST FREE 2 PORTAS C/ FILTRO BEM ESTAR - INOX'	,Código:'aaa6e885-ab83-c6a8-c5ff-8ab83e863343'	,Valor:2209},
        {Id:137 ,	Descrição: 'REFRIGERADOR CONSUL 397L FROST FREE C/ TURBO FREEZER 2 PORTAS - INOX'	,Código:'28e20937-4b13-1adc-9ccb-c4b13ae9d60a'	,Valor:2629},
        {Id:138 ,	Descrição: 'REFRIGERADOR CONSUL 397L FROST FREE 2 PORTAS - BRANCO'	,Código:'83a24028-fcc9-9c10-9825-0fcc9cde5442'	,Valor:2449},
        {Id:139 ,	Descrição: 'REFRIGERADOR BRASTEMP 375L 2 PORTAS - BRANCO'	,Código:'5369a873-cf54-ffd4-e79a-4cf54e1ca544'	,Valor:2109},
        {Id:140 ,	Descrição: 'REFRIGERADOR CONSUL 397L FROST FREE C/ TURBO FREEZER 2 PORTAS - INOX'	,Código:'3ead0ef6-4d4f-541f-20d4-f4d4fe5ed9ae'	,Valor:2629},
        {Id:141 ,	Descrição: 'REFRIGERADOR CONSUL 437L FROST FREE 2 PORTAS BEM ESTAR C/ INTERFACE TOUCH - BRANCO'	,Código:'29aca184-de12-6e30-e483-0de12962935b'	,Valor:2069},
        {Id:142 ,	Descrição: 'REFRIGERADOR CONSUL 397L FROST FREE C/ TURBO FREEZER 2 PORTAS - INOX'	,Código:'0f828e80-737c-d1e1-cfbf-1737c0f5fd0c'	,Valor:2629},
        {Id:143 ,	Descrição: 'REFRIGERADOR CONSUL 397L FROST FREE 2 PORTAS - BRANCO'	,Código:'373bf631-756e-520e-c946-e756e9f0f186'	,Valor:2449},
        {Id:144 ,	Descrição: 'REFRIGERADOR CONSUL 397L FROST FREE C/ TURBO FREEZER 2 PORTAS - INOX'	,Código:'45ceb725-78c1-cc58-3d7b-878c11507aa4'	,Valor:2629},
        {Id:145 ,	Descrição: 'REFRIGERADOR CONSUL 397L FROST FREE 2 PORTAS - BRANCO'	,Código:'7a5c626b-f606-ce48-51dd-8f6064945c45'	,Valor:2449},
        {Id:146 ,	Descrição: 'REFRIGERADOR CONSUL 397L FROST FREE 2 PORTAS - BRANCO'	,Código:'f0e7a094-7fc8-6e0d-a6a2-d7fc81557f92'	,Valor:2449},
        {Id:147 ,	Descrição: 'REFRIGERADOR BRASTEMP 573L FROST FREE INVERSE C/ SMART BAR 2 PORTAS - INOX'	,Código:'c1b5bf23-794b-0d00-3005-0794b2913ac0'	,Valor:3179},
        {Id:148 ,	Descrição: 'REFRIGERADOR CONSUL CYCLE DEFROST 334L 2 PORTAS C/ PRATELEIRAS REMOVÍVEIS E REGULAVEIS - BRANCO'	,Código:'c54e55c1-d57f-510f-74fe-fd57fae93a15'	,Valor:1349},
        {Id:149 ,	Descrição: 'REFRIGERADOR CONSUL CYCLE DEFROST 334L 2 PORTAS C/ PRATELEIRAS REMOVÍVEIS E REGULAVEIS - BRANCO'	,Código:'922f89a3-61eb-850f-8809-f61eb8a3fcb2'	,Valor:1349},
        {Id:150 ,	Descrição: 'REFRIGERADOR BRASTEMP 443L FROST FREE INVERSE C/ TURBO ICE 2 PORTAS - BRANCO'	,Código:'811498a4-ea69-52c5-c3e9-5ea69a917027'	,Valor:2489},
        {Id:151 ,	Descrição: 'REFRIGERADOR BRASTEMP 573L FROST FREE ATIVE INVERSE MAXI 2 PORTAS C/ SMART BAR - BRANCO'	,Código:'3330b882-110f-edcb-d8a9-b110f53eaae2'	,Valor:3039},
        {Id:152 ,	Descrição: 'REFRIGERADOR BRASTEMP 443L FROST FREE INVERSE 2 PORTAS TURBO ICE - INOX'	,Código:'e9b5cebc-08d7-327a-4397-a08d775972ce'	,Valor:2829},
        {Id:153 ,	Descrição: 'REFRIGERADOR CONSUL 386L FROST FREE 2 PORTAS C/ FUNCAO TURBO - BRANCO'	,Código:'20de7be5-ce0c-e8b5-3bcb-5ce0ca3e4c2c'	,Valor:1869},
        {Id:154 ,	Descrição: 'REFRIGERADOR BRASTEMP 540L FROST FREE SIDE INVERSE C/ ICE MAKER 3 PORTAS - INOX'	,Código:'62c19248-dfc1-0966-3f50-6dfc1cb76e4e'	,Valor:4349},
        {Id:155 ,	Descrição: 'REFRIGERADOR CONSUL 441L FROST FREE 2 PORTAS C/ FILTRO BEM ESTAR - INOX'	,Código:'91b8c641-1090-3096-4470-6109009b6281'	,Valor:2209},
        {Id:156 ,	Descrição: 'REFRIGERADOR BRASTEMP 443L FROST FREE INVERSE 2 PORTAS TURBO ICE - INOX'	,Código:'e0cd0a17-e3f8-1d4d-6717-de3f87d9333e'	,Valor:2829},
        {Id:157 ,	Descrição: 'REFRIGERADOR CONSUL 342L FROST FREE 1 PORTA C/ GAVETAO HORTIFRUTI - INOX'	,Código:'4bc0034d-e49d-c0b0-8731-0e49d71bd4c4'	,Valor:1319},
        {Id:158 ,	Descrição: 'REFRIGERADOR BRASTEMP 400L FROST FREE 2 PORTAS C/ FREEZE CONTROL - BRANCO'	,Código:'2dde709c-ca1a-3f2d-2136-dca1ab6b970e'	,Valor:2249},
        {Id:159 ,	Descrição: 'REFRIGERADOR CONSUL 397L FROST FREE 2 PORTAS - BRANCO'	,Código:'29aa5765-3d80-1b62-3caf-23d8056c47cc'	,Valor:2449},
        {Id:160 ,	Descrição: 'REFRIGERADOR BRASTEMP 573L FROST FREE INVERSE C/ SMART BAR 2 PORTAS - INOX'	,Código:'9857F536-17AB-703D-7706-D17ABF03591A'	,Valor:3179},
        {Id:161 ,	Descrição: 'REFRIGERADOR BRASTEMP 540L FROST FREE SIDE INVERSE C/ ICE MAKER 3 PORTAS - INOX'	,Código:'f090179b-0b9d-7d5a-2b90-a0b9d108461d'	,Valor:4349},
        {Id:162 ,	Descrição: 'REFRIGERADOR BRASTEMP 400L FROST FREE C/ FREEZE CONTROL 2 PORTAS - INOX'	,Código:'C9D31D42-33B8-20AB-1E68-B33B85937B83'	,Valor:2349},
        {Id:163 ,	Descrição: 'REFRIGERADOR BRASTEMP 500L 2 PORTAS - BRANCO'	,Código:'373583e6-0573-632e-68ab-e05735afd103'	,Valor:2579},
        {Id:164 ,	Descrição: 'REFRIGERADOR BRASTEMP 375L FROST FREE EVOX 2 PORTAS - INOX'	,Código:'49f86804-617e-4f5c-6f78-c617ef44baf7'	,Valor:2209},
        {Id:165 ,	Descrição: 'REFRIGERADOR CONSUL 386L FROST FREE EVOX 2 PORTAS - INOX'	,Código:'c333b93e-b29d-3ffe-97a0-eb29d372de68'	,Valor:1939},
        {Id:166 ,	Descrição: 'REFRIGERADOR BRASTEMP 400L FROST FREE 2 PORTAS C/ FREEZE CONTROL - BRANCO'	,Código:'139016ed-61dc-0eb5-af91-561dc516b0c7'	,Valor:2249},
        {Id:167 ,	Descrição: 'REFRIGERADOR CONSUL CYCLE DEFROST 334L 2 PORTAS C/ PRATELEIRAS REMOVÍVEIS E REGULAVEIS - BRANCO'	,Código:'e748c535-a0a1-9786-3427-6a0a1857a929'	,Valor:1349},
        {Id:168 ,	Descrição: 'REFRIGERADOR BRASTEMP 500L 2 PORTAS - BRANCO'	,Código:'f49e7cf9-d0db-35b0-68e2-0d0db9731e1a'	,Valor:2579},
        {Id:169 ,	Descrição: 'REFRIGERADOR CONSUL 342L FROST FREE FACILITE 1 PORTA - BRANCO'	,Código:'9d3f65a1-03ba-16a9-7f01-903ba3562967'	,Valor:1269},
        {Id:170 ,	Descrição: 'REFRIGERADOR CONSUL 397L FROST FREE 2 PORTAS - BRANCO'	,Código:'a74cdbe2-a32f-2112-636c-2a32f6d0fca4'	,Valor:2449},
        {Id:171 ,	Descrição: 'REFRIGERADOR CONSUL 397L FROST FREE C/ TURBO FREEZER 2 PORTAS - INOX'	,Código:'fa3ce14b-935d-4797-f639-7935db9171c2'	,Valor:2629},
        {Id:172 ,	Descrição: 'REFRIGERADOR CONSUL 397L FROST FREE 2 PORTAS - BRANCO'	,Código:'9d617c44-8099-e30e-2d91-e80993397ebe'	,Valor:2809},
        {Id:173 ,	Descrição: 'REFRIGERADOR CONSUL 397L FROST FREE 2 PORTAS - BRANCO'	,Código:'123a98d3-6a0c-2e09-88b1-96a0c622aecb'	,Valor:2809},
        {Id:174 ,	Descrição: 'REFRIGERADOR BRASTEMP 540L FROST FREE SIDE INVERSE C/ ICE MAKER 3 PORTAS - INOX'	,Código:'cbf2b021-f32c-1811-6d12-1f32c7d28e97'	,Valor:4979},
        {Id:175 ,	Descrição: 'REFRIGERADOR BRASTEMP 443L FROST FREE INVERSE 2 PORTAS TURBO ICE - INOX'	,Código:'69a6c491-d68e-b786-1a70-6d68e02fdcb4'	,Valor:3239},
        {Id:176 ,	Descrição: 'REFRIGERADOR BRASTEMP 573L FROST FREE ATIVE INVERSE MAXI 2 PORTAS C/ SMART BAR - BRANCO'	,Código:'A6F0C378-0BE4-FD28-A7DC-80BE465527B3'	,Valor:3479},
        {Id:177 ,	Descrição: 'REFRIGERADOR BRASTEMP 540L FROST FREE SIDE INVERSE C/ ICE MAKER 3 PORTAS - INOX'	,Código:'3A8EFA6E-0A03-B3B5-31AB-50A0364995D2'	,Valor:4979},
        {Id:178 ,	Descrição: 'REFRIGERADOR CONSUL 397L FROST FREE C/ TURBO FREEZER 2 PORTAS - INOX'	,Código:'dc8b6faa-77b0-6d65-a358-577b0c299be2'	,Valor:3009},
        {Id:179 ,	Descrição: 'REFRIGERADOR CONSUL 397L FROST FREE 2 PORTAS - BRANCO'	,Código:'8b15da96-b1ac-aab8-49a3-8b1acb52f944'	,Valor:2629},
        {Id:180 ,	Descrição: 'REFRIGERADOR CONSUL 397L FROST FREE 2 PORTAS - BRANCO'	,Código:'8408739F-9B4A-5A51-2944-19B4ABA842D0'	,Valor:2629},
        {Id:181 ,	Descrição: 'REFRIGERADOR CONSUL 397L FROST FREE C/ TURBO FREEZER 2 PORTAS - INOX'	,Código:'62dd4263-ebd0-bc99-c1fa-9ebd05ec91d7'	,Valor:2819},
        {Id:182 ,	Descrição: 'REFRIGERADOR CONSUL 397L FROST FREE 2 PORTAS - BRANCO'	,Código:'fd8cfc1d-e8aa-d668-9578-8e8aa6f6c1f6'	,Valor:2629},
        {Id:183 ,	Descrição: 'REFRIGERADOR CONSUL 397L FROST FREE 2 PORTAS - BRANCO'	,Código:'3142cfac-c6c4-5d77-9cf0-7c6c46358af6'	,Valor:2629},
        {Id:184 ,	Descrição: 'REFRIGERADOR CONSUL 397L FROST FREE 2 PORTAS - BRANCO'	,Código:'12a96394-1edf-236c-101d-c1edfa94f628'	,Valor:2629},
        {Id:185 ,	Descrição: 'REFRIGERADOR BRASTEMP 573L FROST FREE INVERSE C/ SMART BAR 2 PORTAS - INOX'	,Código:'28403B4B-968A-AED7-82E7-7968AE8CD83B'	,Valor:3409},
        {Id:186 ,	Descrição: 'REFRIGERADOR BRASTEMP 540L FROST FREE SIDE INVERSE C/ ICE MAKER 3 PORTAS - INOX'	,Código:'e769b4ab-9f80-d9f8-5e12-89f8025a622a'	,Valor:4669},
        {Id:187 ,	Descrição: 'PURIFICADOR ESMALTEC ACQUA7 - BRANCO'	,Código:'2B2FB4'	,Valor:479},
        {Id:188 ,	Descrição: 'PURIFICADOR ESMALTEC ACQUA7 - BRANCO'	,Código:'70C3B7'	,Valor:479},
        {Id:189 ,	Descrição: 'PURIFICADOR ESMALTEC ACQUA7 - BRANCO'	,Código:'7A4277'	,Valor:479},
        {Id:190 ,	Descrição: 'PURIFICADOR ESMALTEC ACQUA7 - BRANCO'	,Código:'E33640'	,Valor:479},
        {Id:191 ,	Descrição: 'FORNO BRASTEMP DE EMBUTIR ELETRICO 84L GRILL EASY CLEAN CONVECCAO TIMER - PRETO'	,Código:'8f7aaee9-193a-8050-e96d-0193a36b2702'	,Valor:1239},
        {Id:192 ,	Descrição: 'FOGAO ESMALTEC AGATA A GAS C/ ACENDIMENTO AUTOMATICO SUPER E CHAMA 5 BOCAS - BRANCO'	,Código:'BA192A'	,Valor:739},
        {Id:193 ,	Descrição: 'LAVADORA CONSUL 12KG CESTO INOX 16 PROGRAMAS DE LAVAGEM - BRANCO'	,Código:'5eee9fea-b1a3-6c72-ae51-2b1a33d9a970'	,Valor:1269},
        {Id:194 ,	Descrição: 'FORNO BRASTEMP DE EMBUTIR A GAS 78L GRILL ROTISSERIE CONVECCAO - **NAO REALIZAMOS CONVERSAO DE GAS** - PRETO'	,Código:'7e22f2a6-3e61-bc85-5c7a-53e61c1b8e8a'	,Valor:1169},
        {Id:195 ,	Descrição: 'FOGAO ESMALTEC AGATA A GAS C/ ACENDIMENTO AUTOMATICO SUPER E CHAMA 5 BOCAS - BRANCO'	,Código:'AAFEDC'	,Valor:739},
        {Id:196 ,	Descrição: 'FOGAO ESMALTEC AGATA A GAS C/ ACENDIMENTO AUTOMATICO SUPER E CHAMA 5 BOCAS - BRANCO'	,Código:'0.36475'	,Valor:739},
        {Id:197 ,	Descrição: 'LAVADORA CONSUL 12KG CESTO INOX 16 PROGRAMAS DE LAVAGEM - BRANCO'	,Código:'28bd6a5f-119a-a430-7f00-0119ace32851'	,Valor:1269},
        {Id:198 ,	Descrição: 'LAVADORA CONSUL 14KG - BRANCO'	,Código:'c2a2cc1e-e775-c259-dfe2-9e7751c35df8'	,Valor:1379},
        {Id:199 ,	Descrição: 'FOGAO ESMALTEC AGATA A GAS C/ ACENDIMENTO AUTOMATICO E SUPER CHAMA 5 BOCAS - INOX'	,Código:'A73033'	,Valor:779}
        ];


//função para adicionar iten na lista de compras e somar total da compra

function finalizar(){
    var ss = p.value
    var y = Number(ss)
    var n = soma(a.find(x => x.Id== y))
    cod.push(String(y))

    valores.push(n)
    res.innerHTML+= descri(a.find(x => x.Id==y)) +`<br>`+`<br>`

    //alert(valores)
    
    var sum = 0;

    for (var i = 0; i < valores.length; i++) {
        sum += valores[i];
    }     
    total.innerHTML = `<strong>Total da compra:</strong>R$ ${sum.toFixed(2).replace(".",",")}`
    p.value = ''
    p.focus()
    
}

 



//funçao pra buscar o valor do item va array
function soma(p){
    

    return   Number(p.Valor)//.toFixed(2).replace('.',',')

}

//função para buscar informações dos itens na array     
function descri(p){
    

    return  `<strong>Lâmina:</strong> ${p.Id}<br><br><strong>Descrição:</strong> ${p.Descrição}<br><br>
    <strong>Código:</strong> ${p.Código} <br><br> <strong>Valor sem descontos:</strong> R$ ${Number(p.Valor).toFixed(2).replace('.',',')}<br>
    __________________________________________________________`

}





function pix(){
    var sum = 0;

    for (var i = 0; i < valores.length; i++) {
        sum += valores[i];
    } 

    var ID2 = ''
    var valor = String(sum.toFixed(2))   
    var lenValor = valor.length
    ID2 = String(cod)
    var lenID2 = ID2.length
    
    var Infor = "SaldaoTbonus" 
    var lenInfor = Infor.length 
    var ID3= lenInfor + 04

    if(lenID2>9){
        lenID2 = lenID2
    }else{
        lenID2 = "0" + lenID2
    }
    var qr = document.getElementById('qr')
    var linPix = document.getElementById('pix')

    //Criação da linha
    var linha = "00020126520014BR.GOV.BCB.PIX01141080452900011102"+ lenInfor + Infor

    linha = linha.replace(',','.')
    linha = linha.replace(',','.')
    linha = linha.replace(',','/')
    linha = linha.replace(',','/')
    linha = linha.replace(',','/')
    linha = linha.replace(',','/')
    linha = linha.replace(',','/')
    linha = linha.replace(',','/')
    linha = linha.replace(',','/')
    linha = linha.replace(',','/')
    linha = linha.replace(',','/')
    linha = linha.replace(',','/')
 
    if (lenValor > 9){
        linha = linha + "52040000530398654" + lenValor + valor
    }
    else{linha = linha + "520400005303986540" + lenValor + valor}

    if (ID3 > 9){
        linha = linha + "5802BR5913Industria Fox6008CABREUVA62" + ID3 + "05" + lenInfor + Infor + 6304
    }
    else{linha = linha + "5802BR5913Industria Fox6008CABREUVA620" + ID3 + "05"  + lenInfor + Infor + 6304}
    linha = linha.replace(',','/')
    linha = linha.replace(',','/')
    linha = linha.replace(',','/')
    linha = linha.replace(',','/')
    linha = linha.replace(',','/')
    linha = linha.replace(',','/')
    linha = linha.replace(',','/')
    
   // alert(ID3)

    
    //Gedador de Qrcode

   var googleAPI ='https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl='
   resCRC = crc16(linha).toString(16).toUpperCase()
   var QRcode = googleAPI + linha
   document.getElementById('qr').src = QRcode + resCRC
   linPix.innerHTML = linha + resCRC
  
 
}




var crcTable = [0x0000, 0x1021, 0x2042, 0x3063, 0x4084, 0x50a5,
    0x60c6, 0x70e7, 0x8108, 0x9129, 0xa14a, 0xb16b,
    0xc18c, 0xd1ad, 0xe1ce, 0xf1ef, 0x1231, 0x0210,
    0x3273, 0x2252, 0x52b5, 0x4294, 0x72f7, 0x62d6,
    0x9339, 0x8318, 0xb37b, 0xa35a, 0xd3bd, 0xc39c,
    0xf3ff, 0xe3de, 0x2462, 0x3443, 0x0420, 0x1401,
    0x64e6, 0x74c7, 0x44a4, 0x5485, 0xa56a, 0xb54b,
    0x8528, 0x9509, 0xe5ee, 0xf5cf, 0xc5ac, 0xd58d,
    0x3653, 0x2672, 0x1611, 0x0630, 0x76d7, 0x66f6,
    0x5695, 0x46b4, 0xb75b, 0xa77a, 0x9719, 0x8738,
    0xf7df, 0xe7fe, 0xd79d, 0xc7bc, 0x48c4, 0x58e5,
    0x6886, 0x78a7, 0x0840, 0x1861, 0x2802, 0x3823,
    0xc9cc, 0xd9ed, 0xe98e, 0xf9af, 0x8948, 0x9969,
    0xa90a, 0xb92b, 0x5af5, 0x4ad4, 0x7ab7, 0x6a96,
    0x1a71, 0x0a50, 0x3a33, 0x2a12, 0xdbfd, 0xcbdc,
    0xfbbf, 0xeb9e, 0x9b79, 0x8b58, 0xbb3b, 0xab1a,
    0x6ca6, 0x7c87, 0x4ce4, 0x5cc5, 0x2c22, 0x3c03,
    0x0c60, 0x1c41, 0xedae, 0xfd8f, 0xcdec, 0xddcd,
    0xad2a, 0xbd0b, 0x8d68, 0x9d49, 0x7e97, 0x6eb6,
    0x5ed5, 0x4ef4, 0x3e13, 0x2e32, 0x1e51, 0x0e70,
    0xff9f, 0xefbe, 0xdfdd, 0xcffc, 0xbf1b, 0xaf3a,
    0x9f59, 0x8f78, 0x9188, 0x81a9, 0xb1ca, 0xa1eb,
    0xd10c, 0xc12d, 0xf14e, 0xe16f, 0x1080, 0x00a1,
    0x30c2, 0x20e3, 0x5004, 0x4025, 0x7046, 0x6067,
    0x83b9, 0x9398, 0xa3fb, 0xb3da, 0xc33d, 0xd31c,
    0xe37f, 0xf35e, 0x02b1, 0x1290, 0x22f3, 0x32d2,
    0x4235, 0x5214, 0x6277, 0x7256, 0xb5ea, 0xa5cb,
    0x95a8, 0x8589, 0xf56e, 0xe54f, 0xd52c, 0xc50d,
    0x34e2, 0x24c3, 0x14a0, 0x0481, 0x7466, 0x6447,
    0x5424, 0x4405, 0xa7db, 0xb7fa, 0x8799, 0x97b8,
    0xe75f, 0xf77e, 0xc71d, 0xd73c, 0x26d3, 0x36f2,
    0x0691, 0x16b0, 0x6657, 0x7676, 0x4615, 0x5634,
    0xd94c, 0xc96d, 0xf90e, 0xe92f, 0x99c8, 0x89e9,
    0xb98a, 0xa9ab, 0x5844, 0x4865, 0x7806, 0x6827,
    0x18c0, 0x08e1, 0x3882, 0x28a3, 0xcb7d, 0xdb5c,
    0xeb3f, 0xfb1e, 0x8bf9, 0x9bd8, 0xabbb, 0xbb9a,
    0x4a75, 0x5a54, 0x6a37, 0x7a16, 0x0af1, 0x1ad0,
    0x2ab3, 0x3a92, 0xfd2e, 0xed0f, 0xdd6c, 0xcd4d,
    0xbdaa, 0xad8b, 0x9de8, 0x8dc9, 0x7c26, 0x6c07,
    0x5c64, 0x4c45, 0x3ca2, 0x2c83, 0x1ce0, 0x0cc1,
    0xef1f, 0xff3e, 0xcf5d, 0xdf7c, 0xaf9b, 0xbfba,
    0x8fd9, 0x9ff8, 0x6e17, 0x7e36, 0x4e55, 0x5e74,
    0x2e93, 0x3eb2, 0x0ed1, 0x1ef0];
    
    
    function crc16(str) {
        var crc = 0xFFFF;
        var j, i;
    
    
        for (i = 0; i < str.length; i++) {
    
            c = str.charCodeAt(i);
            if (c > 255) {
                throw new RangeError();
            }
            j = (c ^ (crc >> 8)) & 0xFF;
            crc = crcTable[j] ^ (crc << 8);
        }
    
        return  ((crc ^ 0) & 0xFFFF);

        
    
    }
    
    function limpar(){
        location.reload()
    }

    function copiarTexto() {
        /*let textoCopiado = document.getElementById("pix");
        textoCopiado.select();
        textoCopiado.setSelectionRange(0, 99999)
        document.COMMENT_NODE("copy");*/
        alert("O texto é:")
    }
      
     