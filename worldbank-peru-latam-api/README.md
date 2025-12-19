# 🌎 World Bank API - Análisis Económico: Perú vs Latinoamérica (2015-2023)

[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://www.python.org/)
[![Jupyter](https://img.shields.io/badge/Jupyter-Notebook-orange.svg)](https://jupyter.org/)
[![World Bank API](https://img.shields.io/badge/API-World%20Bank-green.svg)](https://data.worldbank.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 📋 Descripción

Proyecto académico que utiliza la **API del Banco Mundial (World Bank Open Data)** para extraer, analizar y visualizar indicadores económicos y sociales de **Perú** en comparación con otros países de Latinoamérica durante el período 2015-2023, con énfasis especial en el impacto del **COVID-19**.

## 🎯 Objetivo

Analizar la posición de **Perú** en comparación con 6 países latinoamericanos mediante indicadores clave de desarrollo, evaluando:
- Situación Pre-COVID (2015-2019)
- Impacto de la pandemia (2020-2021)
- Recuperación Post-COVID (2022-2023)

## 🌐 API Utilizada

| Característica | Detalle |
|----------------|---------|
| **Nombre** | World Bank Open Data API |
| **URL Base** | https://api.worldbank.org/v2/ |
| **Formato** | JSON |
| **Autenticación** | No requiere |
| **Documentación** | [World Bank API Docs](https://datahelpdesk.worldbank.org/knowledgebase/articles/889392) |

## 🗂️ Estructura del Proyecto

```
📁 worldbank-peru-presentacion-api/
│
├── 📄 README.md                 # Este archivo
├── 📄 requirements.txt          # Dependencias Python
├── 📄 .gitignore               # Archivos ignorados
│
├── 📁 notebook/
│   └── 📄 WorldBank_Peru_Latam_v3.ipynb   # Código principal
│
├── 📁 datos/
│   └── 📄 datos_worldbank_peru_latam.csv  # Dataset extraído
│
├── 📁 graficos/
│   ├── 📄 grafico_pbi_peru.png
│   ├── 📄 grafico_boxplot_pbi.png
│   ├── 📄 grafico_correlacion.png
│   ├── 📄 grafico_mejora_pbi.png
│   ├── 📄 grafico_ranking_peru.png
│   ├── 📄 grafico_proyeccion_peru.png
│   ├── 📄 grafico_tendencias.png
│   ├── 📄 grafico_pre_post_covid.png
│   ├── 📄 grafico_impacto_covid.png
│   └── 📄 grafico_crecimiento_peru.png
│
└── 📁 presentacion/
    ├── 📄 index.html            # Presentación web
    ├── 📁 styles/
    │   └── 📄 main.css
    ├── 📁 scripts/
    │   └── 📄 main.js
    └── 📁 user_input_files/
        └── (gráficos para la presentación)
```

## 📊 Indicadores Analizados

| # | Indicador | Código API |
|---|-----------|------------|
| 1 | PBI per cápita (USD) | NY.GDP.PCAP.CD |
| 2 | Crecimiento del PBI (%) | NY.GDP.MKTP.KD.ZG |
| 3 | Inflación (%) | FP.CPI.TOTL.ZG |
| 4 | Índice GINI | SI.POV.GINI |
| 5 | Gasto en educación (% del PBI) | SE.XPD.TOTL.GD.ZS |
| 6 | Esperanza de vida (años) | SP.DYN.LE00.IN |
| 7 | Gasto en salud (% del PBI) | SH.XPD.CHEX.GD.ZS |
| 8 | Mortalidad infantil (por 1000) | SP.DYN.IMRT.IN |
| 9 | Agricultura (% del PBI) | NV.AGR.TOTL.ZS |
| 10 | Empleo agrícola (%) | SL.AGR.EMPL.ZS |
| 11 | Usuarios de internet (%) | IT.NET.USER.ZS |
| 12 | Acceso a electricidad (%) | EG.ELC.ACCS.ZS |

## 🌍 Países Analizados

| País | Código | Rol |
|------|--------|-----|
| 🇵🇪 **Perú** | PE | País principal |
| 🇨🇱 Chile | CL | Comparación |
| 🇨🇴 Colombia | CO | Comparación |
| 🇪🇨 Ecuador | EC | Comparación |
| 🇧🇴 Bolivia | BO | Comparación |
| 🇧🇷 Brasil | BR | Comparación |
| 🇦🇷 Argentina | AR | Comparación |

## 🚀 Instalación y Uso

### Requisitos previos
- Python 3.8 o superior
- Jupyter Notebook

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/JavierAnthonyUS/worldbank-peru-presentacion-api.git

# Entrar al directorio
cd worldbank-peru-presentacion-api

# Instalar dependencias
pip install -r requirements.txt

# Abrir el notebook
jupyter notebook notebook/WorldBank_Peru_Latam_v3.ipynb
```

## 📈 Principales Hallazgos

### Posición de Perú en 2023:
- 🥇 **1° en equidad** - GINI: 40.7 (menor desigualdad)
- 🥈 **2° en esperanza de vida** - 77.74 años
- 🥉 **3° en crecimiento acumulado** - +26.6% (2015-2023)
- 📊 **4° en PBI per cápita** - $7,887 USD

### Impacto COVID-19:
- Perú tuvo la **mayor caída** del PBI en 2020: -13.2%
- También tuvo el **mayor rebote** en 2021: +24.3%

## 🛠️ Tecnologías Utilizadas

- **Python 3.8+**
- **Pandas** - Manipulación de datos
- **NumPy** - Cálculos numéricos
- **Matplotlib & Seaborn** - Visualizaciones
- **Requests** - Conexión con API
- **SciPy** - Análisis estadístico
- **HTML/CSS/JS** - Presentación web

## 👥 Equipo de Trabajo

| # | Integrante |
|---|------------|
| 1 | Javier Anthony Uraco Silva |
| 2 | Fiorella Fuentes Bueno |
| 3 | Kesdine Yasmin Palma Cruz |
| 4 | Brayan Augusto Flores Villa |
| 5 | Sebastian Samuel Fernandez Andrade |
| 6 | Estiven Aldair Mata Sotelo |
| 7 | Arlette Alashka Carmen Tullume |

## 🎓 Información Académica

- **Curso:** Lenguaje de Programación 2 (2025-2)
- **Universidad:** Universidad Nacional Agraria La Molina (UNALM)
- **Departamento:** Estadística Informática
- **Fecha:** Diciembre 2025

## 📚 Referencias

- [World Bank Open Data](https://data.worldbank.org/)
- [World Bank API Documentation](https://datahelpdesk.worldbank.org/knowledgebase/articles/889392)
- [World Bank Indicators](https://data.worldbank.org/indicator)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
