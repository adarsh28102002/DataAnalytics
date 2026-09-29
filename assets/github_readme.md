# 🍔 Food Delivery Analytics Dashboard — Power BI

## 📊 Project Overview

**Food Delivery Analytics Dashboard** is an end-to-end business intelligence project developed using **Microsoft Power BI** to analyze food delivery and restaurant transaction data.

The dashboard transforms approximately **200,000 order records** from online and offline restaurant transactions into interactive business insights for understanding **sales performance, customer behavior, restaurant performance, delivery operations, and time-based trends**.

The project follows a complete analytics workflow:

**Raw Data → Power Query → Data Modeling → DAX → Interactive Dashboard → Business Insights**

---

## 🎯 Project Objective

The main objective of this project is to build an interactive analytics solution that helps restaurant owners and managers understand:

* Revenue and order performance
* Customer purchasing behavior
* New vs. repeat customers
* Restaurant performance
* Cuisine performance
* Delivery efficiency
* Cancellation and late-delivery trends
* City-wise business performance
* Monthly and year-to-date growth

---

## 📁 Dataset

* **Source:** Kaggle
* **Approximate Records:** 200,000 orders
* **Transaction Type:** Online and Offline restaurant transactions
* **Main Data Areas:**

  * Customers
  * Orders
  * Restaurants
  * Dates
  * Customer registration information
  * Restaurant ratings
  * Cuisine information
  * Delivery information
  * Order values

---

# 🔄 1. Data Cleaning & Transformation — Power Query

The raw dataset was cleaned and transformed using **Power Query** before building the data model.

### Data Type Corrections

* Converted numeric/string date values into proper **Date** formats.
* Standardized **Sign-up Date** in the Customers table.
* Standardized **Order Date** in the Orders table.

### Text Cleaning

* Applied **Trim** and **Clean** transformations.
* Removed unwanted spaces and inconsistent text formatting.
* Removed redundant columns such as raw address strings.

### Conditional Columns

Standardized inconsistent values for:

* **Order Online** → Yes / No / Null
* **Book Table** → Yes / No / Null

### Text Extraction & Splitting

* Extracted the numeric rating from the original **Rate** field.
* Extracted the primary cuisine from the **Cuisines** field.
* Replaced conversion errors with Null where appropriate.

### Column Renaming

Columns were renamed to improve readability:

| Original Column     | Cleaned Column |
| ------------------- | -------------- |
| Listed in (City)    | City Group     |
| Listed in (Type)    | Service Type   |
| Approx Cost for Two | Cost for Two   |

---

# ⭐ 2. Data Modeling — Star Schema

The project uses a **Star Schema** for structured and efficient analytical reporting.

### Fact Table

**Orders**

Contains transaction-level information such as:

* Order ID
* Restaurant ID
* Customer ID
* Order Date
* Order Value
* Delivery information

### Dimension Tables

* **Customers**
* **Restaurants**
* **Date Table**

### Relationships

The model uses:

**1-to-Many relationships**

with **single-direction filtering** from dimension tables toward the central Orders fact table.

### Model Structure

<img width="1217" height="637" alt="image" src="https://github.com/user-attachments/assets/163fb702-badc-4763-b2ec-0daab5867643" />


```text
                 Customers
                     │
                     │
                     ▼
Restaurants ────► Orders ◄──── Date
```

---

# 🧮 3. Calculated Columns & DAX Measures

Custom calculated columns and DAX measures were created to support business analysis.

## Calculated Columns

### Cost Bucket

Restaurants are categorized based on Cost for Two:

* Budget Friendly — `< 500`
* Mid Range — `< 1000`
* Premium — `> 1000`

### Rating Bucket

Ratings are classified into:

* Average — `≤ 3.0`
* Good — `≤ 4.0`
* Excellent — `> 4.0`
* Blank — Missing rating

### Delivery Status

Delivery performance is categorized as:

* **On Time** — `≤ 45 minutes`
* **Late** — `> 45 minutes`

### Order Month

Order dates are formatted into:

```text
MMM YYYY
```

for monthly trend analysis.

### Repeated vs New

Customers are classified dynamically as:

* New Customer
* Repeat Customer

---

# 📐 DAX Measures

DAX measures were organized into logical folders for easier report management.

## KPI / Core Measures

* Total Orders
* Total Revenue
* Average Order Value
* Average Delivery Time
* Total Customers
* Total Restaurants

## Status Measures

* Delivered Orders
* Cancelled Orders
* Cancelled %
* Late Orders
* Late Delivery %

## Customer Measures

* Repeat Customers
* Repeat Customer %
* Orders per Customer

## Restaurant Performance Measures

* Revenue per Restaurant
* Average Rating
* Average Votes

## Time Intelligence Measures

* Revenue YTD
* Orders YTD
* Revenue Previous Month
* Revenue Growth %

---

# 📊 4. Dashboard Pages

The Power BI report contains **6 dedicated interactive pages**.

---

## 1️⃣ Executive Overview

Provides a high-level summary of overall business performance.

### Key Visuals

* Total Revenue KPI
* Total Orders KPI
* Average Order Value KPI
* Average Delivery Time KPI
* Monthly Revenue Trend
* Monthly Orders Trend
* Revenue by City
* Order Status Breakdown
* Top 10 Restaurants by Revenue

### Purpose

Provides management with a quick overview of overall business performance.

<img width="1312" height="727" alt="image" src="https://github.com/user-attachments/assets/f7848b71-b3df-43a0-a1bf-52ed6eca4cbd" />


---

## 2️⃣ Customer Analytics

Focuses on customer behavior and purchasing patterns.

### Key Visuals

* Total Customers
* Repeat Customers
* Repeat Customer %
* Orders per Customer
* New vs. Repeat Customers
* Customer Sign-up Trend
* Top Customers by Revenue
* Top Customers by Order Frequency

