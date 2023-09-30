# ng-ph-loading Documentation

## Introduction

**ng-ph-loading** is an Angular library that provides flexible and customizable placeholders for loading content. This library allows you to create loading placeholders for various parts of your Angular application, making it easy to maintain a consistent loading experience across your project.

### Installation

To use **ng-ph-loading** in your Angular application, you can install it via npm:

```bash
npm install ng-ph-loading
```

## Getting Started

1. Import `PlaceholderLoadingModule` into your Angular module:

   ```application module
   import { NgModule } from '@angular/core';
   import { BrowserModule } from '@angular/platform-browser';
   import { PlaceholderLoadingModule } from 'ng-ph-loading';

   @NgModule({
     imports: [BrowserModule, PlaceholderLoadingModule],
     // ...
   })
   export class YourModule { }
   ```

2. Start using the `ng-ph-loading` components in your templates as needed.

## Components

### PlaceholderLoadingContainerComponent

The `PlaceholderLoadingContainerComponent` is used as a wrapper to define the overall layout and styling of the loading placeholders.

**Inputs:**

- `bgColor` (string): Background color of the loading container.
- `border` (string): Border style of the loading container.
- `padding` (string): Padding around the loading container.
- `bRadius` (string): Border radius of the loading container.
- `rowGap` (string): Gap between rows.
- `marginB` (string): Bottom margin of the loading container.

**Usage:**

```html
<ph-loading bgColor="#f8f8f8" padding="10px" bRadius="8px" rowGap="11px" marginB="8px">
  <!-- Add PlaceholderLoadingRowComponent elements here -->
</ph-loading>
```

### PlaceholderLoadingRowComponent

The `PlaceholderLoadingRowComponent` is used to define rows of loading placeholders within the container.

**Inputs:**

- `rowGap` (string): Gap between columns in the row.

**Usage:**

```html
<ph-loading-row rowGap="3px">
  <!-- Add PlaceholderLoadingColumnComponent elements here -->
</ph-loading-row>
```

### PlaceholderLoadingColumnComponent

The `PlaceholderLoadingColumnComponent` is used to define individual loading columns within a row.

**Inputs:**

- `col` (string): Width of the column, e.g., "2" for 2/12 grid width.
- `height` (string): Height of the column.
- `filled` (boolean): Whether the column should appear filled.
- `circle` (boolean): Whether the column should have a circular shape.

**Usage:**

```html
<ph-loading-col col="2" height="18" filled></ph-loading-col>
```

## Example Usage

```html
<ph-loading *ngIf="loading" bgColor="#f8f8f8" padding="10px" bRadius="8px">
  <ph-loading-row rowGap="3px">
    <ph-loading-col col="2" height="18" filled></ph-loading-col>
    <ph-loading-col col="5" height="18"></ph-loading-col>
    <ph-loading-col col="2" height="15" filled></ph-loading-col>
    <ph-loading-col col="1" height="18"></ph-loading-col>
    <ph-loading-col col="2" height="18" filled></ph-loading-col>
  </ph-loading-row>

  <ph-loading-row>
    <ph-loading-col col="3" height="15" filled></ph-loading-col>
    <ph-loading-col col="2" height="15"></ph-loading-col>
    <ph-loading-col col="2" height="18" filled></ph-loading-col>
    <ph-loading-col col="2" height="15" filled></ph-loading-col>
    <ph-loading-col col="1" height="15"></ph-loading-col>
    <ph-loading-col col="2" height="18" filled></ph-loading-col>
  </ph-loading-row>

  <!-- Add more rows and columns as needed -->
</ph-loading>
```

## Best Practices

- Customize the loading placeholders to match the design and layout of your application.
- Use the `filled` property to indicate which columns should appear filled, simulating content.
- Experiment with different styles and layouts to create an engaging loading experience.

## Troubleshooting

- If you encounter any issues or have questions, please refer to the library's GitHub repository for support and updates.

## Additional Resources

- [GitHub Repository](https://github.com/amirblz/ph-loading)

## Version History

- **v1.0.1** (September 2023): Initial release of ng-ph-loading.

## Conclusion

Thank you for using **ng-ph-loading** to enhance your Angular application's loading experience. I hope this library simplifies the process of creating loading placeholders and contributes to a better user experience in your project. If you have any feedback or suggestions, please feel free to share them with us on our GitHub repository.
