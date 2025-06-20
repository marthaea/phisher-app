export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      bookings: {
        Row: {
          created_at: string
          end_time: string
          event_date: string
          event_name: string
          id: string
          model_id: string
          notes: string | null
          start_time: string
          user_id: string
        }
        Insert: {
          created_at?: string
          end_time: string
          event_date: string
          event_name: string
          id?: string
          model_id: string
          notes?: string | null
          start_time: string
          user_id: string
        }
        Update: {
          created_at?: string
          end_time?: string
          event_date?: string
          event_name?: string
          id?: string
          model_id?: string
          notes?: string | null
          start_time?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "bookings_model_id_fkey"
            columns: ["model_id"]
            isOneToOne: false
            referencedRelation: "models"
            referencedColumns: ["id"]
          },
        ]
      }
      bookmarks: {
        Row: {
          created_at: string
          story_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          story_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          story_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "bookmarks_story_id_fkey"
            columns: ["story_id"]
            isOneToOne: false
            referencedRelation: "stories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookmarks_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      calendar_events: {
        Row: {
          all_day: boolean | null
          created_at: string
          description: string | null
          end_time: string | null
          id: string
          start_time: string | null
          title: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          all_day?: boolean | null
          created_at?: string
          description?: string | null
          end_time?: string | null
          id?: string
          start_time?: string | null
          title?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          all_day?: boolean | null
          created_at?: string
          description?: string | null
          end_time?: string | null
          id?: string
          start_time?: string | null
          title?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      comments: {
        Row: {
          content: string
          created_at: string
          id: string
          parent_id: string | null
          story_id: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          parent_id?: string | null
          story_id?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          parent_id?: string | null
          story_id?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "comments_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_story_id_fkey"
            columns: ["story_id"]
            isOneToOne: false
            referencedRelation: "stories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_submissions: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          service: string
          subject: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          service: string
          subject: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          service?: string
          subject?: string
        }
        Relationships: []
      }
      diary_entries: {
        Row: {
          audio_url: string | null
          content: string | null
          created_at: string
          id: string
          mood: string | null
          title: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          audio_url?: string | null
          content?: string | null
          created_at?: string
          id?: string
          mood?: string | null
          title?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          audio_url?: string | null
          content?: string | null
          created_at?: string
          id?: string
          mood?: string | null
          title?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      favorites: {
        Row: {
          created_at: string
          id: string
          recipe_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          recipe_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          recipe_id?: string
          user_id?: string
        }
        Relationships: []
      }
      models: {
        Row: {
          age: number | null
          bio: string | null
          created_at: string
          height: string | null
          hourly_rate: number | null
          id: string
          image_url: string | null
          is_available: boolean | null
          measurements: string | null
          name: string
          specialties: string[] | null
          weight: string | null
        }
        Insert: {
          age?: number | null
          bio?: string | null
          created_at?: string
          height?: string | null
          hourly_rate?: number | null
          id?: string
          image_url?: string | null
          is_available?: boolean | null
          measurements?: string | null
          name: string
          specialties?: string[] | null
          weight?: string | null
        }
        Update: {
          age?: number | null
          bio?: string | null
          created_at?: string
          height?: string | null
          hourly_rate?: number | null
          id?: string
          image_url?: string | null
          is_available?: boolean | null
          measurements?: string | null
          name?: string
          specialties?: string[] | null
          weight?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          id: string
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          id?: string
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          id?: string
          updated_at?: string | null
          username?: string | null
        }
        Relationships: []
      }
      stories: {
        Row: {
          author_id: string
          comments: number
          content: string
          cover_image: string | null
          created_at: string
          excerpt: string | null
          id: string
          likes: number
          published: boolean
          published_at: string | null
          read_time: string | null
          title: string
          updated_at: string
        }
        Insert: {
          author_id: string
          comments?: number
          content: string
          cover_image?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          likes?: number
          published?: boolean
          published_at?: string | null
          read_time?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          author_id?: string
          comments?: number
          content?: string
          cover_image?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          likes?: number
          published?: boolean
          published_at?: string | null
          read_time?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "stories_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      story_likes: {
        Row: {
          created_at: string
          story_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          story_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          story_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "story_likes_story_id_fkey"
            columns: ["story_id"]
            isOneToOne: false
            referencedRelation: "stories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "story_likes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      story_tags: {
        Row: {
          story_id: string
          tag_id: string
        }
        Insert: {
          story_id: string
          tag_id: string
        }
        Update: {
          story_id?: string
          tag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "story_tags_story_id_fkey"
            columns: ["story_id"]
            isOneToOne: false
            referencedRelation: "stories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "story_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      tags: {
        Row: {
          created_at: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      todos: {
        Row: {
          completed: boolean | null
          created_at: string
          id: string
          text: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          completed?: boolean | null
          created_at?: string
          id?: string
          text?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          completed?: boolean | null
          created_at?: string
          id?: string
          text?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string
          due_date: string | null
          full_name: string | null
          id: string
          instagram: string | null
          location: string | null
          twitter: string | null
          updated_at: string
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          due_date?: string | null
          full_name?: string | null
          id: string
          instagram?: string | null
          location?: string | null
          twitter?: string | null
          updated_at?: string
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          due_date?: string | null
          full_name?: string | null
          id?: string
          instagram?: string | null
          location?: string | null
          twitter?: string | null
          updated_at?: string
          username?: string | null
          website?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
