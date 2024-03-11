export interface TopLevel {
  email:                 string;
  authorities:           Authority[];
  accountNonExpired:     boolean;
  accountNonLocked:      boolean;
  credentialsNonExpired: boolean;
  enabled:               boolean;
}

export interface Authority {
  authority: string;
}
