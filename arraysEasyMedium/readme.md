# 📊 Array Sorting Concepts

---

## 🔼 **Increasing Order** (Ascending - Strictly)
> Each element is **strictly greater** than the previous one

```javascript
let a = [1, 2, 3, 4, 5, 6, 7];
```

**Condition:** `a[i+1] > a[i]` ✓  
**Notes:** No duplicates allowed • Each value must be strictly greater

---

## 🔽 **Decreasing Order** (Descending - Strictly)
> Each element is **strictly less** than the previous one

```javascript
let a = [9, 8, 7, 6, 5, 4, 3, 2];
```

**Condition:** `a[i+1] < a[i]` ✓  
**Notes:** No duplicates allowed • Each value must be strictly smaller

---

## ⬆️ **Non-Decreasing Order** (Ascending with Duplicates)
> Each element is **greater than or equal** to the previous one

```javascript
let a = [1, 2, 3, 3, 4, 5, 6, 6, 6, 7, 8, 8, 9];
```

**Condition:** `a[i+1] >= a[i]` ✓  
**Notes:** Allows duplicates • Sorted in ascending order with possible repeated values

---

## ⬇️ **Non-Increasing Order** (Descending with Duplicates)
> Each element is **less than or equal** to the previous one

```javascript
let a = [10, 9, 9, 8, 8, 7, 7, 7, 6, 6, 5];
```

**Condition:** `a[i+1] <= a[i]` ✓  
**Notes:** Allows duplicates • Sorted in descending order with possible repeated values

---

## 📋 **Quick Comparison Table**

| Type | Direction | Duplicates | Condition |
|------|-----------|-----------|-----------|
| **Increasing** | ⬆️ Ascending | ❌ No | `a[i+1] > a[i]` |
| **Decreasing** | ⬇️ Descending | ❌ No | `a[i+1] < a[i]` |
| **Non-Decreasing** | ⬆️ Ascending | ✅ Yes | `a[i+1] >= a[i]` |
| **Non-Increasing** | ⬇️ Descending | ✅ Yes | `a[i+1] <= a[i]` |