const portfolio =
    {
        bindSkills: function () {
            let html = ``;
            Object.values(portfolio.badges).forEach(function (value, index, array) {
                if (index < 10) {
                    html+= value;
                }
            });

            $('#skills .badges').html(html);
        },
        bindItems: function () {
            let html = ``;
            portfolio.items.forEach(function (value, index, array) {
                html += `<div class="project_wrap">`;
                html += ` <div class="period">`;
                html += `<span>${value.company}</span>`;
                html += `<span>${value.period}</span>`;
                html += `</div>`;
                html += portfolio.bindContents(value.contents ?? [], index)
                html += `</div>`;
            });

            $('#projects .project_group').html(html);
        },
        bindContents: function (contents, itemIndex) {
            let html = ``;
            if (contents.length > 0) {
                html += `<div class="contents">`;
                contents.forEach(function (value, index, array) {
                    html += `<div class="item">`;
                    html += `<p class="title">${value.title}</p>`;
                    html += portfolio.bindBadges(value.skills ?? []);
                    html += `<p class="description">${value.description}</p>`;
                    html += portfolio.bindImages(value.images ?? [], itemIndex, index);
                    html += `</div>`;
                });
                html += `</div>`;
            }

            return html;
        },
        bindImages: function (images, itemIndex, contentsIndex) {
            let collapseId = `collapseImage${itemIndex}${contentsIndex}`;
            let html = ``;
            if (images.length > 0) {
                html += `<div class="images mt-2">`;
                html += `<a class="btn_more" href="javascript:void(0);" data-toggle="collapse"
                   data-target="#${collapseId}">이미지 더 보기 <i class="fa-solid fa-angle-down"></i></a>`;
                html += ` <div id="${collapseId}" class="collapse">`;
                html += `<div class="card">`;
                html += `<div class="card-body">`;
                images.forEach(function (value, index, array) {
                    html += `<div class="card">`;
                    html += `<img class="card-img-top" src="${value.image}" />`;
                    if (value.title !== '' || value.description !== '') {
                        html += `<div class="card-body">`;
                        if (value.title !== '') {
                            html += `<h5 class="card-title">${value.title}</h5>`;
                        }
                        if (value.description !== '') {
                            html += `<p class="card-text">${value.description}</p>`;
                        }
                        html += `</div>`;
                    }
                    html += `</div>`;
                });
                html += `</div>`;
                html += `</div>`;
                html += `</div>`;
                html += `</div>`;
            }
            
            return html;
        },
        bindBadges: function (skills) {
            let html = ``;
            if (skills.length > 0) {
                html += `<div class="badges">`;
                skills.forEach(function (value, index, array) {
                    let skill = value.replaceAll(' ', '').toLowerCase();
                    let skillHtml = portfolio.badges[skill] ?? ``;
                    if (skillHtml !== '') {
                        html += skillHtml.replaceAll('for-the-badge', 'flat-squre');
                    }
                });
                html += `</div>`;
            }
            return html;
        },
        badges: {
            php: '<img class="skill" src="https://img.shields.io/badge/php-777BB4?style=for-the-badge&logo=php&logoColor=white"/>',
            laravel: '<img class="skill" src="https://img.shields.io/badge/laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white"/>',
            python: '<img class="skill" src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"/>',
            nuxt: '<img class="skill" src="https://img.shields.io/badge/nuxt.js-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white"/>',
            jquery: '<img class="skill" src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"/>',
            mariadb: '<img class="skill" src="https://img.shields.io/badge/mariadb-003545?style=for-the-badge&logo=mariadb&logoColor=white"/>',
            mysql: '<img class="skill" src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"/>',
            github: '<img class="skill" src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"/>',
            html: '<img class="skill" src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>',
            css: '<img class="skill" src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>',
            sqlite: '<img class="skill" src="https://img.shields.io/badge/sqlite-003B57?style=for-the-badge&logo=sqlite&logoColor=white"/>',
            springboot: '<img class="skill" src="https://img.shields.io/badge/spring%20boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white"/>',
            react: '<img class="skill" src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>',
            jira: '<img class="skill" src="https://img.shields.io/badge/jira-0052CC?style=for-the-badge&logo=jira&logoColor=white"/>',
            github: '<img class="skill" src="https://img.shields.io/badge/github%20api-181717?style=for-the-badge&logo=github&logoColor=white"/>',
        },
        items: [
            {
                company: "케빈랩",
                period: "2022.11~",
                contents: [
                    {
                        title: "건물 에너지 관리 시스템(BEMS) 웹 개발",
                        skills: [
                            'Laravel',
                            'Nuxt',
                            'PHP',
                            'jquery',
                            'Maria DB',
                        ],
                        description: "ZEB(제로 에너지 빌딩) 관리<br>PHP Laravel 마이그레이션 작업",
                        images : [
                            {
                                title : '메인',
                                description : '',
                                image : './assets/images/portfolio/bems_web/home.png',
                            },
                            {
                                title : '대시보드',
                                description : '이용자가 위젯을 선택하여 배치합니다.',
                                image : './assets/images/portfolio/bems_web/dashboard.png',
                            },
                            {
                                title : '부하감시',
                                description : '시간별 에너지 부하를 감시합니다.',
                                image : './assets/images/portfolio/bems_web/info.png',
                            },
                            {
                                title : '제어',
                                description : '에어컨 중앙제어',
                                image : './assets/images/portfolio/bems_web/control.png',
                            },
                        ],
                    },
                    {
                        title: "건물 에너지 관리 시스템(BEMS) 관리자 사이트 개발",
                        skills: [
                            'Laravel',
                            'PHP',
                            'Jquery',
                            'Maria DB',
                        ],
                        description: "건물 에너지 관리 시스템 건물 등록 및 계측기 관리",
                        images : [
                            {
                                title : '메인',
                                description : '',
                                image : './assets/images/portfolio/bems_adm/home.png',
                            },
                            {
                                title : '기본 정보',
                                description : '건물 기본 정보 관리',
                                image : './assets/images/portfolio/bems_adm/info.png',
                            },
                            {
                                title : '계측 정보',
                                description : '계측기 정보 관리',
                                image : './assets/images/portfolio/bems_adm/sensor.png',
                            },
                            {
                                title : '수식 정보',
                                description : '수식을 이용한 데이터 관리',
                                image : './assets/images/portfolio/bems_adm/formula.png',
                            },
                            {
                                title : 'EHP 제어',
                                description : '층별 도면 및 에어컨 설정',
                                image : './assets/images/portfolio/bems_adm/ehp.png',
                            },
                        ],
                    },
                    {
                        title: "가정 에너지 관리 시스템(HEMS) 웹 개발",
                        skills: [
                            'Laravel',
                            'PHP',
                            'Jquery',
                            'Maria DB',
                        ],
                        description: "단지별 에너지 관리<br>PHP Laravel 마이그레이션 작업",
                        images : [
                            {
                                title : '메인',
                                description : '',
                                image : './assets/images/portfolio/hems_web/dashboard.png',
                            },
                            {
                                title : '통합 관제',
                                description : '지역별 단지별 현황 조회',
                                image : './assets/images/portfolio/hems_web/control.png',
                            },
                            {
                                title : '기간별 사용량',
                                description : '기간별 에너지 사용량 모니터링',
                                image : './assets/images/portfolio/hems_web/remote.png',
                            },
                            {
                                title : '장애 관리',
                                description : '계측기 장애 모니터링',
                                image : './assets/images/portfolio/hems_web/alarm.png',
                            },
                        ],
                    },
                    {
                        title: "가정 에너지 관리 시스템(HEMS) 앱 개발",
                        skills: [
                            'Laravel',
                            'PHP',
                            'Nuxt',
                            'Maria DB',
                        ],
                        description: "세대별 에너지 관리",
                        images : [
                            {
                                title : '메인',
                                description : '',
                                image : './assets/images/portfolio/hems_app/home_2.png',
                            },
                            {
                                title : '에너지 사용 현황',
                                description : '',
                                image : './assets/images/portfolio/hems_app/energy_1.png',
                            },
                            {
                                title : '미션',
                                description : '',
                                image : './assets/images/portfolio/hems_app/mission.png',
                            },
                            {
                                title : '혜택',
                                description : '',
                                image : './assets/images/portfolio/hems_app/store.png',
                            },
                        ],
                    },
                    {
                        title: "가정 에너지 관리 시스템(HEMS) 관리자 사이트 개발",
                        skills: [
                            'Laravel',
                            'PHP',
                            'Jquery',
                            'Maria DB',
                        ],
                        description: "HEMS 운영, 형상관리 사이트 제작",
                        images : [
                            {
                                title : '메인',
                                description : '',
                                image : './assets/images/portfolio/hems_adm/home.png',
                            },
                            {
                                title : '단지 정보',
                                description : 'HEMS 서비스에 필요한 정보를 입력',
                                image : './assets/images/portfolio/hems_adm/info.png',
                            },
                            {
                                title : '공지사항',
                                description : '단지별 공지사항 관리',
                                image : './assets/images/portfolio/hems_adm/notice.png',
                            },
                            {
                                title : '팝업',
                                description : '단지별 팝업 관리',
                                image : './assets/images/portfolio/hems_adm/popup.png',
                            },
                        ],
                    },
                ],
            },
            {
                company: "인터엠",
                period: "2014.01~2016.07,<br>2016.12~2022.06",
                contents: [
                    {
                        title: "네트워크 오디오 전송 시스템",
                        skills: [
                            'PHP',
                            'jquery',
                            'sqlite'
                        ],
                        description: "네트워크 오디오 전송 시스템",
                        images : [
                            {
                                title : '시스템 구성도',
                                description : '',
                                image : './assets/images/portfolio/interm/system.png',
                            },
                            {
                                title : '장치 등록',
                                description : '로컬에 연결된 장치를 탐색하여 등록합니다.',
                                image : './assets/images/portfolio/interm/device.png',
                            },
                            {
                                title : '오디오 설정',
                                description : '오디오 전송 방식을 설정합니다.',
                                image : './assets/images/portfolio/interm/audio.png',
                            },
                            {
                                title : '소스 등록',
                                description : '오디오 소스(server)를 등록합니다.',
                                image : './assets/images/portfolio/interm/source.png',
                            },
                            {
                                title : '존 등록',
                                description : '존(client)을 등록합니다.',
                                image : './assets/images/portfolio/interm/zone.png',
                            },
                            {
                                title : '운영',
                                description : '장치에 연결한 소스와 존을 이용해 방송을 운영합니다.',
                                image : './assets/images/portfolio/interm/operate.png',
                            },
                            {
                                title : '조감도',
                                description : '운영중인 방송의 위치를 조감도로 확인/운영합니다.',
                                image : './assets/images/portfolio/interm/birdview.png',
                            },
                            {
                                title : '스케줄',
                                description : '방송 스케줄을 등록합니다.',
                                image : './assets/images/portfolio/interm/schedule.png',
                            },
                            {
                                title : '캘린더',
                                description : '등록한 스케줄을 캘린더로 확인합니다.',
                                image : './assets/images/portfolio/interm/calendar.png',
                            },
                            {
                                title : '장애이력',
                                description : '장애이력을 등록하여 관리합니다.',
                                image : './assets/images/portfolio/interm/failure.png',
                            },
                            {
                                title : '로그',
                                description : '실시간 로그를 모니터링 합니다.',
                                image : './assets/images/portfolio/interm/log.png',
                            },
                        ],
                    },
                ],
            }
        ],
        githubRepos: [
            {
                name: "하이웍스 일정(바이브 코딩)",
                description: "하이웍스 일정을 내부 API를 이용해 크롤링하여 윈도우 프로그램으로 제작",
                skills: ["Python", "selenium"],
                url: "https://github.com/wonyongcheol/hiworks-schedule"
            },
            {
                name: "Jira, Github 업무일지(바이브 코딩)",
                description: "Jira, Github 업무일지 자동화 프로그램",
                skills: ["springboot", "jira", "github", "react", "GROQ API(AI)"],
                url: "https://github.com/wonyongcheol/jira-github-taskreport"
            }
        ],
        bindGithubRepos: function () {
            let html = `<h2>GitHub 레포지토리</h2><div class="repo-list">`;
            this.githubRepos.forEach(function(repo) {
                html += `<div class="repo-item">`;
                html += `<h3>${repo.name}</h3>`;
                html += `<a class="repo-link" href="${repo.url}" target="_blank">깃허브 바로가기</a>`;
                html += `<p class="repo-desc">${repo.description}</p>`;
                // 뱃지와 텍스트 분리
                let badgeSkills = [];
                let textSkills = [];
                repo.skills.forEach(function(skill) {
                    let key = skill.replaceAll(' ', '').toLowerCase();
                    if (portfolio.badges[key]) {
                        badgeSkills.push(portfolio.badges[key].replaceAll('for-the-badge', 'flat-squre'));
                    } else if (skill && skill.trim() !== "") {
                        textSkills.push(skill);
                    }
                });
                if (badgeSkills.length > 0) {
                    html += `<div class="badges">${badgeSkills.join('')}</div>`;
                }
                if (textSkills.length > 0) {
                    html += `<div class="skills-text">${textSkills.join(', ')}</div>`;
                }
                html += `</div>`;
            });
            html += `</div>`;
            $('#github-repo').html(html);
        },
    }