### Purpose

Helps analyze customer acquisition, retention, and purchasing behavior.

<img width="1321" height="730" alt="image" src="https://github.com/user-attachments/assets/0aa30d8d-f2ba-4e5e-ad08-83b16416cb65" />


---

## 3️⃣ Restaurant Performance

Analyzes restaurant-level performance.

### Key Visuals

* Total Restaurants
* Average Rating
* Average Votes
* Revenue per Restaurant
* Revenue by Top 10 Restaurants
* Orders by Primary Cuisine
* Restaurant Rating vs. Revenue
* Order Distribution by Cost Bucket

### Purpose

Provides insights into restaurant performance, cuisine demand, ratings, and revenue contribution.

<img width="1312" height="697" alt="image" src="https://github.com/user-attachments/assets/c525ec93-8ff7-463d-a7d2-00538e5023f1" />

---

## 4️⃣ Delivery & Operations

Focuses on delivery efficiency and operational performance.

### Key Visuals

* Average Delivery Time
* Late Orders
* Late Delivery %
* Cancelled Orders
* Delivery Time Trend
* On Time vs. Late Delivery
* City vs. Order Status Matrix

### Purpose

Helps identify delivery delays, cancellations, and operational performance across cities.

<img width="1312" height="735" alt="image" src="https://github.com/user-attachments/assets/33507e35-7854-4f7f-9770-6247d574f3c4" />


---

## 5️⃣ Advanced Insights

This page provides advanced interactive analysis capabilities.

### Dynamic KPI Selector

A disconnected KPI parameter table is combined with the **DAX `SELECTEDVALUE` function** to dynamically switch the metric displayed in visualizations.

Users can switch between:

* Revenue
* Orders
* Average Order Value
* Delivery Time

### Interactive Q&A

The Power BI **Q&A visual** allows users to explore the dataset using natural-language questions.

### Purpose

Provides flexible and interactive ad-hoc analysis beyond standard dashboard visuals.

<img width="1317" height="447" alt="image" src="https://github.com/user-attachments/assets/02498ae5-af87-4abd-8709-fa0197ee258c" />


---

## 6️⃣ Restaurant Details — Drill-Through

A dedicated **Drill-Through page** is configured using **Restaurant Name**.

Users can right-click a restaurant from the report and navigate to its detailed analysis page.

### Restaurant-Level Insights

* Revenue
* Ratings
* Delivery Time
* Cuisine Mix
* Customer Breakdown
* Order Trends

### Purpose

Allows users to move from high-level restaurant analysis to detailed restaurant-level investigation.

<img width="1322" height="737" alt="image" src="https://github.com/user-attachments/assets/d1f4748e-1821-461c-a9fa-11fe81edf667" />


---

# 🛠️ Tools & Technologies

| Tool                   | Purpose                                    |
| ---------------------- | ------------------------------------------ |
| **Microsoft Power BI** | Dashboard development and visualization    |
| **Power Query**        | Data cleaning and transformation           |
| **DAX**                | Calculated columns and analytical measures |
| **Star Schema**        | Data modeling                              |
| **Kaggle Dataset**     | Source data                                |
| **Power BI Q&A**       | Natural-language analysis                  |

---

# 📈 Key Analytical Areas

The dashboard provides analysis across multiple business dimensions:

### 💰 Sales Analysis

* Revenue
* Orders
* Average Order Value
* Revenue Growth
* Monthly Trends

### 👥 Customer Analysis

* Customer Count
* Repeat Customers
* Customer Retention
* Orders per Customer
* Customer Revenue

### 🏪 Restaurant Analysis

* Restaurant Revenue
* Restaurant Ratings
* Votes
* Cuisine Performance
* Cost Segmentation

### 🚴 Delivery Analysis

* Average Delivery Time
* Late Orders
* Late Delivery %
* Cancellation Analysis
* City-wise Operations

### 📅 Time Analysis

* Monthly Trends
* Previous Month Revenue
* YTD Revenue
* YTD Orders
* Revenue Growth

---

# 🔍 Interactive Features

The dashboard includes several interactive Power BI features:

* Interactive slicers
* Cross-filtering
* Drill-through
* Dynamic KPI selection
* Q&A visual
* Time-intelligence analysis
* Restaurant-level exploration
* Interactive charts and tables

---

# 🧠 Project Workflow

```text
Kaggle Dataset
      ↓
Raw Data
      ↓
Power Query
      ↓
Data Cleaning & Transformation
      ↓
Star Schema Data Model
      ↓
Calculated Columns
      ↓
DAX Measures
      ↓
Interactive Visualizations
      ↓
6-Page Power BI Dashboard
      ↓
Business Analysis & Insights
```

---


# 🎓 What I Learned

Through this project, I gained practical experience in:

* Data cleaning using Power Query
* Building a Star Schema data model
* Creating calculated columns
* Writing DAX measures
* Implementing time intelligence
* Designing interactive Power BI dashboards
* Creating drill-through reports
* Building dynamic KPI selections
* Using Power BI Q&A
* Analyzing customer behavior
* Evaluating restaurant performance
* Analyzing delivery operations
* Converting raw transactional data into business insights

---

# 🚀 Project Outcome

This project demonstrates an end-to-end **Business Intelligence workflow** where raw food delivery transaction data is transformed into an interactive Power BI analytics solution.

The dashboard enables users to explore **sales, customers, restaurants, delivery operations, and time-based performance** through interactive visualizations and detailed drill-through analysis.

---

## 👨‍💻 Project Type

**Business Intelligence / Data Analytics / Power BI**

**Primary Tool:** Microsoft Power BI

**Dataset Size:** ~200,000 records

**Report Pages:** 6

**Architecture:** Star Schema
