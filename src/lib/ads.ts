import { supabase } from "./supabase";
import { Ad, AdFormData } from "@/types/ad";
import { uploadToCloudinary } from "./cloudinary";

export const createAd = async (
  adData: AdFormData,
): Promise<{ ad: Ad | null; error: any }> => {
  try {
    const imageUrl = await uploadToCloudinary(adData.image);

    const { data: ad, error } = await supabase
      .from("ads")
      .insert({
        title: adData.title,
        image_url: imageUrl,
        link_url: adData.link_url,
        is_active: true,
      })
      .select()
      .single();

    if (error) throw error;
    return { ad, error: null };
  } catch (error) {
    return { ad: null, error };
  }
};

export const updateAd = async (
  id: string,
  adData: Partial<Ad>,
): Promise<{ success: boolean; error: any }> => {
  try {
    const { error } = await supabase.from("ads").update(adData).eq("id", id);

    if (error) throw error;
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error };
  }
};

export const deleteAd = async (
  id: string,
): Promise<{ success: boolean; error: any }> => {
  try {
    const { error } = await supabase.from("ads").delete().eq("id", id);

    if (error) throw error;
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error };
  }
};

export const getAllAds = async (): Promise<{
  ads: Ad[] | null;
  error: any;
}> => {
  try {
    const { data: ads, error } = await supabase
      .from("ads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return { ads, error: null };
  } catch (error) {
    return { ads: null, error };
  }
};

export const getActiveAds = async (): Promise<{
  ads: Ad[] | null;
  error: any;
}> => {
  try {
    const { data: ads, error } = await supabase
      .from("ads")
      .select("*")
      .eq("is_active", true)
      .order("created_at", { ascending: false });

    if (error) throw error;
    return { ads, error: null };
  } catch (error) {
    return { ads: null, error };
  }
};
