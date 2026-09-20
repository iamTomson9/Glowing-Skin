export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          created_at: string;
          id: string;
          onboarding_status: 'not_started' | 'in_progress' | 'complete';
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          id: string;
          onboarding_status?: 'not_started' | 'in_progress' | 'complete';
          updated_at?: string;
        };
        Update: {
          onboarding_status?: 'not_started' | 'in_progress' | 'complete';
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

