$(window).on("load", init);

function init() {

    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [
                'Toronto',
                'Ottawa',
                'Hamilton',
                'Mississauga',
                'Brampton',
            ],
            datasets: [{
                label: '',
                data: [
                    1062914,
                    632487,
                    760376,
                    951608,
                    987085,

                ],
                borderWidth: 1
            
            }]
        },
        options: {
            aspectRatio: 4,
            
        }
    });

    const ctx2 = document.getElementById('myChart2');
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: [
                'RBC',
                'TD',
            ],
            datasets: [{
                label: '',
                data: [
                    13.7,
                    13.3,   
                ],
                borderWidth: 1
            }]
        },
        options: {
            aspectRatio: 1,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const ctx3 = document.getElementById('myChart3');
    new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: [
                'RBC',
                'TD',
            ],
            datasets: [{
                label: '',
                data: [
                    2.9,
                    0.8,    
                ],
                borderWidth: 1
            }]
        },
        options: {
            aspectRatio: 1,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

     const ctx5 = document.getElementById('myChart5');
    new Chart(ctx5, {
        type: 'line',
        data: {
            labels: [
                'Jan 2021',
                'May 2021',
                'Sep 2021',
                'Jan 2022',
                'May 2022',
                'Sep 2022',
                'Jan 2023',
                'May 2023',
                'Sep 2023',
            ],
            datasets: [
                {
                    label: 'Ontario',
                    data: [
                        795322,
                        865074,
                        886850,
                        998544,
                        938279,
                        835053,
                        798835,
                        928897,
                        851756,
                    ],
                    borderWidth: 2
                },
                {
                    label: 'GTA',
                    data: [
                        967885,
                        1108458,
                        1136280,
                        1242793,
                        1212806,
                        1086762,
                        1038668,
                        1196101,
                        1119428,
                    ],
                    borderWidth: 2
                },   
                {
                    label: 'Toronto',
                    data: [
                        866331,
                        1116736,
                        1090196,
                        1073111,
                        1233748,
                        1061876,
                        987842,
                        1197021,
                        1119452,
                    ],
                    borderWidth: 2
                }, 
                {
                    label: 'Ottawa',
                    data: [
                        587892,
                        669969,
                        639631,
                        676607,
                        719936,
                        644161,
                        612661,
                        673697,
                        675412,
                    ],
                    borderWidth: 2
                },
                {
                    label: 'Hamilton',
                    data: [
                        722628,
                        792746,
                        796611,
                        976423,
                        901535,
                        782611,
                        750529,
                        814082,
                        776819,
                    ],
                    borderWidth: 2
                },
                {
                    label: 'Mississauga',
                    data: [
                        890020,
                        1064630,
                        1037972,
                        1153635,
                        1148784,
                        1032889,
                        920587,
                        1140328,
                        1021324,
                    ],
                    borderWidth: 2
                },
                {
                    label: 'Brampton',
                    data: [
                        971462,
                        997693,
                        1072988,
                        1367444,
                        1146449,
                        1007324,
                        1002018,
                        1111067,
                        1041829,
                    ],
                    borderWidth: 2
                },
                {
                    label: 'London',
                    data: [
                        607431,
                        636053,
                        641822,
                        793222,
                        762397,
                        635256,
                        585252,
                        682561,
                        633848,
                    ],
                    borderWidth: 2
                },               
            ]
        },
        options: {
            aspectRatio: 2,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    
}
