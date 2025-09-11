
        // Aguardar carregamento da página
        window.addEventListener('load', function() {
            
            // 1. Gráfico Segurança em Proteção de Dados (CNPD)
            const ctx1 = document.getElementById('chart1').getContext('2d');
            new Chart(ctx1, {
                type: 'bar',
                data: {
                    labels: ['2021', '2022', '2023', '2024'],
                    datasets: [{
                        label: 'Confidencialidade (%)',
                        data: [62, 60, 66, 68],
                        backgroundColor: '#3498db'
                        }, {
                        label: 'Disponibilidade (%)',
                        data: [22, 20, 18, 15],
                        backgroundColor: '#e74c3c'
                        }, {
                        label: 'Integridade (%)',
                        data: [16, 20, 16, 17],
                        backgroundColor: '#f39c12'
                        }]
                    }
                    ,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            title: {
                                display: true,
                                text: 'Percentagem (%)'
                            }
                        }
                    }
                }
            });

            // 2. Gráficos Origem dos Incidentes (4 anos)
            const commonColors = ['#3498db', '#e74c3c', '#f39c12', '#2ecc71', '#9b59b6', '#1abc9c'];
            
            // 2021
            const ctx2021 = document.getElementById('incidents2021').getContext('2d');
            new Chart(ctx2021, {
                type: 'doughnut',
                data: {
                    labels: ['Falha humana', 'Ransomware', 'Ações fraudulentas', 'Phishing', 'Outros'],
                    datasets: [{
                        data: [24, 22, 13, 12, 29],
                        backgroundColor: commonColors
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: { font: { size: 10 } }
                        }
                    }
                }
            });

            // 2022
            const ctx2022 = document.getElementById('incidents2022').getContext('2d');
            new Chart(ctx2022, {
                type: 'doughnut',
                data: {
                    labels: ['Ransomware', 'Falha humana', 'Falhas aplicacionais', 'Phishing', 'Outros'],
                    datasets: [{
                        data: [30, 22, 13, 12, 23],
                        backgroundColor: ['#e74c3c', '#3498db', '#f39c12', '#2ecc71', '#9b59b6']
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: { font: { size: 10 } }
                        }
                    }
                }
            });

            // 2023
            const ctx2023 = document.getElementById('incidents2023').getContext('2d');
            new Chart(ctx2023, {
                type: 'doughnut',
                data: {
                    labels: ['Ransomware', 'Falha humana', 'Phishing', 'Vulnerabilidades', 'Outros'],
                    datasets: [{
                        data: [26, 25, 18, 16, 15],
                        backgroundColor: ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6']
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: { font: { size: 10 } }
                        }
                    }
                }
            });

            // 2024
            const ctx2024 = document.getElementById('incidents2024').getContext('2d');
            new Chart(ctx2024, {
                type: 'doughnut',
                data: {
                    labels: ['Falha humana', 'Ransomware', 'Phishing', 'Vulnerabilidades', 'Outros'],
                    datasets: [{
                        data: [28, 22, 20, 18, 12],
                        backgroundColor: ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6']
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: { font: { size: 10 } }
                        }
                    }
                }
            });

            // 3. Evolução Crimes Informáticos (DGPJ)
            const ctx3 = document.getElementById('crimesEvolution').getContext('2d');
            new Chart(ctx3, {
                type: 'line',
                data: {
                    labels: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
                    datasets: [{
                        label: 'Crimes relacionados com informática',
                        data: [2334, 2905, 3444, 4328, 4169, 5339, 8875, 9692, 9624, 11163, 18158, 22076, 23409, 23651, 25700, 27200],
                        borderColor: '#3498db',
                        backgroundColor: 'rgba(52, 152, 219, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.3
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Número de crimes'
                            }
                        }
                    }
                }
            });

            // 4. Crimes Policiais (DGPJ)
            const ctx4 = document.getElementById('policeCrimes').getContext('2d');
            new Chart(ctx4, {
                type: 'bar',
                data: {
                    labels: ['2021', '2022', '2023', '2024'],
                    datasets: [{
                        label: 'Burla informática/comunicações',
                        data: [21374, 20901, 20159, 19500],
                        backgroundColor: '#3498db'
                    }, {
                        label: 'Acesso/interceção ilegítimos',
                        data: [632, 1012, 1350, 1600],
                        backgroundColor: '#e74c3c'
                    }, {
                        label: 'Falsidade informática',
                        data: [539, 807, 980, 1200],
                        backgroundColor: '#f39c12'
                    }, {
                        label: 'Sabotagem informática',
                        data: [227, 299, 380, 450],
                        backgroundColor: '#2ecc71'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Número de casos'
                            }
                        }
                    }
                }
            });

            // 5. Crimes Alto Impacto (PJ)
            const ctx5 = document.getElementById('impactCrimes').getContext('2d');
            new Chart(ctx5, {
                type: 'line',
                data: {
                    labels: ['2021', '2022', '2023', '2024'],
                    datasets: [{
                        label: 'Branqueamento',
                        data: [601, 676, 720, 780],
                        borderColor: '#3498db',
                        backgroundColor: 'rgba(52, 152, 219, 0.1)',
                        fill: false
                    }, {
                        label: 'Sextortion',
                        data: [126, 240, 310, 380],
                        borderColor: '#e74c3c',
                        backgroundColor: 'rgba(231, 76, 60, 0.1)',
                        fill: false
                    }, {
                        label: 'Ransomware',
                        data: [126, 162, 180, 170],
                        borderColor: '#f39c12',
                        backgroundColor: 'rgba(243, 156, 18, 0.1)',
                        fill: false
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Número de casos'
                            }
                        }
                    }
                }
            });

            // 6. Criminalidade PGR
            const ctx6 = document.getElementById('pgrCrimes').getContext('2d');
            new Chart(ctx6, {
                type: 'radar',
                data: {
                    labels: ['Phishing', 'Burlas online', 'CEO Fraud', 'Criptomoedas', 'Stalking', 'Ataques DDoS'],
                    datasets: [{
                        label: '2021',
                        data: [85, 70, 60, 20, 40, 30],
                        borderColor: '#3498db',
                        backgroundColor: 'rgba(52, 152, 219, 0.2)'
                    }, {
                        label: '2022',
                        data: [88, 75, 65, 35, 45, 35],
                        borderColor: '#e74c3c',
                        backgroundColor: 'rgba(231, 76, 60, 0.2)'
                    }, {
                        label: '2023',
                        data: [90, 80, 70, 50, 40, 40],
                        borderColor: '#f39c12',
                        backgroundColor: 'rgba(243, 156, 18, 0.2)'
                    }, {
                        label: '2024',
                        data: [92, 85, 75, 65, 38, 45],
                        borderColor: '#2ecc71',
                        backgroundColor: 'rgba(46, 204, 113, 0.2)'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        r: {
                            beginAtZero: true,
                            max: 100
                        }
                    }
                }
            });

            // 7. Perceção de Ameaças (CNCS) - COM PREVISÕES
            const ctx7 = document.getElementById('threatPerception').getContext('2d');
            new Chart(ctx7, {
                type: 'line',
                data: {
                    labels: ['2021', '2022', '2023 (Previsão)', '2023 (Real)', '2024'],
                    datasets: [{
                        label: 'Cibercriminosos',
                        data: [93, 89, 92, 89, 91],
                        borderColor: '#3498db',
                        backgroundColor: 'rgba(52, 152, 219, 0.1)'
                    }, {
                        label: 'Atores estatais',
                        data: [43, 62, 59, 62, 64],
                        borderColor: '#e74c3c',
                        backgroundColor: 'rgba(231, 76, 60, 0.1)'
                    }, {
                        label: 'Hacktivistas',
                        data: [57, 51, 54, 51, 55],
                        borderColor: '#f39c12',
                        backgroundColor: 'rgba(243, 156, 18, 0.1)'
                    }, {
                        label: 'Ciberterroristas',
                        data: [32, 57, 54, 48, 50],
                        borderColor: '#2ecc71',
                        backgroundColor: 'rgba(46, 204, 113, 0.1)'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            title: {
                                display: true,
                                text: 'Percentagem de preocupação (%)'
                            }
                        }
                    }
                }
            });

            // 8. Tecnologias Emergentes (CNCS)
            const ctx8 = document.getElementById('emergingTech').getContext('2d');
            new Chart(ctx8, {
                type: 'line',
                data: {
                    labels: ['2021', '2022', '2023', '2024'],
                    datasets: [{
                        label: 'Computação em Nuvem',
                        data: [85, 83, 76, 78],
                        borderColor: '#3498db'
                    }, {
                        label: 'Inteligência Artificial',
                        data: [35, 53, 75, 85],
                        borderColor: '#e74c3c'
                    }, {
                        label: 'Internet das Coisas',
                        data: [74, 71, 69, 72],
                        borderColor: '#f39c12'
                    }, {
                        label: 'Computação Quântica',
                        data: [13, 14, 29, 35],
                        borderColor: '#2ecc71'
                    }, {
                        label: '5G',
                        data: [22, 19, 25, 20],
                        borderColor: '#9b59b6'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            title: {
                                display: true,
                                text: 'Percentagem de preocupação (%)'
                            }
                        }
                    }
                }
            });
        });
   