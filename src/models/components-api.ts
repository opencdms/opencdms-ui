/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/v1/products/climatic-summary/": {
    post: operations["create_v1_products_climatic_summary__post"];
  };
  "/v1/products/inventory-plot/": {
    post: operations["create_v1_products_inventory_plot__post"];
  };
  "/v1/products/inventory-table/": {
    post: operations["create_v1_products_inventory_table__post"];
  };
  "/v1/products/timeseries-plot/": {
    post: operations["create_v1_products_timeseries_plot__post"];
  };
  "/v0/products/test/data_test": {
    post: operations["test_data_api_v0_products_test_data_test_post"];
  };
  "/v0/products/test/image_test": {
    post: operations["image_test_v0_products_test_image_test_post"];
  };
  "/v0/products/test/image_test_file": {
    post: operations["image_test_file_v0_products_test_image_test_file_post"];
  };
  "/v0/products/test/image_test_b64": {
    post: operations["image_test_base64_v0_products_test_image_test_b64_post"];
  };
  "/v0/products/test/image_test_link": {
    post: operations["image_test_b64_v0_products_test_image_test_link_post"];
  };
}

export interface components {
  schemas: {
    /** Body_create_v1_products_climatic_summary__post */
    Body_create_v1_products_climatic_summary__post: {
      data_params: components["schemas"]["ProductDataParams"];
      product_params: components["schemas"]["ClimaticSummaryParams"];
    };
    /** Body_create_v1_products_inventory_plot__post */
    Body_create_v1_products_inventory_plot__post: {
      data_params: components["schemas"]["ProductDataParams"];
      product_params: components["schemas"]["InventoryPlotParams"];
    };
    /** Body_create_v1_products_inventory_table__post */
    Body_create_v1_products_inventory_table__post: {
      data_params: components["schemas"]["ProductDataParams"];
      product_params: components["schemas"]["ClimaticSummaryParams"];
    };
    /** Body_create_v1_products_timeseries_plot__post */
    Body_create_v1_products_timeseries_plot__post: {
      data_params: components["schemas"]["ProductDataParams"];
      product_params: components["schemas"]["TimeseriesPlotParams"];
    };
    /** ClimaticSummaryParams */
    ClimaticSummaryParams: {
      /**
       * Date Time
       * @default obsDatetime
       */
      date_time?: string;
      /**
       * Station
       * @default recordedFrom
       */
      station?: string;
      /**
       * Elements
       * @default obsValue
       */
      elements?: unknown[];
      /** Year */
      year?: string;
      /** Month */
      month?: string;
      /** Dekad */
      dekad?: string;
      /** Pentad */
      pentad?: string;
      /**
       * To
       * @default hourly
       */
      to?: string;
      /** By */
      by?: string;
      /** Doy */
      doy?: string;
      /**
       * Doy First
       * @default 1
       */
      doy_first?: number;
      /**
       * Doy Last
       * @default 366
       */
      doy_last?: number;
      /**
       * Summaries
       * @default [object Object]
       */
      summaries?: { [key: string]: unknown };
      /** Na Rm */
      na_rm?: boolean;
      /** Na Prop */
      na_prop?: number;
      /** Na N */
      na_n?: number;
      /** Na Consec */
      na_consec?: number;
      /** Na N Non */
      na_n_non?: number;
      /** First Date */
      first_date?: boolean;
      /** N Dates */
      n_dates?: boolean;
      /** Last Date */
      last_date?: boolean;
      /**
       * Summaries Params
       * @default
       */
      summaries_params?: unknown[];
      /**
       * Names
       * @default {.fn}_{.col}
       */
      names?: string;
    };
    /**
     * DataFrameResponseType
     * @description An enumeration.
     * @enum {undefined}
     */
    DataFrameResponseType: "columns" | "records";
    /**
     * FileResponseType
     * @description An enumeration.
     * @enum {undefined}
     */
    FileResponseType: "file" | "base64" | "link";
    /** HTTPValidationError */
    HTTPValidationError: {
      /** Detail */
      detail?: components["schemas"]["ValidationError"][];
    };
    /** ImageLinkResponse */
    ImageLinkResponse: {
      /** Mimetype */
      mimetype: string;
      /** Link */
      link: string;
    };
    /** InventoryPlotParams */
    InventoryPlotParams: {
      /**
       * Date Time
       * @default obsDatetime
       */
      date_time?: string;
      /**
       * Elements
       * @default obsValue
       */
      elements?: string;
      /**
       * Station
       * @default recordedFrom
       */
      station?: string;
      /** Year */
      year?: string;
      /** Doy */
      doy?: string;
      /** Year Doy Plot */
      year_doy_plot?: boolean;
      /** Facet By */
      facet_by?: string;
      /**
       * Facet X Size
       * @default 7
       */
      facet_x_size?: number;
      /**
       * Facet Y Size
       * @default 11
       */
      facet_y_size?: number;
      /**
       * Title
       * @default Inventory Plot
       */
      title?: string;
      /** Plot Title Size */
      plot_title_size?: number;
      /**
       * Plot Title Hjust
       * @default 0.5
       */
      plot_title_hjust?: number;
      /** X Title */
      x_title?: string;
      /** Y Title */
      y_title?: string;
      /** X Scale From */
      x_scale_from?: number;
      /** X Scale To */
      x_scale_to?: number;
      /** X Scale By */
      x_scale_by?: number;
      /** Y Date Format */
      y_date_format?: string;
      /** Y Date Scale By */
      y_date_scale_by?: number;
      /**
       * Y Date Scale Step
       * @default 1
       */
      y_date_scale_step?: number;
      /**
       * Facet Scales
       * @default fixed
       */
      facet_scales?: string;
      /**
       * Facet Dir
       * @default h
       */
      facet_dir?: string;
      /** Facet X Margin */
      facet_x_margin?: number[];
      /** Facet Y Margin */
      facet_y_margin?: number[];
      /** Facet Nrow */
      facet_nrow?: number;
      /** Facet Ncol */
      facet_ncol?: number;
      /**
       * Missing Colour
       * @default red
       */
      missing_colour?: string;
      /**
       * Present Colour
       * @default grey
       */
      present_colour?: string;
      /**
       * Missing Label
       * @default Missing
       */
      missing_label?: string;
      /**
       * Present Label
       * @default Present
       */
      present_label?: string;
      /** Display Rain Days */
      display_rain_days?: boolean;
      /** Rain */
      rain?: string;
      /**
       * Rain Cats
       * @default [object Object]
       */
      rain_cats?: { [key: string]: unknown[] };
      /** Coord Flip */
      coord_flip?: boolean;
    };
    /** ProductDataParams */
    ProductDataParams: {
      /**
       * Station Ids
       * @default 67774010,67963040
       */
      station_ids?: number[];
      /**
       * Period
       * @default 2000-01-01,2000-03-01
       */
      period?: string[];
      /**
       * Elements
       * @default 2,4
       */
      elements?: number[];
    };
    /** TimeseriesPlotParams */
    TimeseriesPlotParams: {
      /** Date Time */
      date_time: string;
      /** Elements */
      elements: string;
      /** Station */
      station?: string;
      /**
       * Facet By
       * @default stations
       */
      facet_by?: string;
      /**
       * Type
       * @default line
       */
      type?: string;
      /** Add Points */
      add_points?: boolean;
      /** Add Line Of Best Fit */
      add_line_of_best_fit?: boolean;
      /**
       * Se
       * @default true
       */
      se?: boolean;
      /** Add Path */
      add_path?: boolean;
      /** Add Step */
      add_step?: boolean;
      /** Na Rm */
      na_rm?: boolean;
      /** Show Legend */
      show_legend?: boolean;
      /**
       * Title
       * @default Timeseries Plot
       */
      title?: string;
      /** X Title */
      x_title?: string;
      /** Y Title */
      y_title?: string;
    };
    /** ValidationError */
    ValidationError: {
      /** Location */
      loc: string[];
      /** Message */
      msg: string;
      /** Error Type */
      type: string;
    };
  };
}

