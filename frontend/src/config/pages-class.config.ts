class PagesConfig {
  get HOME(): string {
    return `/`;
  }

  get CATALOG() {
    return `/catalog`;
  }

  ITEM(id: string): string {
    return `/catalog/${id}`;
  }

  get CART() {
    return `/cart`;
  }

  get PROFILE() {
    return `/profile`;
  }

  get LOGIN() {
    return `/login`;
  }

  get ADMIN() {
    return `/admin`;
  }

  get USERS() {
    return `/admin/users`;
  }

  get PRODUCTS() {
    return `/admin/products`;
  }

  get POST() {
    return `/admin/post`;
  }

  get PAYMENTS() {
    return `/admin/payments`;
  }
}

export const PAGES = new PagesConfig();