export interface operations {
  create_v1_products_climatic_summary__post: {
    parameters: {
      query: {
        response_type?: components["schemas"]["DataFrameResponseType"];
      };
    };
    responses: {
      /** Successful Response */
      200: {
        content: {
          "application/json": unknown;
        };
      };
      /** Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["Body_create_v1_products_climatic_summary__post"];
      };
    };
  };
  create_v1_products_inventory_plot__post: {
    parameters: {
      query: {
        response_type: components["schemas"]["FileResponseType"];
      };
    };
    responses: {
      /** Successful Response */
      200: unknown;
      /** Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["Body_create_v1_products_inventory_plot__post"];
      };
    };
  };
  create_v1_products_inventory_table__post: {
    responses: {
      /** Successful Response */
      200: {
        content: {
          "application/json": unknown;
        };
      };
      /** Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["Body_create_v1_products_inventory_table__post"];
      };
    };
  };
  create_v1_products_timeseries_plot__post: {
    responses: {
      /** Successful Response */
      200: unknown;
      /** Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["Body_create_v1_products_timeseries_plot__post"];
      };
    };
  };
  test_data_api_v0_products_test_data_test_post: {
    responses: {
      /** Successful Response */
      200: {
        content: {
          "application/json": unknown;
        };
      };
      /** Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["ProductDataParams"];
      };
    };
  };
  image_test_v0_products_test_image_test_post: {
    parameters: {
      query: {
        response_type: components["schemas"]["FileResponseType"];
      };
    };
    responses: {
      /** Successful Response */
      200: {
        content: {
          "application/json": unknown;
        };
      };
      /** Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  image_test_file_v0_products_test_image_test_file_post: {
    responses: {
      /** Successful Response */
      200: unknown;
    };
  };
  image_test_base64_v0_products_test_image_test_b64_post: {
    responses: {
      /** Successful Response */
      200: {
        content: {
          "application/json": unknown;
        };
      };
    };
  };
  image_test_b64_v0_products_test_image_test_link_post: {
    responses: {
      /** Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["ImageLinkResponse"];
        };
      };
    };
  };
}

export interface external {}
